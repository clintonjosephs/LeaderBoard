import { BaseUrl, contentType } from './Utils.js';

const createNewGame = async (gameName) => {
    const response = await fetch(BaseUrl, {
        method: 'POST',
        headers: contentType,
        body: JSON.stringify({"name": gameName})
    });
    return response.json();
};

 const getAllScores = async (gameId) => {
    const response = await fetch(BaseUrl+`${gameId}`+'/scores/', {
        method: 'GET',
        headers: contentType
    });
    return response.json();
};

const uploadScores = async (gameId, user, score) => {
    const response = await fetch(BaseUrl+`${gameId}`+'/scores/', {
        method: 'POST',
        headers: contentType,
        body: JSON.stringify({"user": user, "score": score})
    });
    return response.json();
};



export { createNewGame, getAllScores, uploadScores }