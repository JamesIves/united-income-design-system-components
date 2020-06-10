/** @module McGonagall */
import pick from 'lodash/pick';
import * as queryString from 'query-string';
import React, {Component, FormEvent, MouseEvent, ReactNode} from 'react';
import {
  assign,
  AssignAction,
  DefaultContext,
  Machine,
  State,
  StateMachine,
  StateSchema,
} from 'xstate';
import ActionBar from '~components/molecules/ActionBar/ActionBar';
import Confirm from '~components/utilities/Confirm/Confirm';
import {isWindowDefined} from '~components/utilities/DetectBrowser/DetectBrowser';
import './McGonagall.scss';

// Saves the user data to McGonagalls state context.
export const saveToStateContext: AssignAction<
  unknown,
  McGonagallEvent
> = assign((ctx, eve) => ({
  ...eve,
}));

export type McGonagallCardProps = {
  /** Whether it should animate on mount */
  animate: boolean;
  /** Handler to cancel the changes. */
  cancelChanges: () => void;
  /** Whether making changes should clear out any changes made in steps after this. */
  clearFuture?: boolean;
  /** The card description. If given a raw string, the string is wrapped with a p tag. */
  description: ReactNode;
  /** Default values for a card */
  defaultValues?: {}[];
  /** Handler called to edit the card, only necessary for McGonagall. */
  editCard: React.MouseEventHandler;
  /** If changes have been made */
  hasMadeChanges: boolean;
  /** Shows the collapsed state of the card which switches the content to the summary. */
  isCollapsed: boolean;
  /** Shows spinner in place of card button, used when need to prevent actions while card is loading  */
  isFetching?: boolean;
  /** Whether this is the furthest step. if this and isCollapsed is true, this will collapse to the incomplete summary/ */
  isLatestCard: boolean;
  /** The handler to fire when a change happens. */
  onChange: (fieldName: string, newValue: string) => void;
  /** The handler to fire when the Submit button is clicked. */
  onSubmit: (e: FormEvent, outputDefaults: OutputDefaults) => void;
  /** Shorter title to be used with the card summary. */
  shortTitle: ReactNode;
  /** Shorter title to be used with the card summary. */
  stepIndex: number;
  /** The title of the card. */
  title: ReactNode;
  key: string;
  name: string;
  context: DefaultContext;
};

export type Step = {
  /** Name of the step, should be the same as the state name */
  name: string;
  /** Title of the card */
  title?: string;
  /** Optional shorter title used for the collapsed state */
  shortTitle?: string;
  /** Optional description */
  description?: ReactNode;
  /** Whether it should clear all future values when this card is edited */
  clearFuture?: boolean;
  /** A function that takes in props and state and renders the card */
  card: (cardProps: McGonagallCardProps, cardState: any) => ReactNode;
  /** The names of all the outputs for this card, required for cards that update values */
  outputs?: string[];
  defaultValues?: {}[];
};

type McGonagallEvent = {type: 'NEXT'};

export type StateConfigStates = Record<string, any> & {
  complete: {type: string};
};

interface Push {
  ({pathname, query}: {pathname?: string; query: any}): void;
  (pathname: string): void;
}

export type McGonagallProps<TContext = DefaultContext> = {
  /** Additional class names to apply */
  className?: string;
  /** Name of the flow */
  name?: string;
  /** Page to go to if user clicks the close button */
  exitLocation: string;
  /** Function to call on exit of the flow */
  onClose?: () => void;
  /** Location info from router */
  location: {
    /** Pathname */
    pathname?: string;
    /** Query string */
    search?: string;
  };
  /** State machine config object that tells the state machine the different states and context. View https://xstate.js.org/docs/guides/machines.html#configuration for more details */
  stateConfig: {
    /** Name of the flow */
    id: string;
    /** The state to start with */
    initial: string;
    /** The various states and transitions for the flow */
    states: StateConfigStates;
  };
  /** State machine options for implementing actions, activities, guards and services. View https://xstate.js.org/docs/guides/machines.html#options for more details */
  stateOptions?: {
    /** Fire-and-forget "side-effects" called on event. Can be called onEntry, onExit, or when a transition is executed. View https://xstate.js.org/docs/guides/machines.html#options for more details */
    actions?: {};
    /** Actions that occur over time and can be started/stopped. View https://xstate.js.org/docs/guides/activities.html#activities for more details */
    activities?: {};
    /** Conditional transitions. View https://xstate.js.org/docs/guides/guards.html#guards-conditional-transitions for more details */
    guards?: {};
    /** Allows invoking promiseses, callbacks, and machines. View https://xstate.js.org/docs/guides/communication.html#invoking-services for more details */
    services?: {};
  };
  /** The local "extended state" for the state machine  */
  stateContext?: TContext;
  /** Browser history object */
  browserHistory: {push: Push};
  /** The various steps to render */
  steps: Step[];
  // steps: Array<[Step[], CompletionScreen]>
  /** Shows loading indicator in place of card button  */
  isFetching?: boolean;
};

