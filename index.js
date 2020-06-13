function map(sourceArr, callback){
  let newArr = [];
  for (let i = 0; i < sourceArr.length; i++) {
    newArr.push(callback(arr[i]));
  }
  return newArr;
}

function reduce(sourceArr, callback, startingValue){
  let memo = startingPoint ? startingPoint : arr[0]
  for (let i = startingPoint ? 0 : 1; i < arr.length; i++) {
    newValue = callbackFn(arr[i], newValue)
  }
  return newValue
}