# Confirm

Allows you to call a confirmation modal similar to how you use `window.confirm`.

## Example 🚀

```javascript
Confirm({
  name: 'Cancel Changes',
  title: 'Are you sure?',
  description: `If you leave this card without hitting "Save Changes," all of your changes will be lost.`,
  okLabel: 'Confirm',
  cancelLabel: 'Cancel',
})
  .then(() => console.log('User clicked confirm'))
  .catch(() => console.log('User clicked cancel'));
```
