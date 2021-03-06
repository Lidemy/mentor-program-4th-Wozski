/* eslint-disable consistent-return */
const request = require('request');

const args = process.argv;
const API_ENDPOINT = 'https://restcountries.eu/rest/v2';
const TypeCountry = args[2];

function SearchCountry() {
  if (!TypeCountry) {
    return console.log('請輸入國家英文名稱');
  }
  request(`${API_ENDPOINT}/name/${TypeCountry}`, (err, res, body) => {
    if (err) {
      return console.log('抓取失敗', err);
    }
    const data = JSON.parse(body);
    if (data.status >= 400 && data.status <= 511) {
      return console.log('找不到國家資訊');
    }
    for (let i = 0; i < data.length; i += 1) {
      console.log('============');
      console.log('國家：', data[i].name);
      console.log('首都：', data[i].capital);
      console.log('貨幣：', data[i].currencies[0].code);
      console.log('國碼：', data[i].callingCodes[0]);
    }
  });
}
SearchCountry();
