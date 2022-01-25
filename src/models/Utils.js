/* eslint-disable import/no-mutable-exports */

const BaseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const contentType = { 'content-type': 'application/json' };
let ScoresData = [];
let gameID = '';
let gameName = '';

const setGameIdName = (id, name) => {
  gameID = id;
  gameName = name;
};

const setScoreData = (response) => {
  ScoresData = response;
};

export {
  BaseUrl, contentType, ScoresData, gameID, gameName, setGameIdName, setScoreData,
};
