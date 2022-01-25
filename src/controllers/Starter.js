import StorageManager from "../models/StorageManager.js";
import { gameName, setGameIdName } from "../models/Utils.js";
import { setupFormModal } from "./DialogHandler";
import { retrieveRecentScoresLoader } from "./SpinnerHandler.js";


const startLeaderBoard = () => {
  const gameData = StorageManager.getData();
   if (gameData.length === 0) {
    return setupFormModal();
   } else {
     setGameIdName(gameData.gameID, gameData.gameName);
     setGameTitle(gameName);
     return retrieveRecentScoresLoader();
   }
};

const setGameTitle = (gameName) => {
  const gameNameSpan = document.querySelector(".gameName");
  gameNameSpan.innerHTML = gameName;
};

export { startLeaderBoard, setGameTitle };
