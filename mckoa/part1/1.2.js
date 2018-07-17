var fs  = require('fs');

fs.readFile('./1.2.js', (err, data) => {
  if(err) {
    return console.log(err)
  }
  console.log(data.toString())
})