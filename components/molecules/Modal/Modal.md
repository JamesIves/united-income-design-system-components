# Modal

The Modal component generates a full screen prompt to the user.

## Importing 📦

You can use this component using one of the following import patterns.

```javascript
import Modal from '@unitedincome/components/dist/Modal'
```

```javascript
import {Modal} from '@unitedincome/components'
```

## Example 🚀

```javascript
<Modal
  name="modalName"
  show={this.state.show}
  preventClose={false}
  label={<div>Open Modal</div>}
  toggle={() => this.setState({show: !this.state.show})}
>
  <h2>Montezuma is the best cat</h2>
  <p>You can place a paragraph about how good of a cat he is here</p>
  <div className="uic--modal-bottom">
    <p>Additional content to place at the bottom of the modal.</p>
  </div>
</Modal>
```

## Displaying the Modal

The modal can be displayed using the `label` prop which will create a button to open/close the modal. You can also simply pass in a boolean to the `show` prop to default the state to open.

If you have a prompt inside of the modal with a button, you can simply toggle the state which opens the modal to hide it.

```javascript
<Modal
  name="prompt"
  show={this.state.prompt}
  toggle={(name, value) => this.setState({[name]: value})}
  preventClose={false}
  label={<div>Open Modal</div>}
>
  <h2>Montezuma is the best cat</h2>
  <p>You can place a paragraph about how good of a cat he is here</p>
  <div className="uic--modal-bottom">
    <button
      onClick={(name, value) => this.setState({prompt: !this.state.prompt})}
    >
      Close modal
    </button>
  </div>
</Modal>
```

By default the user can click off the modal and click the button near the top to close it. If you'd like to force a user prompt you can prevent the modal from being closed using the `preventClose` prop.

## Helper Classes

The modal comes with a number of helper styles to make sure you're adhering to the style guide. For modal headers you should use `h2` tags for [accessability purposes](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML_sections_and_outlines#Defining_sections), and any additional paragraphs should use `p` tags. If you'd like to add a button to the bottom of the modal you can wrap it in the `uic--modal-bottom` class.

```javascript
<h2>The header!</h2>
<p>Some helper text!</p>
<div className="uic--modal-bottom">
  <p>Do you want to click me?</p>
  <button>
    Click me!
  </button>
</div>
```
