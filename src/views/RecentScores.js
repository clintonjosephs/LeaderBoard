import Medal from '../images/medal.jpg';

const recentScores = () => `<div class="col-md-6 col-sm-12">
            <div class="showScoresContainer">
                <div class="scoresTop">       
                    <h3>Recent Scores</h3>           
                    <button type="button" class="btn btn-primary">Refresh <i class="fas fa-sync-alt"></i></button>
            </div>
            <ul class="scoresView">
                    <li>
                        <span>Microverse: 23</span>
                        <img src="${Medal}" width="30px" height="30px" alt="medal icon"/>
                    </li>
                    <li>
                        <span>Clinton: 23</span>
                        <img src="${Medal}" width="30px" height="30px" alt="medal icon"/>
                    </li>
                    <li>
                        <span>
                            Patrick: 23
                        </span>
                        <img src="${Medal}" width="30px" height="30px" alt="medal icon"/>
                    </li>
            </ul>
            </div>
        </div>`;

export default recentScores;