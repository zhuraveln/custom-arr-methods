//----------------------------------------------------------------
// INSERT

/** Immutable inserts element into array by destination index
 * @return new array
 */
export function insert<Type>(array: Type[], destinationIndex: number, element: Type): Type[] {
  return [...array.slice(0, destinationIndex), element, ...array.slice(destinationIndex)]
}

//----------------------------------------------------------------
// REMOVE ONE

/** Immutable remove element from array by element's index
 * @return new array
 */
export function removeOne<Type>(array: Type[], index: number): Type[] {
  return [...array.slice(0, index), ...array.slice(index + 1)]
}

//----------------------------------------------------------------
// REMOVE MULTIPLE

/** Immutable remove elements from array by element's indexes
 * @return new array
 */
export function removeMultiple<Type>(array: Type[], indexes: number[]): Type[] {
  return [
    ...array.filter((_, index) => {
      for (let i = 0; i < indexes.length; i++) {
        if (index === indexes[i]) {
          return false
        }
      }
      return true
    }),
  ]
}

//----------------------------------------------------------------
// REPLACE

/** Immutable replace element in array by element's index
 * @return new array
 */
export function replace<Type>(array: Type[], index: number, element: Type): Type[] {
  return [...insert(removeOne(array, index), index, element)]
}

//----------------------------------------------------------------
// SWAP ONE

/** Immutable change position for one element in array by source and destination index
 * @return new array
 */
export function swapOne<Type>(
  array: Type[],
  sourceIndex: number,
  destinationIndex: number,
): Type[] {
  return [...insert(removeOne(array, sourceIndex), destinationIndex, array[sourceIndex])]
}

//----------------------------------------------------------------
// SWAP TWO

/** Immutable swap positions for two elements in array by element's indexes
 * @return new array
 */
export function swapTwo<Type>(
  array: Type[],
  firstElementIndex: number,
  secondElementIndex: number,
): Type[] {
  return [
    ...insert(
      insert(
        removeMultiple(array, [firstElementIndex, secondElementIndex]),
        firstElementIndex,
        array[secondElementIndex],
      ),
      secondElementIndex,
      array[firstElementIndex],
    ),
  ]
}

//----------------------------------------------------------------
