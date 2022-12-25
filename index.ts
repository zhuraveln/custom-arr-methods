//----------------------------------------------------------------
// INSERT

/** Immutable insert element into array by destination index
 * @param {array<T>} array - source array
 * @param {number} destinationIndex - destination index in array
 * @param {element<T>} element - new element to insert
 * @return {array<T>} new array
 */
export function insert<Type>(array: Type[], destinationIndex: number, element: Type): Type[] {
  return [...array.slice(0, destinationIndex), element, ...array.slice(destinationIndex)]
}

//----------------------------------------------------------------
// REMOVE ONE

/** Immutable remove element from array by element's index
 * @param {array<T>} array - source array
 * @param {number} index - element's index to remove
 * @return {array<T>} new array
 */
export function removeOne<Type>(array: Type[], index: number): Type[] {
  return [...array.slice(0, index), ...array.slice(index + 1)]
}

//----------------------------------------------------------------
// REMOVE MULTIPLE

/** Immutable remove elements from array by element's indexes
 * @param {array<T>} array - source array
 * @param {array} indexes - array of element's indexes to remove
 * @return {array<T>} new array
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
 * @param {array<T>} array - source array
 * @param {number} index - element's index to replace
 * @param {element<T>} element - new element
 * @return {array<T>} new array
 */
export function replace<Type>(array: Type[], index: number, element: Type): Type[] {
  return [...insert(removeOne(array, index), index, element)]
}

//----------------------------------------------------------------
// SWAP ONE

/** Immutable change position for one element in array by source and destination index
 * @param {array<T>} array - source array
 * @param {number} sourceIndex - source element's index in array
 * @param {number} destinationIndex - destination element's index in array
 * @return {array<T>} new array
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
 * @param {array<T>} array - source array
 * @param {number} firstElementIndex - first element's index
 * @param {number} secondElementIndex - second element's index
 * @return {array<T>} new array
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
