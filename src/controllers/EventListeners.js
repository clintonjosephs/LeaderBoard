import AddScores from '../views/AddScore.js';
import Footer from '../views/Footer.js';
import { modalMessages, modalSetup } from '../views/Modals.js';
import { recentScores } from '../views/RecentScores.js';
import { startLeaderBoard } from './Starter.js';
import {
  createGame,
  populateFirstTime,
  uploadGameScores,
  refreshList,
} from './ServiceController.js';

const setUpEnterListerners = () => {
  const leaderContent = document.querySelector('.leaderboard-content');
  leaderContent.innerHTML = recentScores() + AddScores();
  document.body.innerHTML += modalMessages() + modalSetup() + Footer();

  window.addEventListener('DOMContentLoaded', () => {
    const addForm = document.querySelector('#addScoreForm');
    addForm.addEventListener('submit', (e) => {
      e.preventDefault();
      uploadGameScores(addForm);
    });

    const overlayObject = startLeaderBoard();
    if (overlayObject.className === undefined) {
      const setupForm = document.querySelector('#setupLeaderBoard');
      setupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        createGame(setupForm, overlayObject);
      });
    } else {
      populateFirstTime(overlayObject);
    }

    const refreshBtn = document.querySelector('.refreshBtn');
    refreshBtn.addEventListener('click', refreshList);
  });
};

export default setUpEnterListerners;
