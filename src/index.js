import _ from 'lodash';
import './style.css';
import AddScores from './views/AddScore.js';
import Footer from './views/Footer.js';
import Modal from './views/Modal.js';
import RecentScores from './views/RecentScores.js';
import Loader from "./images/loader.gif";

const leaderContent = document.querySelector('.leaderboard-content');
const loadingContent = document.querySelector('.loaderImg');
const loader = document.querySelector('.loader');

//update loading image and set loading spinner in motion
// const myLoader = new Image();
// myLoader.src = Loader;
// myLoader.style.width = "150px";
// myLoader.style.height = "150px";
// loadingContent.appendChild(myLoader);
// loader.style.visibility = 'visible';
  
// update leaderboard content
leaderContent.innerHTML = _ + RecentScores() + AddScores();

// update body
document.body.innerHTML += Modal() + Footer();
