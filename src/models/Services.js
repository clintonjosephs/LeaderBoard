import StorageManager from './StorageManager.js';
import { BaseUrl, contentType } from './Utils.js';

const createNewGame = async () => {
  const { gameName } = StorageManager.getData();
  const response = await fetch(BaseUrl, {
    method: 'POST',
    headers: contentType,
    body: JSON.stringify({ name: gameName }),
  });
  return response.json();
};

const getAllScores = async () => {
  const { gameID } = StorageManager.getData();
  const response = await fetch(`${BaseUrl}${gameID}/scores/`, {
    method: 'GET',
    headers: contentType,
  });
  return response.json();
};

const uploadScores = async (user, score) => {
  const { gameID } = StorageManager.getData();
  const response = await fetch(`${BaseUrl}${gameID}/scores/`, {
    method: 'POST',
    headers: contentType,
    body: JSON.stringify({ user, score }),
  });
  return response.json();
};

export { createNewGame, getAllScores, uploadScores };