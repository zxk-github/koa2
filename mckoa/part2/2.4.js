const fs = require('fs');
const util = require('util');

const readAsync = util.promisify(fs.readFile);
async function init() {
  let data = await readAsync('./package.json');
  console.log(data)
}
init();
