/* eslint-disable prefer-arrow-callback */
const request = require('request');

request.get(
  {
    url: 'https://lidemy-book-store.herokuapp.com/books?_limit=10',
  },
  function (error, respone, body) {
    if (error) {
      console.log('抓取失敗', error);
      return;
    }
    const data = JSON.parse(body);
    for (let i = 0; i < data.length; i += 1) {
      console.log(`${data[i].id} ${data[i].name}`);
    }
  },
);
