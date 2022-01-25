import StorageManager from '../models/StorageManager.js';
import { gameName, setGameIdName } from '../models/Utils.js';
import { setupFormModal } from './DialogHandler.js';
import { retrieveRecentScoresLoader } from './SpinnerHandler.js';

const setGameTitle = (gameName) => {
  const gameNameSpan = document.querySelector('.gameName');
  gameNameSpan.innerHTML = gameName;
  gameNameSpan.style.fontStyle = 'italic';
};

const startLeaderBoard = () => {
  const gameData = StorageManager.getData();
  if (gameData.length === 0) {
    return setupFormModal();
  }
  setGameIdName(gameData.gameID, gameData.gameName);
  setGameTitle(gameName);
  return retrieveRecentScoresLoader();
};

export { startLeaderBoard, setGameTitle };
