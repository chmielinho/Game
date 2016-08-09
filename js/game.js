var computer = {
	name: 'computer',
	score: 0,
	pick: ''
};

var player = {
	name: '',
	score: 0,
	pick: ''
};

var round = 0;
var buttons = document.getElementsByClassName("pick-button");

var displayBlocks = {
	playerName: document.getElementById("playerName"),
	playerScore: document.getElementById("playerScore"),
	computerScore: document.getElementById("computerScore"),
	computerPick: document.getElementById("computerPick"),
	playerPick: document.getElementById("playerPick"),
	gameResult: document.getElementById("gameResult")
};

function newGame() {
	computer.score = 0;
	computer.pick = "";
	player.score = 0;
	player.pick = "";
	round = 0;

	player.name = prompt("Jak się nazywasz?", "Jan Kowalski");
	if (player.name === null || player.name === '') {
		player.name = 'Player';
	}

	displayBlocks.playerName.innerHTML = player.name;
	displayBlocks.playerScore.innerHTML = player.score;
	displayBlocks.computerScore.innerHTML = computer.score;

	for (var i = 0; i < buttons.length; i++) {
		buttons[i].style.visibility = 'visible';
	}
}

function computerPick() {
	switch (Math.floor(Math.random() * 3)) {
	case 0:
		computer.pick = "rock";
		break;
	case 1:
		computer.pick = "paper";
		break;
	case 2:
		computer.pick = "scissors";
		break;
	}
}

function checkResult() {
	var gameResult;
	if (player.pick === computer.pick) {
		gameResult = "tie!";
	} else if (player.pick === "rock") {
		if (computer.pick === "scissors") {
			player.score++;
			displayBlocks.playerScore.innerHTML = player.score;
			gameResult = "Player wins!";
		} else if (computer.pick === "paper") {
			computer.score++;
			displayBlocks.computerScore.innerHTML = computer.score;
			gameResult = "Computer wins!";
		}
	} else if (player.pick === "paper") {
		if (computer.pick === "rock") {
			player.score++;
			displayBlocks.playerScore.innerHTML = player.score;
			gameResult = "Player wins!";
		} else if (computer.pick === "scissors") {
			computer.score++;
			displayBlocks.computerScore.innerHTML = computer.score;
			gameResult = "Computer wins!";
		}
	} else if (player.pick === "scissors") {
		if (computer.pick === "paper") {
			player.score++;
			displayBlocks.playerScore.innerHTML = player.score;
			gameResult = "Player wins!";
		} else if (computer.pick === "rock") {
			computer.score++;
			displayBlocks.computerScore.innerHTML = computer.score;
			gameResult = "Computer wins!";
		}
	}

	displayBlocks.computerPick.innerHTML = computer.pick;
	displayBlocks.playerPick.innerHTML = player.pick;
	displayBlocks.gameResult.innerHTML = gameResult;

	if ((player.score >= 10) || (computer.score >= 10)) {
		if (player.score > computer.score) {
			alert("\nPlayer wins the game!\n");
		} else {
			alert("\nComputer wins the game!\n");
		}

		for (var i = 0; i < buttons.length; i++) {
			buttons[i].style.visibility = 'hidden';
		}
	}
}


function playerPick(pick) {
	player.pick = pick;
	computerPick();
	checkResult();
}
