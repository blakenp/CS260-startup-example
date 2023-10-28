class Game {
    players;
    maxNumOfPlayers;
    gameID;
    prompt;
    votes;

    constructor(players, gameID, prompt) {
        this.players = players;
        this.maxNumOfPlayers = 4;
        this.gameID = gameID;
        this.prompt = prompt;
        this.votes = []
    }

    createGame() {

    }

    vote() {
        
    }
}

class Player {
    username;
    favoriteHobby;

    constructor(username, favoriteHobby) {
        this.username = username;
        this.favoriteHobby = favoriteHobby;
    }

    getPlayerName() {
        return this.username;
    }

    getPlayerHobby() {
        return this.favoriteHobby;
    }

    displayName() {
        const playerNameElement = document.getElementById("playername");
        console.log("input: ", playerNameElement);
        console.log("player name: ", this.getPlayerName());
        playerNameElement.textContent = this.getPlayerName();
    }
}

let currentUsername = localStorage.getItem("username");
console.log("currentUser: ", currentUsername);

if (typeof currentUsername == 'string' && window.location.href.indexOf("play.html") > -1) {
    let currentUser = new Player(currentUsername, "Jumping of cliffs");
    currentUser.displayName();
}
