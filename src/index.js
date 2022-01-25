import "./style.css";
import AddScores from "./views/AddScore.js";
import Footer from "./views/Footer.js";
import { modalMessages, modalSetup } from "./views/Modals.js";
import RecentScores from "./views/RecentScores.js";
import { startLeaderBoard } from "./controllers/Starter.js";
import { createGame } from "./controllers/ServiceController.js"

const leaderContent = document.querySelector(".leaderboard-content");

// update leaderboard content
leaderContent.innerHTML = RecentScores() + AddScores();

// update body
document.body.innerHTML += modalMessages() + modalSetup() + Footer();


window.addEventListener('DOMContentLoaded',  () => {
  //overlay object is either modal for new users or loading spinner for exisiting users
   const overlayObject = startLeaderBoard();
   const setupForm = document.querySelector('#setupLeaderBoard');
   setupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    createGame(setupForm, overlayObject);
   });
});
