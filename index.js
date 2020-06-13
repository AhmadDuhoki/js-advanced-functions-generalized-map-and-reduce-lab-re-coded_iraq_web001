function map(sourceArr, callback){
  let newArr = [];
  for (let i = 0; i < sourceArr.length; i++) {
    newArr.push(callback(arr[i]));
  }
  return newArr;
}

function reduce(sourceArr, startingValue, ){
  
}