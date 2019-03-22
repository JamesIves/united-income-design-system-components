# FormSummary Component

This component renders a summary for form questions and can also display groups of data.

## Example 🚀

```javascript
<QuestionCard
  summary={
    <FormSummary
      shortTitle="This is a simpler question"
      answerGroups={[
        {
          groupName: 'group',
          answers: [
            {label: 'From', value: 'Bank of America Checking…8765'},
            {label: 'To', value: 'United Income Brokerage…2653'},
            {label: 'Amount', value: '$3,000.00'},
          ],
        },
      ]}
      editCard={() => true}
    />
  }
/>
```

### To Use With Hogwarts 1.0

```javascript
<Hogwarts.Screen
  container={QuestionCard}
  summary={
    <FormSummary
      shortTitle="This is a simpler question"
      answerGroups={[
        {
          groupName: 'group',
          answers: [
            {label: 'From', value: 'Bank of America Checking…8765'},
            {label: 'To', value: 'United Income Brokerage…2653'},
            {label: 'Amount', value: '$3,000.00'},
          ],
        },
      ]}
      to="/"
    />
  }
/>
```

## Props 🔧

The following component props are valid.

| Prop             | Type     | Default | Description                                                                                                       | Required |
| ---------------- | -------- | ------- | ----------------------------------------------------------------------------------------------------------------- | -------- |
| **answerGroups** | Array    |         | An array of objects containing the groups of answers to display. The object is broken down below                  | Yes      |
| **editCard**     | Function |         | Handler called to edit the card, used instead of `to` for McGonagall                                              | No       |
| **shortTitle**   | String   |         | A shorter version of the card title                                                                               | Yes      |
| **to**           | String   |         | The URL that the user should be directed to when edit is clicked, used instead of `editCard` for Hogwarts Express | No       |

### props.answerGroups

`props.answerGroups` should be an array containing objects with the following structure.

| Prop          | Type   | Default | Description                                                                               | Required |
| ------------- | ------ | ------- | ----------------------------------------------------------------------------------------- | -------- |
| **groupName** | String |         | The name of the group of data. This won't be shown if there is only one answer group      | No       |
| **answers**   | Array  |         | An array of objects containing the answers for the group. The object is broken down below | Yes      |

#### props.answerGroups.answers

`props.answerGroups.answers` should be an array containing objects with the following structure.

| Prop      | Type   | Default | Description                         | Required |
| --------- | ------ | ------- | ----------------------------------- | -------- |
| **label** | String |         | The label for the answer to display | Yes      |
| **value** | String |         | The value of the answer to display  | Yes      |
