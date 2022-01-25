import { BaseUrl, contentType } from './Utils.js';

async const createNewGame = (gameName) => {
    const response = await fetch(BaseUrl, {
        method: 'POST',
        headers: contentType,
        body: JSON.stringify({"name": gameName})
    });
    return response.json();
};

async const getAllScores = (gameId) => {
    const response = await fetch(BaseUrl+`${gameId}`+'/scores/', {
        method: 'GET',
        headers: contentType
    });
    return response.json();
};

async const uploadScores = (gameId, user, score) => {
    const response = await fetch(BaseUrl+`${gameId}`+'/scores/', {
        method: 'GET',
        headers: contentType,
        body: JSON.stringify({"user": user, "score": score})
    });
    return response.json();
};



export { createNewGame, getAllScores, uploadScores}