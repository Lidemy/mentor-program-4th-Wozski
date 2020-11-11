/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
const background = document.querySelector('.background');
const container = document.querySelector('.container');
const clickButton = document.querySelector('.event__button');
const APIURL = 'https://dvwhnbka7d.execute-api.us-east-1.amazonaws.com/default/lottery';
const errorMessage = '系統不穩定，請再試一次';

clickButton.addEventListener('click', (e) => {
  draw((err, data) => {
    if (err) {
      alert(err);
      return;
    }
    container.classList.toggle('hide');
    if (data.prize.toUpperCase() === 'FIRST') {
      const div = document.createElement('div');
      const input = document.createElement('input');
      div.classList.add('event__item');
      div.innerHTML = `「恭喜你中頭獎了！日本東京來回雙人遊！」<br> 
      <input type='submit' value='我要抽獎' class='event__button new' onClick='window.location.href=window.location.href' id='1'>`;
      background.appendChild(div);
      background.classList.add('flyTicket');
    } else if (data.prize.toUpperCase() === 'SECOND') {
      const div = document.createElement('div');
      const input = document.createElement('input');
      div.classList.add('event__item');
      div.innerHTML = `「二獎！90 吋電視一台！」<br> 
      <input type='submit' value='我要抽獎'' class='event__button new' onClick='window.location.href=window.location.href' id='1'>`;
      background.appendChild(div);
      background.classList.add('tv');
    } else if (data.prize.toUpperCase() === 'THIRD') {
      const div = document.createElement('div');
      const input = document.createElement('input');
      div.classList.add('event__item');
      div.innerHTML = `「恭喜你抽中三獎：知名 YouTuber 簽名握手會入場券一張，bang！」<br> 
      <input type='submit' value='我要抽獎' class='event__button new' onClick='window.location.href=window.location.href' id='1'>`;
      background.appendChild(div);
      background.classList.add('youtube');
    } else if (data.prize.toUpperCase() === 'NONE') {
      const div = document.createElement('div');
      const input = document.createElement('input');
      div.classList.add('event__item');
      div.innerHTML = `「銘謝惠顧」<br> 
      <input type='submit' value='我要抽獎' class='event__button new' onClick='window.location.href=window.location.href' id='1'>`;
      background.appendChild(div);
    } else {
      const div = document.createElement('div');
      div.classList.add('event__item');
      div.innerHTML = `「系統不穩定，請重新開始」<br> 
      <input type='submit' value='我要抽獎' class='event__button new' onClick='window.location.href=window.location.href' id='1'>`;
      background.appendChild(div);
    }
  });
});

// 純粹只做 API
function draw(callback) {
  const request = new XMLHttpRequest();
  request.open('GET', APIURL, true);
  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      let data;
      try {
        data = JSON.parse(request.response);
      } catch (err) {
        callback(errorMessage);
        return;
      }
      if (!data.prize) {
        callback(errorMessage);
        return;
      }
      callback(null, data);
    } else {
      callback(errorMessage);
    }
  };
  request.onerror = function () {
    callback(errorMessage);
  };
  request.send();
}
