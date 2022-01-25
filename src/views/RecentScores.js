import Medal from '../images/medal.jpg';
import { ScoresData } from '../models/Utils.js';

const recentScores = () => `<div class="col-md-6 col-sm-12">
            <div class="showScoresContainer">
                <div class="scoresTop">       
                    <h3>Recent Scores</h3>           
                    <button type="button" class="btn btn-primary refreshBtn">Refresh <i class="fas fa-sync-alt sync"></i>
                        <span class="spinner-border spinner-border-sm hide" id="recentScoreSpinner" role="status" aria-hidden="true"></span>
                    </button>
            </div>
            <ul class="scoresView">
              <li>
                  <span>: No Scores Available </span>
                  <img src="${Medal}" class="medal" alt="medal icon"/>
              </li>
            </ul>
            </div>
        </div>`;

const buildListView = (user = '', score = 'No Scores Available') => `<li>
        <span>${user}: ${score}</span>
        <img src="${Medal}" class="medal" alt="medal icon"/>
    </li>`;

const populateScoresList = () => {
  const dataLength = ScoresData.length;
  const scoresView = document.querySelector('.scoresView');

  let listScoresItems = '';

  if (dataLength > 0) {
    ScoresData.forEach((data) => {
      listScoresItems += buildListView(data.user, data.score);
    });
    scoresView.innerHTML = listScoresItems;
  } else {
    scoresView.innerHTML = buildListView();
  }
};

export { recentScores, populateScoresList };
