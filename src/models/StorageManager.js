export default class StorageManager {
    static storeData = (gameID, gameName) => {
      const gameSetup = {
        gameID,
        gameName,
      };
      localStorage.setItem('gameSetup', JSON.stringify(gameSetup));
    }

    static getData = () => (localStorage.getItem('gameSetup') ? JSON.parse(localStorage.getItem('gameSetup')) : []);
}
