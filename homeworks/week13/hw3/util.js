/* eslint-disable consistent-return */
/* eslint-disable quote-props */
/* eslint-disable prefer-template */
/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-vars */

const API_URL = 'https://api.twitch.tv/kraken';
const CLIENT_ID = 'wb6ouv69d2g65j45gudmezzey1b3lm';
const STREAM_TEMPLATE = `<div class="stream">
    <img src="$preview" />
    <a href="$url" target="_blank" />
    <div class="stream__data">
        <div class="stream__avatar">
            <img src="$logo">
        </div>
        <div class="stream__intro">
            <div class="stream__title">$status</div>
            <div class="stream__channel">
                $name
            </div>
        </div>
    </div>
  </div>`;
function getGamesFetch(callback) {
  fetch(API_URL + '/games/top?limit=5', {
    method: 'GET',
    body: JSON.stringify(),
    headers: new Headers({
      'Client-ID': CLIENT_ID,
      'Accept': 'application/vnd.twitchtv.v5+json',
    }),
  })
    .then((response) => {
      if (response.status >= 200 && response.status < 400) {
        return response.json()
          .then((json) => {
            const data = json.top;
            callback(data);
          });
      }
    });
}
function getStreamsFetch(gameName, callback) {
  fetch(API_URL + '/streams?game=' + encodeURIComponent(gameName), {
    method: 'GET',
    body: JSON.stringify(),
    headers: new Headers({
      'Client-ID': CLIENT_ID,
      'Accept': 'application/vnd.twitchtv.v5+json',
    }),
  })
    .then((response) => {
      if (response.status >= 200 && response.status < 400) {
        return response.json()
          .then((json) => {
            const data = json.streams;
            callback(data);
          });
      }
    });
}
function appendStream(stream) {
  let element = document.createElement('div');
  document.querySelector('.streams').appendChild(element);
  element.outerHTML = STREAM_TEMPLATE
    .replace('$preview', stream.preview.large)
    .replace('$url', stream.channel.url)
    .replace('$logo', stream.channel.logo)
    .replace('$status', stream.channel.status)
    .replace('name', stream.channel.name);
}
function changeGame(gameName) {
  document.querySelector('h1').innerText = gameName;
  document.querySelector('.streams').innerHTML = '';
  getStreamsFetch(gameName, (streams) => {
    for (let stream of streams) {
      appendStream(stream);
    }
  });
}
/*
XMLHttpRequest() 方式
function getGames(callback) {
    request.open('GET', API_URL + '/games/top?limit=5', true);
    request.setRequestHeader('Client-ID', CLIENT_ID)
    request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json')
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        const games = JSON.parse(this.response).top
        callback(games);
      }
    }
    request.send();
}
function getStreams(gameName, callback) {
    const request = new XMLHttpRequest();
    request.open('GET', API_URL + '/streams?game=' + encodeURIComponent(gameName), true);
    request.setRequestHeader('Client-ID', CLIENT_ID)
    request.setRequestHeader('Accept', 'application/vnd.twitchtv.v5+json')
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        const data = JSON.parse(request.response).streams
        callback(data);
      }
    }
    request.send()
}
*/
