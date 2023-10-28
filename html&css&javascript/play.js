class Game {
    players;
    maxNumOfPlayers;
    gameID;
    prompt;
    votes;
    responsesIn;

    constructor(players, gameID, prompt) {
        this.players = players;
        this.maxNumOfPlayers = 4;
        this.gameID = gameID;
        this.prompt = prompt;
        this.votes = [];
    }

    createGame() {
        const imageContainerElement = document.querySelector(".img-container");
        const gameInterface = document.createElement("div");
        const spaceElement = document.createElement("br");
        const promptElement = document.createElement("p");
        const gameIDElement = document.createElement("p");
        promptElement.textContent = this.prompt;
        gameIDElement.textContent = "GameID: " + this.gameID;

        imageContainerElement.insertAdjacentElement("afterend", spaceElement);
        gameInterface.appendChild(gameIDElement);
        gameInterface.appendChild(promptElement);
        gameInterface.appendChild(spaceElement);

        for (var i = 0; i < this.players.length; i++) {
            const player = document.createElement("li");
            if (this.players[i] == localStorage.getItem("username")) {
                player.textContent = this.players[i];
                const inputElement = document.createElement("input");
                inputElement.setAttribute("type", "text");
                inputElement.setAttribute("id", "responseInput");
                inputElement.setAttribute("placeholder", "Response to prompt...");

                const submitButtonElement = document.createElement("button");
                submitButtonElement.setAttribute("id", "submissionButton");
                submitButtonElement.textContent = "Submit";

                player.insertAdjacentElement("beforeend", inputElement);
                player.insertAdjacentElement("beforeend", submitButtonElement);
            } else {
                player.textContent = this.players[i];
                player.setAttribute("id", "player" + i);
            }
            gameInterface.appendChild(player);
        }

        imageContainerElement.insertAdjacentElement("afterend", gameInterface);
    }

    submitResponse() {
        const submissionButton = document.querySelector("#submissionButton");
        const inputElement = document.querySelector("#responseInput");
        const messageElement = document.createElement("p");
        messageElement.textContent = "Waiting for votes...";
        messageElement.setAttribute("id", "waitMessage");
        inputElement.insertAdjacentElement("afterend", messageElement);
        
        inputElement.parentNode.removeChild(inputElement);
        submissionButton.parentNode.removeChild(submissionButton);
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
        const playerNameElement = document.querySelector("#playername");
        console.log("input: ", playerNameElement);
        console.log("player name: ", this.getPlayerName());
        playerNameElement.textContent = this.getPlayerName();
    }
}

let currentUsername = localStorage.getItem("username");
console.log("currentUser: ", currentUsername);

if (window.location.href.indexOf("play.html") > -1) {
    if (typeof currentUsername == 'string' && window.location.href.indexOf("play.html") > -1) {
        let currentUser = new Player(currentUsername, "Jumping of cliffs");
        currentUser.displayName();
    }

    const newGameElement = document.querySelector('#newGame');
    newGameElement.addEventListener("click", () => {
        let game = new Game(["Molly", "Joshua", "Johnny",
            localStorage.getItem("username")], 1234, "\"When my dog ran out the door, it made me...\"");

        game.createGame();

        const submitButtonElement = document.querySelector("#submissionButton");
        submitButtonElement.addEventListener("click", () => {
            game.submitResponse();
        });
    });
}
