function makeGenerator(arr){
  let arrIndex = 0;
  return {
    next() {
      if(arrIndex < arr.length) {
        return {
          value: arr[arrIndex++],
          done: false
        }
      } else {
        return {
          value: undefined,
          done: true
        }
      }
    }
  }
}

const it = makeGenerator(['a', 'b', 'c']);
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
