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

### removeOne

Immutable remove element from array by element's index

```javascript
import { removeOne } from 'custom-arr-methods';

const i = [1, 2, 3, 4, 5];

const j = removeOne(i, 2);

console.log(i); // [1, 2, 3, 4, 5]
console.log(j); // [1, 2, 4, 5]
```

### removeMultiple

Immutable remove elements from array by element's indexes

```javascript
import { removeMultiple } from 'custom-arr-methods';

const i = [1, 2, 3, 4, 5];

const j = removeMultiple(i, [0, 4]);

console.log(i); // [1, 2, 3, 4, 5]
console.log(j); // [2, 3, 4]
```

### replace

Immutable replace element in array by element's index

```javascript
import { replace } from 'custom-arr-methods';

const i = [1, 2, 3, 4, 5];

const j = replace(i, 2, 42);

console.log(i); // [1, 2, 3, 4, 5]
console.log(j); // [1, 2, 42, 4, 5]
```

### swapOne

Immutable change position for one element in array by source and destination index

```javascript
import { swapOne } from 'custom-arr-methods';

const i = [1, 2, 3, 4, 5];

const j = swapOne(i, 0, 4);

console.log(i); // [1, 2, 3, 4, 5]
console.log(j); // [2, 3, 4, 5, 1]
```

### swapTwo

Immutable swap positions for two elements in array by element's indexes

```javascript
import { swapTwo } from 'custom-arr-methods';

const i = [1, 2, 3, 4, 5];

const j = swapTwo(i, 0, 4);

console.log(i); // [1, 2, 3, 4, 5]
console.log(j); // [5, 2, 3, 4, 1]
```
