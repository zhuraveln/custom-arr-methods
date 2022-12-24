# custom-arr-methods

Custom arrays methods for different scenarios

## Installation

Download node at nodejs.org and install it, if you haven't already.

```bash
npm install custom-arr-methods
yarn add custom-arr-methods
```

## Usage

### insert

Immutable inserts element into array by destination index

```javascript
import { insert } from 'custom-arr-methods';

const i = [1, 2, 3, 4, 5];

const j = insert(i, 2, 42);

console.log(i); // [1, 2, 3, 4, 5]
console.log(j); // [1, 2, 42, 3, 4, 5]
```
