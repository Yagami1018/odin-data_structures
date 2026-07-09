export function bubbleSort(arr = []) {
  const n = arr.length;
  if (n<=1) return arr
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
}

export function selectionSort(arr = []) {
  const n = arr.length;
  if (n<=1) return arr
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}

export function insertionSort(arr = [], n = arr.length) {
  if (n<=1) return arr
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}

export function quickSort(arr=[],low=0,high=arr.length-1){
  if (arr.length <=1) return arr

  if(low<high){
    const pi = partition(arr,low,high)
    quickSort(arr,low,pi-1)
    quickSort(arr,pi+1,high)
  }
  return arr
}

function partition(arr=[], low = 0, high = arr.length - 1) {
  let pivot = arr[high]
  let i = low -1
  for(let j = low; j<high;j++) {
    if(arr[j]<=pivot) {
      i++
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }
  [arr[i+1], arr[high]] = [arr[high], arr[i+1]]
  return i+1
}