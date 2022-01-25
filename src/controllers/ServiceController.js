import {
  createNewGame,
  getAllScores,
  uploadScores,
} from '../models/Services.js';
import { spinnerToogle } from './SpinnerHandler.js';
import StorageManager from '../models/StorageManager.js';
import { setGameTitle } from './Starter.js';
import { setScoreData } from '../models/Utils.js';
import { populateScoresList } from '../views/RecentScores.js';
import { toogleNotifier } from './DialogHandler.js';

const createGame = (setupForm, modal) => {
  // get value of the game title
  const gameName = setupForm[0].value;

  // show spinner
  spinnerToogle('setupSpinner', true);

  // call create game async function
  createNewGame(gameName)
    .then((data) => {
      // pass id of game to variable
      const gameID = data.result.substr(14, 20);

      // store game name and id to localstorage
      StorageManager.storeData(gameID, gameName);

      // hide spinner, close modal, reset form
      spinnerToogle('setupSpinner', false);
      modal.hide();
      setupForm.reset();

      // update gamename in dom
      setGameTitle(gameName);
    })
    .catch((error) => {
      toogleNotifier(error, 'failure');
    });
};

const sortArray = (data) => data.sort((a, b) => b.score - a.score);

const getScores = () => getAllScores()
  .then((data) => data)
  .catch((error) => {
    toogleNotifier(error, 'failure');
  });

const populateFirstTime = async (loadingOverlay) => {
  const scores = await getScores();
  const result = sortArray(scores.result);
  setScoreData(result);
  populateScoresList();
  loadingOverlay.style.visibility = 'hidden';
};

const refreshList = async () => {
  spinnerToogle('recentScoreSpinner', true);
  const scores = await getScores();
  const result = sortArray(scores.result);
  setScoreData(result);
  populateScoresList();
  spinnerToogle('recentScoreSpinner', false);
  toogleNotifier('Scores retrieved successfully', 'success');
};

const uploadGameScores = (addForm) => {
  // get values from addform text controls
  let user = addForm[0].value;

  // make the first character capital for better readablility
  user = user.charAt(0).toUpperCase() + user.slice(1);
  const scores = addForm[1].value;

  // show spinner
  spinnerToogle('addScoreSpinner', true);

  // make post call to API
  uploadScores(user, scores)
    .then((data) => {
      toogleNotifier(data.result, 'success');
      spinnerToogle('addScoreSpinner', false);
      addForm[0].focus();
      addForm.reset();
    })
    .catch((error) => {
      toogleNotifier(error, 'failure');
    });
};

export {
  createGame, populateFirstTime, uploadGameScores, refreshList,
};
