import {StateDecorator, Store} from '@sambego/storybook-state';
import {boolean, text} from '@storybook/addon-knobs';
import {forceReRender, storiesOf} from '@storybook/react';
import React from 'react';
import Cabinet from './Cabinet';
import CabinetReadme from './Cabinet.mdx';

const stories = storiesOf('Molecules/Cabinet', module);

stories.addParameters({
  docs: {
    page: CabinetReadme,
  },
});

const store = new Store({
  cabinet: true,
});

stories.addDecorator(StateDecorator(store));

store.subscribe(() => {
  forceReRender();
});

const defaultProps = ({header}) => ({
  visibleInPrint: boolean('visibleInPrint', false),
  header: text('header', header),
  label: text('label', 'Open the cabinet'),
  handleWithState: true,
  labelOnDark: boolean('labelOnDark', false),
});

stories.add('default', () => (
  <Cabinet
    {...defaultProps({
      header: '10 Reasons Montezuma is the Best Cat',
    })}
  >
    <p>Let us talk about Montezuma.</p>
    <h2>He has really nice fur</h2>
    <p>
      He really does have nice fur, it is so soft. He really does have nice fur,
      it is so soft. He really does have nice fur, it is so soft. He really does
      have nice fur, it is so soft. He really does have nice fur, it is so soft.
      He really does have nice fur, it is so soft. He really does have nice fur,
      it is so soft. He really does have nice fur, it is so soft. He really does
      have nice fur, it is so soft. He really does have nice fur, it is so soft.
      He really does have nice fur, it is so soft. He really does have nice fur,
      it is so soft.
      <sup>
        <a href="#link1">1</a>
      </sup>
    </p>
    <h2>He meows</h2>
    <p>
      All cats meow, but his is the nicest. All cats meow, but his is the
      nicest. All cats meow, but his is the nicest. All cats meow, but his is
      the nicest. All cats meow, but his is the nicest. All cats meow, but his
      is the nicest. All cats meow, but his is the nicest. All cats meow, but
      his is the nicest. All cats meow, but his is the nicest. All cats meow,
      but his is the nicest. All cats meow, but his is the nicest. All cats
      meow, but his is the nicest. All cats meow, but his is the nicest. All
      cats meow, but his is the nicest. All cats meow, but his is the nicest.
      All cats meow, but his is the nicest. All cats meow, but his is the
      nicest. All cats meow, but his is the nicest. All cats meow, but his is
      the nicest.
    </p>
    <ul>
      <li>
        Your primary home and associated costs, including:
        <ul>
          <li>Utilities </li>

          <li>Mortgage payments</li>

          <li>Property tax </li>

          <li>Private mortgage insurance (PMI) payments </li>

          <li>Homeowners association (HOA) payments </li>

          <li>House insurance</li>
        </ul>
      </li>

      <li>Rent, including utilities </li>

      <li>Groceries </li>

      <li>Your primary car payments and associated costs like taxes</li>

      <li>
        Gasoline<sup>1</sup>
      </li>

      <li>
        Car insurance<sup>2</sup>
      </li>

      <li>Public transportation</li>

      <li>Alimony & child support </li>
    </ul>
    <p>Monte has no idea what any of the above things are.</p>
    <h2>He enjoys naps</h2>
    <p>He enjoys napping on people.</p>
    <h2>He is the cutest</h2>
    <p>I mean, look at him.</p>
    <img src="https://jamesiv.es/assets/images/montezuma.png" alt="Montezuma" />
    <h2>He likes fish</h2>
    <p>He likes it.</p>
    <footer>
      <ol>
        <li>
          Montezuma is the best cat in the world. Any claim that does not state
          this is false and should be disregarded.
        </li>
        <li id="link1">This is another thing</li>
      </ol>
    </footer>
  </Cabinet>
));

stories.add('open', () => (
  <Cabinet
    {...defaultProps({
      header: 'Montezuma is the Best Cat',
    })}
    show
    handleWithState={false}
  >
    <p>Let us talk about Montezuma.</p>
    <h2>He has really nice fur</h2>
    <p>
      He really does have nice fur, it is so soft. He really does have nice fur,
      it is so soft. He really does have nice fur, it is so soft. He really does
      have nice fur, it is so soft. He really does have nice fur, it is so soft.
      He really does have nice fur, it is so soft. He really does have nice fur,
      it is so soft. He really does have nice fur, it is so soft. He really does
      have nice fur, it is so soft. He really does have nice fur, it is so soft.
      He really does have nice fur, it is so soft. He really does have nice fur,
      it is so soft.
    </p>
    <h2>He meows</h2>
    <p>
      All cats meow, but his is the nicest. All cats meow, but his is the
      nicest. All cats meow, but his is the nicest. All cats meow, but his is
      the nicest. All cats meow, but his is the nicest. All cats meow, but his
      is the nicest. All cats meow, but his is the nicest. All cats meow, but
      his is the nicest. All cats meow, but his is the nicest. All cats meow,
      but his is the nicest. All cats meow, but his is the nicest. All cats
      meow, but his is the nicest. All cats meow, but his is the nicest. All
      cats meow, but his is the nicest. All cats meow, but his is the nicest.
      All cats meow, but his is the nicest. All cats meow, but his is the
      nicest. All cats meow, but his is the nicest. All cats meow, but his is
      the nicest.
    </p>
    <ul>
      <li>
        Your primary home and associated costs, including:
        <ul>
          <li>Utilities </li>

          <li>Mortgage payments</li>

          <li>Property tax </li>

          <li>Private mortgage insurance (PMI) payments </li>

          <li>Homeowners association (HOA) payments </li>

          <li>House insurance</li>
        </ul>
      </li>

      <li>Rent, including utilities </li>

      <li>Groceries </li>

      <li>Your primary car payments and associated costs like taxes</li>

      <li>Gasoline </li>

      <li>Car insurance </li>

      <li>Public transportation</li>

      <li>Alimony & child support </li>
    </ul>
    <p>Monte has no idea what any of the above things are.</p>
    <h2>He enjoys naps</h2>
    <p>He enjoys napping on people.</p>
    <h2>He is the cutest</h2>
    <p>I mean, look at him.</p>
    <img src="https://jamesiv.es/assets/images/montezuma.png" alt="Montezuma" />
    <h2>He likes fish</h2>
    <p>He likes it.</p>
    <footer>
      <ol>
        <li>
          Montezuma is the best cat in the world. Any claim that does not state
          this is false and should be disregarded.
        </li>
        <li>This is another thing</li>
      </ol>
    </footer>
  </Cabinet>
));
