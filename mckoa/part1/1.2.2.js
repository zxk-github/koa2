const fs = require("fs");
const util = require("util");
const pm = util.promisify(fs.readFile)('./1.2.js');
pm.then((data) =>{
  console.log(data.toString())
})
.catch((err) => {
  console.log(err)
})