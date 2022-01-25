import './style.css';
import AddScores from './views/AddScore.js';
import Footer from './views/Footer.js';
import { modalMessages, modalSetup } from './views/Modals.js';
import { recentScores } from './views/RecentScores.js';
import { startLeaderBoard } from './controllers/Starter.js';
import {
  createGame, populateFirstTime, uploadGameScores, refreshList,
} from './controllers/ServiceController.js';

const leaderContent = document.querySelector('.leaderboard-content');

// update leaderboard content
leaderContent.innerHTML = recentScores() + AddScores();

// update body
document.body.innerHTML += modalMessages() + modalSetup() + Footer();

window.addEventListener('DOMContentLoaded', () => {
  // event listener for the add score form
  const addForm = document.querySelector('#addScoreForm');
  addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    uploadGameScores(addForm);
  });

  // overlay object is either modal for new users or loading spinner for exisiting users
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

  // event listner for the refresh list button
  const refreshBtn = document.querySelector('.refreshBtn');
  refreshBtn.addEventListener('click', refreshList);
});
