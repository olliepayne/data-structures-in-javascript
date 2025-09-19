const names = ["Alice", "Bob", "Charlie", "Diana", "Evelyn"]

// With recursion
function binarySearch(arr, target, startIndex, endIndex, i) {
  const middleIndex = Math.floor((startIndex + endIndex) / 2)

  if (arr[middleIndex] > target) {
    return binarySearch(arr, target, startIndex, middleIndex - 1, i + 1)
  }

  if (arr[middleIndex] < target) {
    return binarySearch(arr, target, middleIndex + 1, endIndex, i + 1)
  }

  if (target === arr[middleIndex]) {
    return `Found at index ${middleIndex}, took ${i} iterations`
  }
}
console.log(binarySearch(names, "Evelyn", 0, names.length - 1, 0))
