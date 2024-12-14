function binarySearch(arr, target) {
    let left = 0;
    let right = arr. length - 1;
   
    while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
    return mid;
    } else if (arr[mid] < target) {
    left = mid + 1;
    } else {
    right = mid - 1;
    }
    } //while
    return -1; // If the element is not found
   }// function binarySearch
   const numbers = [1, 2, 3, 4, 5, 6, 7];
   console.log(binarySearch(numbers, 5)); // 4
   