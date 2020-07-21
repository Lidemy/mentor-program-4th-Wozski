/* eslint-disable consistent-return */
const request = require('request');

const API_ENDPOINT = {
  url: 'https://api.twitch.tv/kraken/games/top',
  headers: {
    'Client-ID': 'wb6ouv69d2g65j45gudmezzey1b3lm',
    Accept: 'application/vnd.twitchtv.v5+json',
  },
};

function SearchTwitch() {
  request(API_ENDPOINT, (err, res, body) => {
    if (err) {
      return console.log(err);
    }
    const data = JSON.parse(body);
    for (let i = 0; i < data.top.length; i += 1) {
      console.log('觀看人數:', data.top[i].viewers, '遊戲名稱:', data.top[i].game.name);
    }
  });
}
SearchTwitch();
