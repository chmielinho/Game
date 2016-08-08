var computer = {
	name: 'computer'
	, score: 0
	, pick: ''
};
var player = {
	name: ''
	, score: 0
	, pick: ''
};
var round = 0

function newGame() {
	computer.score = 0;
	computer.pick = "";
	player.score = 0;
	player.pick = "";
	round = 0;
	player.name = prompt("Jak się nazywasz?", "Jan Kowalski");
	if (player.name == null || player.name == '') {
		player.name = 'Player';
	}
	document.getElementById("playerName").innerHTML = player.name;
	document.getElementById("playerScore").innerHTML = player.score;
	document.getElementById("computerScore").innerHTML = computer.score;
	var buttons = document.getElementsByClassName("pick-button");
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].style.visibility = 'visible';
	};
}

function playerPick(pick) {
	player.pick = pick;
	computerPick();
	checkResult();
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
		gameResult = "tie!"
	}
	else if (player.pick === "rock") {
		if (computer.pick === "scissors") {
			player.score++;
			document.getElementById("playerScore").innerHTML = player.score;
			gameResult = "Player wins!"
		}
		else if (computer.pick === "paper") {
			computer.score++;
			document.getElementById("computerScore").innerHTML = computer.score;
			gameResult = "Computer wins!"
		}
	}
	else if (player.pick === "paper") {
		if (computer.pick === "rock") {
			player.score++;
			document.getElementById("playerScore").innerHTML = player.score;
			gameResult = "Player wins!"
		}
		else if (computer.pick === "scissors") {
			computer.score++;
			document.getElementById("computerScore").innerHTML = computer.score;
			gameResult = "Computer wins!"
		}
	}
	else if (player.pick === "scissors") {
		if (computer.pick === "paper") {
			player.score++;
			document.getElementById("playerScore").innerHTML = player.score;
			gameResult = "Player wins!"
		}
		else if (computer.pick === "rock") {
			computer.score++;
			document.getElementById("computerScore").innerHTML = computer.score;
			gameResult = "Computer wins!"
		}
	}
	document.getElementById("computerPick").innerHTML = computer.pick;
	document.getElementById("playerPick").innerHTML = player.pick;
	document.getElementById("gameResult").innerHTML = gameResult;
	if ((player.score >= 10) || (computer.score >= 10)) {
		if (player.score > computer.score) {
			alert("\nPlayer wins the game!\n");
		}
		else {
			alert("\nComputer wins the game!\n");
		}
		var buttons = document.getElementsByClassName("pick-button");
		for (var i = 0; i < buttons.length; i++) {
			buttons[i].style.visibility = 'hidden';
		};
	}
}