const co = require('co');
const fetch = require('node-fetch');
// co(function *() {
//   const res = yield fetch('http://api.douban.com/v2/movie/1291843');
//   const movie = yield res.json();
//   const id = movie.id;
//   console.log('id', movie)
// })
// 通过yield来执行一些异步请求

function run (generator) {
  const iterator = generator();
  const it = iterator.next();
  const promise = it.value;

  promise.then(data => {
    const it2 = iterator.next(data);
    const promise2 = it2.value;
    promise2.then((data2) => {
      iterator.next(data2);
    })
  })
}

run(function *() {
  const res = yield fetch('http://api.douban.com/v2/movie/1291843');
  const movie = yield res.json();
  const id = movie.id;
  console.log('id', movie)
})