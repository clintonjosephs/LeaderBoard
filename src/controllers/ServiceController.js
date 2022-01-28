import {
  createNewGame,
  getAllScores,
  uploadScores,
} from '../models/Services.js';
import { spinnerToogle } from './SpinnerHandler.js';
import StorageManager from '../models/StorageManager.js';
import { setGameTitle } from './Starter.js';
import { populateScoresList } from '../views/RecentScores.js';
import { toogleNotifier } from './DialogHandler.js';

const createGame = (setupForm, modal) => {
  const gameName = setupForm[0].value;
  if (gameName.trim().length >= 2) {
    spinnerToogle('setupSpinner', true);
    createNewGame(gameName)
      .then((data) => {
        const gameID = data.result.substr(14, 20);
        StorageManager.storeData(gameID, gameName);
        spinnerToogle('setupSpinner', false);
        modal.hide();
        setupForm.reset();
        setGameTitle(gameName);
      })
      .catch((error) => {
        toogleNotifier(error, 'failure');
      });
  } else {
    const createGameMsg = document.querySelector(".createGameMsg");
    createGameMsg.classList.remove("hide");
    createGameMsg.classList.add("add");
    setupForm.reset();
    setTimeout(() => {
      createGameMsg.classList.remove("add");
      createGameMsg.classList.add("hide");
    }, 3000);
  }
  
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
  populateScoresList(result);
  loadingOverlay.style.visibility = 'hidden';
};

const refreshList = async (onAdd = false) => {
  spinnerToogle('recentScoreSpinner', true);
  const scores = await getScores();
  const result = sortArray(scores.result);
  populateScoresList(result);
  spinnerToogle('recentScoreSpinner', false);
  const msg = result.length > 0  ? "Scores retrieved successfully" : "No scores added to leaderboard yet!";
  const style = result.length > 0 ? 'success'  : "failure";
  if (!onAdd) {
    toogleNotifier(msg, style);
  }
};

const uploadGameScores = (addForm) => {
  let user = addForm[0].value;
  const scores = addForm[1].value;

  const valid = validateInputs(user, scores);
  if (valid[0]) {
    user = user.charAt(0).toUpperCase() + user.slice(1);
    spinnerToogle('addScoreSpinner', true);
    uploadScores(user, scores)
      .then((data) => {
        toogleNotifier(data.result, 'success');
        spinnerToogle('addScoreSpinner', false);
        addForm.reset();
        addForm[0].focus();
        refreshList(true);
      })
      .catch((error) => {
        toogleNotifier(error, 'failure');
      });
  } else {
    toogleNotifier(valid[1], 'failure');
  }
  
};

const validateInputs = (user, scores) => {
  if (user.trim().length === 0 || user.trim().length > 15 || user.trim().length < 3) {
    return [false, "Username should have between 3 - 15 characters"];
  } else if (scores.length > 4) {
    return [false, "Scores should not be greater than 9999"];
  }
  return [true, "input valid"];
}

export {
  createGame, populateFirstTime, uploadGameScores, refreshList,
};
