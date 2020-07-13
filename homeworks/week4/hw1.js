/* eslint-disable prefer-arrow-callback */
const request = require('request');

request.get(
  {
    url: 'https://lidemy-book-store.herokuapp.com/books',
  },
  function (error, respone, body) {
    if (error) {
      console.log('抓取失敗', error);
      return;
    }
    const data = JSON.parse(body);
    for (let i = 0; i < 10; i += 1) {
      console.log(`${data[i].id} ${data[i].name}`);
    }
  },
);