export type McGonagallState<TContext = DefaultContext> = {
  /** The name of the active step. */
  activeCard: Step['name'];
  /** array of completed steps */
  cardHistory: Step[];
  /** current xstate state */
  currXState: State<TContext, McGonagallEvent, StateSchema, any>;
  /** Used to switch animation styles */
  hasMounted: boolean;
} & DefaultContext; /** xstate context */

export type OutputDefaults = Record<string, string | boolean>;

/** McGonagall Component */
class McGonagall<TContext = DefaultContext> extends Component<
  McGonagallProps<TContext>,
  McGonagallState<TContext>
> {
  stateMachine: StateMachine<TContext, StateSchema, McGonagallEvent>;

  /**
   * Standard react constructor method
   * @param {Object} props - component props
   * @returns {undefined}
   */
  constructor(props: Readonly<McGonagallProps<TContext>>) {
    super(props);

    this.stateMachine = Machine(
      props.stateConfig,
      props.stateOptions,
      props.stateContext,
    );

    // Finds the step that matches the initial step declared by state machine
    const firstStep = this.getMatchingStep(
      props.steps,
      this.stateMachine.initialState,
    );

    const {currXState, activeCard, cardHistory} = this.navigateToLatestCard(
      [firstStep!],
      this.stateMachine.initialState,
    );

    this.state = {
      ...this.stateMachine.initialState.context,
      activeCard,
      cardHistory,
      currXState,
      hasMounted: false, // Used to switch animation styles
    };

    this.close = this.close.bind(this);
    this.navigateToLatestCard = this.navigateToLatestCard.bind(this);
    this.navigateToStep = this.navigateToStep.bind(this);
    this.renderStep = this.renderStep.bind(this);
    this.setStateField = this.setStateField.bind(this);
  }

  /** @inheritdoc */
  componentDidMount(): void {
    this.setState({hasMounted: true});
  }

  /** @inheritdoc */
  componentDidUpdate(): void {
    // When final step is no longer the active card
    if (
      this.isFinalStep(
        this.props.stateConfig.states,
        this.state.cardHistory[0].name,
      ) &&
      this.activeCard !== this.state.cardHistory[0].name
    ) {
      // Remove final step from the card history and revert currXState to the second last step
      const newCardHistory = this.state.cardHistory.slice(1);

      const newXState = this.stateMachine.transition(newCardHistory[1].name, {
        type: 'NEXT',
        ...this.state.currXState.context,
      });

      this.setState({
        cardHistory: newCardHistory,
        currXState: newXState,
      });
    }
  }

  /**
   * Gets active card based on query string
   */
  get activeCard(): string {
    return ((this.props.location.search &&
      queryString.parse(this.props.location.search).step) ||
      this.state.currXState.value) as string;
  }

  /**
   * Recursively transitions until it reaches the last card it can navigate to
   * @param {array} cardHistory current card history
   * @param {object} currXState current xstate object
   * @returns {object} updated currXstate, activeCard, and cardHistory
   */
  navigateToLatestCard(
    cardHistory: Step[],
    currXState: State<TContext, McGonagallEvent, any, any>,
  ): {
    currXState: State<TContext, McGonagallEvent, any, any>;
    activeCard: string;
    cardHistory: Step[];
  } {
    const newCardHistory = cardHistory;

    let latest = this.stateMachine.transition(currXState.value, {
      type: 'NEXT',
      navigatingToLatestCard: true,
      ...currXState.context,
    });

    let finalReached = false;

    do {
      if (
        latest.value !== currXState.value &&
        latest.value !== newCardHistory[0].name
      ) {
        newCardHistory.unshift(this.getMatchingStep(this.props.steps, latest)!);
      }

      const next = this.stateMachine.transition(latest.value, {
        type: 'NEXT',
        navigatingToLatestCard: true,
        ...currXState.context,
      });

      // Stop right before final step
      if (
        !this.isFinalStep(this.props.stateConfig.states, next.value as string)
      ) {
        latest = next;
      } else {
        finalReached = true;
      }
    } while (latest.value !== newCardHistory[0].name && !finalReached);

    this.navigateToStep(latest.value as string);

    return {
      currXState: latest,
      activeCard: latest.value as string,
      cardHistory: newCardHistory,
    };
  }

  /**
   * Update state machine and transition
   * @param {array<string>} outputs the expected outputs for the step
   * @param {object} outputDefaults default values for outputs to fallback to
   * @param {boolean} clearFuture whether it should clear values from future steps
   */
  updateStateMachine(
    outputs: string[],
    outputDefaults: OutputDefaults,
    clearFuture: boolean,
  ): void {
    let prevHistory = this.state.cardHistory;

    // Get values from state based on expected step outputs
    const payload = pick(this.state, outputs);

    // If output defaults are provided, check if any values should use them
    let updatedPayloadValues = {};
    if (outputDefaults) {
      updatedPayloadValues = Object.keys(payload).reduce((accum, key) => {
        const outputHasNoValue = !payload[key] || payload.key === '';
        const hasDefaultValue = Boolean(accum[key]);

        if (!(outputHasNoValue && hasDefaultValue)) {
          delete accum[key];
        }

        return accum;
      }, outputDefaults);
    }

    if (clearFuture) {
      // Find current position in card history
      const currIndex = this.state.cardHistory.findIndex(
        (history) => history.name === this.activeCard,
      );

      // Clear out future history
      prevHistory = prevHistory.slice(currIndex, prevHistory.length);
    }

    // Feed values to state machine to find the next state
    const newState = this.stateMachine.transition(
      this.activeCard,
      {
        type: 'NEXT',
        ...payload,
        ...updatedPayloadValues,
      },
      {...this.state.currXState.context},
    );

    // Get the side-effect actions to execute
    newState.actions.forEach((action) => {
      // If the action is executable, execute it
      action.exec &&
        action.exec(
          this.state.currXState.context,
          {
            type: 'NEXT',
            ...payload,
            ...updatedPayloadValues,
          },
          // eslint-disable-next-line no-warning-comments
          undefined as any, // this param is not optional and was not provided in the js version
        );
    });

    // If editing a previous step and not clearing future, it should just return to latest
    const shouldReturnToLatest =
      this.activeCard !== this.state.currXState.value && !clearFuture;

    // If returning to latest, use the same state but with an update context
    let updatedCurrState;
    if (shouldReturnToLatest) {
      updatedCurrState = this.state.currXState;
      updatedCurrState.context = newState.context;
    } else {
      updatedCurrState = newState;
    }

    const stepToNavigateTo =
      this.activeCard !== this.state.currXState.value && !clearFuture
        ? this.state.currXState.value
        : newState.value;

    this.navigateToStep(stepToNavigateTo as string);

    const updatedData = {
      currXState: updatedCurrState,
      ...updatedCurrState.context,
      ...updatedPayloadValues,
    };

    // If not returning to latest, need to update the card history
    if (!shouldReturnToLatest) {
      this.setState({
        ...updatedData,
        cardHistory: [
          this.getMatchingStep(this.props.steps, newState),
          ...prevHistory,
        ],
      });
    } else {
      this.setState(updatedData);
    }
  }

  /**
   * Finds the step that matches the given state machine state
   * @param {array<object>} allSteps array of step objects
   * @param {object} state state machine
   * @returns {object} step
   */
  getMatchingStep(
    allSteps: Step[],
    state: State<TContext, McGonagallEvent, StateSchema, any>,
  ): Step {
    return allSteps.find((step) => state.matches(step.name))!;
  }

  /**
   * Updates url query param to the provided step
   * @param {string} stepName step name
   * @param {boolean} [shouldScrollToTop = true] should scroll to top
   * @param {boolean} [shouldRevertChanges] should revert state to values from state machine context
   * @returns {undefined}
   */
  navigateToStep(
    stepName: Step['name'],
    shouldScrollToTop = true,
    shouldRevertChanges = false,
  ): void {
    if (shouldRevertChanges) {
      this.setState(this.state.currXState.context);
    }
    this.props.browserHistory.push({
      pathname: this.props.location.pathname,
      query: {
        ...queryString.parse(this.props.location.search || ''),
        step: stepName,
      },
    });
    if (shouldScrollToTop && isWindowDefined()) {
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  }

  /**
   * Set state by field name
   * @param {string} fieldName name of field in state
   * @param {string} newValue value to set
   * @returns {void}
   */
  setStateField(fieldName: string, newValue: string): void {
    this.setState({[fieldName]: newValue});
  }

  /**
   * Use exitLocation to close.
   * @param {object} e event
   */
  close(e: MouseEvent): void {
    e.preventDefault();
    if (this.props.onClose) {
      this.props.onClose();
    }
    // Ignoring this if since window.location can't be set in unit test
    /* istanbul ignore if  */
    if (this.props.exitLocation.startsWith('http') && isWindowDefined()) {
      window.location.pathname = this.props.exitLocation;
    } else {
      this.props.browserHistory.push(this.props.exitLocation);
    }
  }

  /**
   * Determines if it is the final step
   * @param {object} states states from the state config
   * @param {string} stepName name of the current step
   * @returns {bool} whether it is the final step
   */
  isFinalStep(states: StateConfigStates, stepName: string): boolean {
    return states[stepName].type && states[stepName].type === 'final';
  }

  /**
   * Shows confirmation modal
   * @param {func} onConfirm function to call on confirm
   * @returns {undefined}
   */
  async confirmChangeCancellation(onConfirm: () => void): Promise<void> {
    try {
      await Confirm({
        name: 'Cancel Changes',
        title: 'Are you sure?',
        description: `If you leave this card without hitting "Save Changes," all of your changes will be lost.`,
        okLabel: 'Leave Anyway',
        cancelLabel: 'Finish Answering',
      });

      onConfirm();
    } catch (e) {
      // Don't do anything if canceled
    }
  }

  /**
   * Renders a step
   * @param {object} step McG step
   * @param {number} stepIndex step index
   * @returns {JSX} step
   */
  renderStep(step: Step, stepIndex: number): ReactNode {
    const outputs = step.outputs || [];

    const statePayload = pick(this.state, outputs);
    const contextPayload = pick(this.state.currXState.context, outputs);

    const hasMadeChanges =
      JSON.stringify(statePayload) !== JSON.stringify(contextPayload);

    // On submit will send data to state machine and update
    const onSubmit = (
      e: FormEvent, // Have to include because cards have to support Hogwarts passing through event
      outputDefaults: OutputDefaults,
    ): void =>
      this.updateStateMachine(
        outputs,
        outputDefaults,
        step.clearFuture || false,
      );

    // Reverts any component state changes and goes to latest card
    const cancelChanges = (): void => {
      // Dont display confirmation dialog if no changes
      !hasMadeChanges
        ? this.navigateToStep(this.state.currXState.value as string, true, true)
        : this.confirmChangeCancellation(() => {
            this.navigateToStep(
              this.state.currXState.value as string,
              true,
              true,
            );
            this.forceUpdate(); // Won't rerender otherwise
          });
    };

    // Reverts any component state changes and opens card
    const editCard = (): void => {
      // Check for changes in active step
      const currStepOutputs = this.props.steps.find(
        ({name}) => name === this.activeCard,
      )!.outputs;
      const currStepStatePayload = pick(this.state, currStepOutputs!);
      const currStepContextPayload = pick(
        this.state.currXState.context,
        currStepOutputs!,
      );

      // Dont display confirmation dialog if no changes in active step or is currently at the review step
      JSON.stringify(currStepStatePayload) ===
        JSON.stringify(currStepContextPayload) || this.activeCard === 'review'
        ? this.navigateToStep(step.name, false, true)
        : this.confirmChangeCancellation(() => {
            this.navigateToStep(step.name, false, true);
            this.forceUpdate(); // Won't rerender otherwise
          });
    };

    // Pass props and state into cards
    return step.card(
      {
        animate: stepIndex !== 0 || (stepIndex === 0 && this.state.hasMounted),
        cancelChanges,
        clearFuture: step.clearFuture,
        context: this.state.currXState.context,
        description: step.description,
        defaultValues: step.defaultValues,
        editCard,
        hasMadeChanges,
        isCollapsed: this.activeCard !== step.name,
        isFetching: this.props.isFetching,
        isLatestCard: this.state.currXState.matches(step.name),
        key: step.name,
        name: step.name,
        onChange: this.setStateField,
        onSubmit,
        shortTitle: step.shortTitle,
        stepIndex,
        title: step.title,
      },
      this.state,
    );
  }

  /** @inheritdoc */
  render(): JSX.Element {
    const {name, stateConfig} = this.props;
    const {cardHistory} = this.state;

    return (
      <div className="uic--mcg-framework">
        <ActionBar title={name} onClose={this.close} />
        {this.isFinalStep(stateConfig.states, cardHistory[0].name) ? (
          this.renderStep(cardHistory[0], 0)
        ) : (
          <div className="uic--mcg-card-container" data-cy={name}>
            {cardHistory.map(this.renderStep)}
          </div>
        )}
      </div>
    );
  }
}

export default McGonagall;
