import {
  createNewGame,
  getAllScores,
  uploadScores,
} from "../models/Services.js";
import { spinnerToogle } from "./SpinnerHandler.js";
import StorageManager from "../models/StorageManager.js";
import { setGameTitle } from "./Starter.js";

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

export { createGame };
