function *makeGenerator(arr){
  for(let i = 0; i < arr.length; i++){
    yield arr[i];
  }
}

const gt = makeGenerator(['1', '2', '3'])

console.log(gt.next())
console.log(gt.next())
console.log(gt.next())
console.log(gt.next())
