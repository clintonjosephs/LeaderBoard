import {
  createNewGame,
  getAllScores,
  uploadScores,
} from "../models/Services.js";
import { spinnerToogle } from "./SpinnerHandler.js";
import StorageManager from "../models/StorageManager.js";
import { setGameTitle } from "./Starter.js";
import { setScoreData } from "../models/Utils.js";
import { populateScoresList } from "../views/RecentScores.js";
import { toogleNotifier } from "./DialogHandler.js";

const createGame = (setupForm, modal) => {
  // get value of the game title
  const gameName = setupForm[0].value;

  // show spinner
  spinnerToogle("setupSpinner", true);

  //call create game async function
  createNewGame(gameName).then((data) => {
    // pass id of game to variable
    const gameID = data.result.substr(14, 20);

    //store game name and id to localstorage
    StorageManager.storeData(gameID, gameName);

    //hide spinner, close modal, reset form
    spinnerToogle("setupSpinner", false);
    modal.hide();
    setupForm.reset();

    //update gamename in dom
    setGameTitle(gameName);
  });
};

const getScores = (loadingOverlay) => {
  getAllScores().then((data) => {
    const result = sortArray(data.result);
    setScoreData(result);
    populateScoresList();
    loadingOverlay.style.visibility = "hidden";
  });
};

const uploadGameScores = (addForm) => {
    let user = addForm[0].value;
    user = user.charAt(0).toUpperCase() + user.slice(1);
    const scores = addForm[1].value;
     // show spinner
    spinnerToogle("addScoreSpinner", true);
    
    uploadScores(user, scores).then((data) => {
       toogleNotifier(data.result, "success");
       spinnerToogle("addScoreSpinner", false);    
       addForm.reset(); 
    });
};

const sortArray = (data) => {
    return data.sort((a, b) => b.score - a.score);
}

export { createGame, getScores, uploadGameScores };
