import Medal from "../images/medal.jpg";
import { ScoresData } from "../models/Utils.js";

const populateScoresList = () => {
  const dataLength = ScoresData.length;
  let listScoresItems = "";

  if (dataLength > 0) {
    ScoresData.forEach((data) => {
      listScoresItems += buildListView(data.name, data.score, true);
    });
    return listScoresItems;
  } else {
    return buildListView();
  }
};

const recentScores = () => {
  return (
    `<div class="col-md-6 col-sm-12">
            <div class="showScoresContainer">
                <div class="scoresTop">       
                    <h3>Recent Scores</h3>           
                    <button type="button" class="btn btn-primary">Refresh <i class="fas fa-sync-alt"></i>
                        <span class="spinner-border spinner-border-sm hide" id="recentScoreSpinner" role="status" aria-hidden="true"></span>
                    </button>
            </div>
            <ul class="scoresView">` +
    populateScoresList() +
    `</ul>
            </div>
        </div>`
  );
};

const buildListView = (data_name = "", data_score = "No Scores Available") => {
  return `<li>
        <span>${data_name}: ${data_score}</span>
        <img src="${Medal}" class="medal" alt="medal icon"/>
    </li>`;
};

export default recentScores;
