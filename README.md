<p align="center">
  <img src="https://i.imgur.com/rPP3kdY.png" alt="United Income logo" width="650" />
</p>

<div align="center">

[![Storybook](https://cdn.jsdelivr.net/gh/storybooks/brand@master/badge/badge-storybook.svg)](https://ui.unitedincome.com) [![CircleCI](https://circleci.com/gh/UnitedIncome/components.svg?style=svg&circle-token=d8c505b4412cf8d13df383f7b5411ea9dc5d3e6a)](https://circleci.com/gh/UnitedIncome/components) [![codecov](https://codecov.io/gh/UnitedIncome/components/branch/master/graph/badge.svg?token=O1vKU2SVdc)](https://codecov.io/gh/UnitedIncome/components)

</div>

This library aims to standardize the implementation and appearance of [React](https://reactjs.org/) components throughout [United Income's](https://unitedincome.com) properties. This library has a series of exportable components that can be reused. It also utilizes [Storybook](https://storybook.js.org/) to create a pseudo-design system manager that is based on the principals of [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/).

# Getting Started 🚀

This component library can be installed and initialized by running `yarn install`followed by `yarn start`. This will start a local instance of Storybook, allowing you to view a series of stories that represent each component.

## Using a Component 📚

You can install the component library into your project by running the following command.

```bash
yarn add @unitedincome/components
```

You can then decide if you want to use this library by importing components individually or by importing them all together which will result in a larger bundle size.

For individual importing, you can pull in separate files from the `dist` folder.

```javascript
import Button from '@unitedincome/components/dist/Button';
```

To import all components together, you can import more simply:

```javascript
import {Button, CardShell, Slider} from '@unitedincome/components';
```

You will also need to import the relevant CSS files. You have the choice between importing them individually into your style manifest or in bulk. For both methods you'll need to also include the `util.css` file which includes a prefixed grid layout and utility classes from [Bootstrap](https://getbootstrap.com/).

For individual imports you can use the following:

```sass
@import "@unitedincome/components/dist/util.css";
@import "@unitedincome/components/dist/Button.css";
```

To import all styles you can use:

```sass
@import "@unitedincome/components/dist/util.css";
@import "@unitedincome/components/dist/index.css";
```

## Building a Component 🔩

Running `yarn generate` will create the folder and files you need to start building out your component. Each component at the very least should have an export, documentation, testing, and a story file. The general structure should look something like the following.

```markdown
•
└── components
├── atoms
│ └── Input
│ ├── Input.js
│ ├── Input.md
│ ├── Input.spec.js
│ └── Input.story.js
└── molecules
```

To make utilizing other components within your component easier, the library includes a number of directory aliases which allow for easier importing, you can utilize `~components`, `~constants` and `~proptypes` to access the root directories.

---

### Testing Changes 💊

As you are developing new components or updating existing ones, testing these components in the context of an existing front-end repository can be useful. Instead of going through the life cycle of publishing new versions, the easier way of handling this is utilizing package linking.

You can mimic publishing this repository locally by running `yarn link` in the directory for this library. To use it in another library you can mimic installing it by running `yarn link @unitedincome/components`.

At this point, whenever you make changes to the component library and run `yarn build`, the code running in the other repository will automatically change.

---

### Best Practices 🏁

While there are always going to be special cases, the following guidelines should be considered when contributing to the library.

2. Do not include margins on the individual components by default.
3. Create strong PropTypes for all props on all components, even if that necessitates custom PropTypes.
4. Comment each PropType, this will allow for React doc gen to properly document what each one does.
5. Components should have **100%** test coverage.
6. Keep external dependencies to an absolute minimum and, when used, most likely add them as peer dependencies in the `package.json` and as external dependencies in `webpack.config.js`.
7. While components can utilize internal state, do not make them reliant on a global state (i.e., redux).
8. The Bootstrap 4 grid and utility classes are included, and prefixed with `uic--`, these should be used as much as possible.

---

### Creating a `.story.js` file 📒

The `.story.js` file should represent a staged version of your component which will display in the Storybook interface. Each story is snapshot tested with a visual regression testing tool called [Percy](https://percy.io/), so capturing different visual variations of your component in a story is preferred.

This component library utilizes a number of Storybook addons, such as knobs and storybook-readme to allow users to play around with the relevant PropTypes, and to see inline documentation. To simplify your story creation, adding a `defaultProps` helper function that configures the component props is preferred.

You can find a basic example of a Story below.

```javascript
import React from 'react';
import {storiesOf} from '@storybook/react';
import TrashIcon from './TrashIcon';
import {text} from '@storybook/addon-knobs';
import {withReadme} from 'storybook-readme';
import TrashIconReadme from './TrashIcon.md';

const stories = storiesOf('Atoms/Icons/TrashIcon', module);

stories.addDecorator(withReadme(TrashIconReadme));

// Sets up the default props for multiple different story variations.
const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '20'),
  width: text('width', '20'),
});

stories.add('default', () => <TrashIcon {...defaultProps()} />);
```

---

### State Wrapper 🗽

If your component is controlled by state, you'll need to add a state wrapper to your story. For this you can use the `storybook-state` addon. You can find more information about the state wrapper we utilize [here](https://github.com/Sambego/storybook-state).

```javascript
import React from 'react';
import {storiesOf, forceReRender} from '@storybook/react';
import {StateDecorator, Store} from '@sambego/storybook-state';

const stories = storiesOf('Molecules/RadioButtons', module);

// Default state is stored in a Store object.
const store = new Store({
  yesNo: '',
  followup: 'custom',
  input: '',
  bank: '',
});

// You'll need to add the StateDecorator as a Storybook decorator using addDecorator.
stories.addDecorator(StateDecorator(store));

// Subscribes to store changes and forces the component to re-render.
store.subscribe(() => {
  forceReRender();
});

const defaultProps = ({formName, table}) => ({
  name: formName,
  table: boolean('table', table),
  onChange: (name, value) => store.set({[name]: value}),
  value: store.get(formName),
  key: formName,
});

// You can set/get state using state.set() and state.get().
stories.add('default', () => (
  <RadioButtons
    {...defaultProps({
      formName: 'yesNo',
      options: [
        {
          label: 'Yes',
          value: 'yes',
        },
        {
          label: 'No',
          value: 'no',
        },
        {
          label: "I don't know",
          value: 'idk',
          disabled: true,
        },
      ],
    })}
  />
));
```

---

## Additional Resources 🍕

When learning about this library, the following resources may come in handy.

- [United Income Stack Overflow](https://stackoverflow.com/c/unitedincome/questions/130)
- [Storybook official documentation](https://storybook.js.org/docs/basics/introduction/)
- [Atomic Design Principles](http://bradfrost.com/blog/post/atomic-web-design/)
- [Percy Documentation](https://percy.io/)
