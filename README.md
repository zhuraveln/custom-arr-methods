# custom-arr-methods

Custom immutable array's methods for different scenarios

All methods returned a new array

## Installation

```bash
npm install custom-arr-methods
```

## Usage

**All methods have tooltips when you hover over them**
![tooltips-example](/src/assets/Demo-1.png)

### insert

Immutable insert element into array **by destination index**

```javascript
import { insert } from 'custom-arr-methods'

const i = [1, 2, 3, 4, 5]

const j = insert(i, 2, 42) // (array, destinationIndex, element)

console.log(i) // [1, 2, 3, 4, 5]
console.log(j) // [1, 2, 42, 3, 4, 5]
```

### removeOne

Immutable remove element from array **by element's index**

```javascript
import { removeOne } from 'custom-arr-methods'

const i = [1, 2, 3, 4, 5]

const j = removeOne(i, 2) // (array, index)

console.log(i) // [1, 2, 3, 4, 5]
console.log(j) // [1, 2, 4, 5]
```

### removeMultiple

Immutable remove elements from array **by element's indexes**

```javascript
import { removeMultiple } from 'custom-arr-methods'

const i = [1, 2, 3, 4, 5]

const j = removeMultiple(i, [0, 4]) // (array, indexes)

console.log(i) // [1, 2, 3, 4, 5]
console.log(j) // [2, 3, 4]
```

### replace

Immutable replace element in array **by element's index**

```javascript
import { replace } from 'custom-arr-methods'

const i = [1, 2, 3, 4, 5]

const j = replace(i, 2, 42) // (array, index, element)

console.log(i) // [1, 2, 3, 4, 5]
console.log(j) // [1, 2, 42, 4, 5]
```

### swapOne

Immutable change position for one element in array **by source and destination index**

```javascript
import { swapOne } from 'custom-arr-methods'

const i = [1, 2, 3, 4, 5]

const j = swapOne(i, 0, 4) // (array, sourceIndex, destinationIndex)

console.log(i) // [1, 2, 3, 4, 5]
console.log(j) // [2, 3, 4, 5, 1]
```

### swapTwo

Immutable swap positions for two elements in array **by element's indexes**

```javascript
import { swapTwo } from 'custom-arr-methods'

const i = [1, 2, 3, 4, 5]

const j = swapTwo(i, 0, 4) // (array, firstElementIndex, secondElementIndex)

console.log(i) // [1, 2, 3, 4, 5]
console.log(j) // [5, 2, 3, 4, 1]
```
