var fs = require('fs');

function promiseRead(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if(err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

let pr = promiseRead('./1.2.1js');
pr.then((data) => {
  console.log(data.toString())
}).catch( (err) => {
  console.log(err)
})