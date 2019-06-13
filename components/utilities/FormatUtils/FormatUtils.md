# FormatUtils

Format utility functions for things such as currency, dates, etc.

## Importing 📦

You can use this component using one of the following import patterns.

```javascript
import FormatUtils from '@unitedincome/components/dist/FormatUtils';
```

```javascript
import {FormatUtils} from '@unitedincome/components';
```

## Example 🚀

The following functions are available.

### formatCurrency

Formats a number into a currency string.

```javascript
import {FormatUtils} from '@unitedincome/components';

FormatUtils.formatCurrency(2000);

// $2,000.00
```

### formatCurrencyNoDecimal

Formats a number into a currency string with no decimal points.

```javascript
import {FormatUtils} from '@unitedincome/components';

FormatUtils.formatCurrencyNoDecimal(2000);

// $2,000
```
