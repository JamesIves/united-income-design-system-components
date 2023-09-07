
<p align="center">
  <img src="https://i.imgur.com/rPP3kdY.png" alt="United Income logo" width="650" />
</p>
<div align="center">

> **info**
> This repository is a public archive of the United Income component library. United Income was a financial technology startup aquired by Capital One in 2020.

</div>

This library aims to standardize the implementation and appearance of [React](https://reactjs.org/) components throughout [United Income's](https://unitedincome.com) properties. It includes a series of exportable components derived from the [United Income Design System](https://projects.invisionapp.com/dsm/united-income-design-system/united-income-brand) that can be used across teams to build a uniform experience.

## Getting Started 🚀

You can install the United Income component library into your project by running the following command.

```bash
yarn add @unitedincome/components
```

This component library can be installed and initialized by running `yarn start`. This will start a local instance of Storybook, allowing you to view a series of stories that represent each component.

:octocat: If you'd like to contribute to this project please take a look at the [contributing guide](CONTRIBUTING.md).

### Using a Component 📚

We utilize peer dependencies as we often require packages that already exist in our other applications. Because of this you will also need to install the [required peer dependencies](https://github.com/UnitedIncome/components/blob/master/package.json#L109) into your project. You can learn more about peer dependencies [here](https://nodejs.org/es/blog/npm/peer-dependencies/).

You can then decide if you want to use this library by importing components individually or by importing them all together which will result in a larger bundle size.

For individual importing, you can pull in separate files from the `dist` folder.

```javascript
import Button from '@unitedincome/components/dist/Button';
```

To import all components together, you can import more simply:

```javascript
import {Button, CardShell, Slider} from '@unitedincome/components';
```

You will also need to import the relevant CSS files. You have the choice between importing them individually into your style manifest or in bulk. For both methods you'll need to also include the `util.css` file which includes prefixed grid layout and utility classes from [Bootstrap](https://getbootstrap.com/). These classes are prefixed with `uic--` and can be used like so: `uic--col-md-6`.

For individual imports you can use the following:

```scss
@import '~@unitedincome/components/dist/util.css';
@import '~@unitedincome/components/dist/Button.css';
```

To import all styles you can use:

```scss
@import '~@unitedincome/components/dist/util.css';
@import '~@unitedincome/components/dist/index.css';
```

This component library also comes packaged with a series of color variables that are outlined in the [United Income DSM](https://projects.invisionapp.com/dsm/united-income-design-system/united-income-brand/folder/colors/5bfd958fc541d90011cf975d). These can be imported into your Sass manifest like so:

```scss
@import '~@unitedincome/components/dist/colors.scss';
```

These variables can also be utilized in JavaScript.

```javascript
import {colors} from '@unitedincome/components';
```

In addition to color variables this component library also has a number of [z-index values available to use](https://unitedincome.github.io/components/?path=/docs/utilities-styles--zindex). You can maintain the same ordering hierarchy by importing these variables into your project like so:

```scss
@import '~@unitedincome/components/dist/zindex.scss';
```

These are also available as a JavaScript object..

```javascript
import {zindex} from '@unitedincome/components';
```

## Building a Component 🔩

Components should be written using [TypeScript](https://www.typescriptlang.org/). Running `yarn generate` will create the folder and files you need to start building out your component. Each component at the very least should have an export, documentation, testing, and a story file. The general structure should look something like the following.

```markdown
•
└── components
├── atoms
│ └── Input
│ ├── Input.tsx
│ ├── Input.mdx
│ ├── Input.spec.tsx
│ └── Input.story.js
└── molecules
```

To make utilizing other components within your component easier, the library includes a number of directory aliases which allow for easier importing, you can utilize `~components`, `~constants` and `~proptypes` to access the root directories.

### Testing Changes 💊

Please refer to the [contributing guide](CONTRIBUTING.md) for information on how to test your changes.

### Best Practices 🏁

While there are always going to be special cases, the following guidelines should be considered when contributing to the library.

1. Do not include external margins or padding on the individual components by default.
2. Create strong PropTypes for all props on all components, even if that necessitates custom PropTypes.
3. Comment each PropType, this will allow for React doc gen to properly document what each one does.
4. Components should have **100%** test coverage.
5. Keep external dependencies to an absolute minimum and, when used, most likely add them as peer dependencies in the `package.json` and as external dependencies in `webpack.config.js`.
6. While components can utilize internal state, do not make them reliant on a global state (i.e., redux).
7. The Bootstrap 4 grid and utility classes are included, and prefixed with `uic--`, these should be used as much as possible.
8. Check for the existence of global variables such as those exposed by `window` in a browser before accessing them. We use this library in non-browser environments, [such as `react-static` which requires code to be node-safe](https://github.com/nozzle/react-static/blob/v6/docs/concepts.md#writing-universal-node-safe-code).
9. Do not remove the browser default `outline` focus state unless you're replacing it with something else.
10. Documentation should be clear and concise, and offer code samples as much as possible using [mdx](https://mdxjs.com/).
11. CSS should be written using the [BEM methodology](https://en.bem.info/methodology/quick-start/) and prefixed with `uic--`.

### Creating a `.story.js` file 📒

The `.story.js` file should represent a staged version of your component which will display in the Storybook interface. Each story is snapshot tested with a visual regression testing tool called [Percy](https://percy.io/), so capturing different visual variations of your component in a story is preferred.

This component library utilizes a number of Storybook addons, such as knobs and storybook-readme to allow users to play around with the relevant PropTypes, and to see inline documentation. To simplify your story creation, adding a `defaultProps` helper function that configures the component props is preferred.

You can find a basic example of a Story below.

```javascript
import React from 'react';
import {storiesOf} from '@storybook/react';
import TrashIcon from './TrashIcon';
import {text} from '@storybook/addon-knobs';
import TrashIconReadme from './TrashIcon.md';

const stories = storiesOf('Atoms/Icons/TrashIcon', module);

stories.addParameters({
  docs: {
    page: TrashIconReadme,
  },
});

// Sets up the default props for multiple different story variations.
const defaultProps = () => ({
  fill: text('fill', '#000'),
  height: text('height', '2rem'),
  width: text('width', '2rem'),
});

stories.add('default', () => (<TrashIcon {...defaultProps()} />), { // Options ... });
```

#### InVision Configuration

This Storybook has integration with InVision's DSM product. If a story exists in the DSM you can attach the corresponding id to the story by passing the following into the stories options object. You can learn more about how to generate an id [here](https://support.invisionapp.com/hc/en-us/articles/360028509991-Getting-Started-with-Live-Components).

```javascript
{
  'in-dsm': {
    id: 'abc123
  }
}
```

#### Percy Configuration

Depending on the type of story it may be necessary to skip it from being tested with [Percy](https://percy.io/). You can do this by passing the following into the stories options object.

```javascript
{
  'percy': {
    skip: true
  }
}
```

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

### Accessibility 💬

Components are linted for accessibility using the [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y#readme) and validated using [storybook-addon-a11y](https://www.npmjs.com/package/@storybook/addon-a11y).

Additionally included in the component library preview is a polyfill for the `:focus-visible` CSS pseudo selector, which turns off the `outline` CSS property off for users who are not using a keyboard to navigate. You can include the polyfill in your own project by including the script file and the required CSS on the page.

```html
<!-- Turns off the outline for those not using a keyboard -->
<style>
  .js-focus-visible :focus:not(.focus-visible) {
    outline: none;
  }
</style>

<script src="https://cdn.jsdelivr.net/npm/focus-visible@5.0.2/dist/focus-visible.min.js"></script>
```

You can learn more about the `:focus-visible` polyfill [here](https://github.com/WICG/focus-visible).

### `rem` Sizing

This component library uses [CSS rem sizing](https://css-tricks.com/rem-global-em-local/) for spacing and font sizes. In order to get the intended effect your application should use the following sizing base.

```css
html {
  font-size: 10px;
}
```

## Additional Resources 🍕

When learning about this library, the following resources may come in handy.

- [Storybook official documentation](https://storybook.js.org/docs/basics/introduction/)
- [Atomic Design Principles](http://bradfrost.com/blog/post/atomic-web-design/)
- [Percy Documentation](https://percy.io/)
