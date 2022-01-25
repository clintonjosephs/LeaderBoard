import StorageManager from "../models/StorageManager.js";
import { setupFormModal } from "./DialogHandler";

const startLeaderBoard = () => {
  const gameId = StorageManager.getData();
   if (gameId.length === 0) {
    return setupFormModal();
   } else {
     console.log('fetch recent scores');
   }
};

export { startLeaderBoard };
// import Loader from "./images/loader.gif";

// const loadingContent = document.querySelector('.loaderImg');

// const loader = document.querySelector('.loader');

// //update loading image and set loading spinner in motion
// // const myLoader = new Image();
// // myLoader.src = Loader;
// // myLoader.style.width = "150px";
// // myLoader.style.height = "150px";
// // loadingContent.appendChild(myLoader);
// // loader.style.visibility = 'visible';
