"use strict";
let turn = 0;
const currentscore = document.getElementById("currentscorebutton");
const player1score = document.getElementById("scorebutton2");
const player2score = document.getElementById("scorebutton4");
const playerTotal1 = document.getElementById("scorebutton1");
const playerTotal2 = document.getElementById("scorebutton3");
let turnScore1 = 0;
let turnScore2 = 0;
let totalScore1 = 0;
let totalScore2 = 0;
let score1counter = 0;


function startGame() {
    turn = 1;
    const text1 = document.getElementById("textspace1");
    text1.innerHTML = "<br/>" + "Current turn";
    const text2 = document.getElementById("textspace2");
    text2.innerHTML = "<br/>" + " ";
    return turn;
}
function rollDice1() {
    let score1 = 0;
    if (turn === 1) {
        const text1 = document.getElementById("textspace1");
        text1.innerHTML = "<br/>" + "Current turn";
        const text2 = document.getElementById("textspace2");
        text2.innerHTML = "<br/>" + " ";
        if (turnScore1 < 16) {
            const dice1 = document.getElementById("dice1");
            let number1 = randomNumber();
            dice1.innerHTML = "<br/>" + number1;
            const dice2 = document.getElementById("dice3");
            let number2 = randomNumber();
            dice2.innerHTML = "<br/>" + number2;
            score1 = score1 + number1 + number2;
            currentscore.innerHTML = " " + score1;
            turnScore1 += score1;
            if (turnScore1 > 21) {
                const text1 = document.getElementById("textspace1");
                text1.innerHTML = "<br/>" + "Busted!";
                const text2 = document.getElementById("textspace2");
                text2.innerHTML = "<br/>" + "Current turn";
                turn = 2;
                turnScore1 = 0;
                score1counter = 22;
            }
            if (turnScore1 === 21) {
                totalScore1 += 2;
                playerTotal1.innerHTML = " " + totalScore1;
                turn = 2;
                const text2 = document.getElementById("textspace2");
                text2.innerHTML = "<br/>" + "Current turn";
                const text1 = document.getElementById("textspace1");
                text1.innerHTML = "<br/>" + "21!";
                turnScore1 = 0;
                score1counter = 21;
                if (totalScore1 >= 10) {
                    const text1 = document.getElementById("textspace1");
                    text1.innerHTML += "  Winner!";
                    turn = 0;
                    turnScore1 = 0;
                    turnScore2 = 0;
                    score1counter = 0;
                    totalScore1 = 0;
                    totalScore2 = 0;
                    player1score.innerHTML = " " + turnScore1;
                    player2score .innerHTML = " " + turnScore2;
                    playerTotal1 .innerHTML = " " + totalScore1;
                    playerTotal2.innerHTML = " " + totalScore2;
                }
            }
        }
        else if (turnScore1 >= 16 && turnScore1 < 22) {
            const dice1 = document.getElementById("dice1");
            let number1 = randomNumber();
            dice1.innerHTML = "<br/>" + number1;
            score1 = score1 + number1;
            turnScore1 += score1;
            if (turnScore1 > 21) {
                const text1 = document.getElementById("textspace1");
                text1.innerHTML = "<br/>" + "Busted!";
                const text2 = document.getElementById("textspace2");
                text2.innerHTML = "<br/>" + "Current turn";
                turn = 2;
                turnScore1 = 0;
                score1counter = 22;
            }
            if (turnScore1 === 21) {
                totalScore1 += 2;
                playerTotal1.innerHTML = " " + totalScore1;
                turn = 2;
                const text2 = document.getElementById("textspace2");
                text2.innerHTML = "<br/>" + "Current turn";
                const text1 = document.getElementById("textspace1");
                text1.innerHTML = "<br/>" + "21!";
                turnScore1 = 0;
                score1counter = 21;
                if (totalScore1 >= 10) {
                    const text1 = document.getElementById("textspace1");
                    text1.innerHTML += "  Winner!";
                    turn = 0;
                    turnScore1 = 0;
                    turnScore2 = 0;
                    score1counter = 0;
                    totalScore1 = 0;
                    totalScore2 = 0;
                    player1score.innerHTML = " " + turnScore1;
                    player2score .innerHTML = " " + turnScore2;
                    playerTotal1 .innerHTML = " " + totalScore1;
                    playerTotal2.innerHTML = " " + totalScore2;
                }
            }
        }
        player1score.innerHTML = " " + turnScore1;
        return turnScore1;
    }
}

function rollDice2() {
    let score1 = 0;
    if (turn === 2) {
        const text2 = document.getElementById("textspace2");
        text2.innerHTML = "<br/>" + "Current turn";
        const text1 = document.getElementById("textspace1");
        text1.innerHTML = "<br/>" + " ";
        if (turnScore2 < 16) {
            const dice1 = document.getElementById("dice2");
            let number1 = randomNumber();
            dice1.innerHTML = "<br/>" + number1;
            const dice2 = document.getElementById("dice4");
            let number2 = randomNumber();
            dice2.innerHTML = "<br/>" + number2;
            score1 = score1 + number1 + number2;
            currentscore.innerHTML = " " + score1;
            turnScore2 += score1;
            if (turnScore2 > 21) {
                const text2 = document.getElementById("textspace2");
                text2.innerHTML = "<br/>" + "Busted!";
                const text1 = document.getElementById("textspace1");
                text1.innerHTML = "<br/>" + "Current turn";
                turn = 1;
                turnScore2 = 0;
                if (turnScore1 < 21 && turnScore1 > 0) {
                    totalScore1 += 1;
                    playerTotal1.innerHTML = " " + totalScore1;
                    turnScore1 = 0;
                    player1score.innerHTML = " " + turnScore1;
                }
            }
            if (turnScore2 === 21) {
                totalScore2 += 2;
                playerTotal2.innerHTML = " " + totalScore2;
                turn = 1;
                const text1 = document.getElementById("textspace1");
                text1.innerHTML = "<br/>" + "Current turn";
                const text2 = document.getElementById("textspace2");
                text2.innerHTML = "<br/>" + "21!";
                turnScore2 = 0;
                if (turnScore1 < 21) {
                    turnScore1 = 0;
                    player1score.innerHTML = " " + turnScore1;
                }
                if (totalScore2 >= 10) {
                    const text2 = document.getElementById("textspace2");
                    text2.innerHTML += "  Winner!";
                    turn = 0;
                    turnScore1 = 0;
                    turnScore2 = 0;
                    score1counter = 0;
                    totalScore1 = 0;
                    totalScore2 = 0;
                    player1score.innerHTML = " " + turnScore1;
                    player2score .innerHTML = " " + turnScore2;
                    playerTotal1 .innerHTML = " " + totalScore1;
                    playerTotal2.innerHTML = " " + totalScore2;
                }
            }
        }
        else if (turnScore2 >= 16 && turnScore2 < 22) {
            const dice1 = document.getElementById("dice2");
            let number1 = randomNumber();
            dice1.innerHTML = "<br/>" + number1;
            score1 = score1 + number1;
            turnScore2 += score1;
            if (turnScore2 > 21) {
                const text2 = document.getElementById("textspace2");
                text2.innerHTML = "<br/>" + "Busted!";
                const text1 = document.getElementById("textspace1");
                text1.innerHTML = "<br/>" + "Current turn";
                turn = 1;
                turnScore2 = 0;
                if (turnScore1 < 21 && turnScore1 > 0) {
                    totalScore1 += 1;
                    playerTotal1.innerHTML = " " + totalScore1;
                    turnScore1 = 0;
                    player1score.innerHTML = " " + turnScore1;
                }
            }
            if (turnScore2 === 21) {
                totalScore2 += 2;
                playerTotal2.innerHTML = " " + totalScore2;
                turn = 1;
                const text1 = document.getElementById("textspace1");
                text1.innerHTML = "<br/>" + "Current turn";
                const text2 = document.getElementById("textspace2");
                text2.innerHTML = "<br/>" + "21!";
                turnScore2 = 0;
                if (turnScore1 < 21) {
                    turnScore1 = 0;
                    player1score.innerHTML = " " + turnScore1;
                }
                if (totalScore2 >= 10) {
                    const text2 = document.getElementById("textspace2");
                    text2.innerHTML += "  Winner!";
                    turn = 0;
                    turnScore1 = 0;
                    turnScore2 = 0;
                    score1counter = 0;
                    totalScore1 = 0;
                    totalScore2 = 0;
                    player1score.innerHTML = " " + turnScore1;
                    player2score .innerHTML = " " + turnScore2;
                    playerTotal1 .innerHTML = " " + totalScore1;
                    playerTotal2.innerHTML = " " + totalScore2;
                }
            }
        }
        player2score.innerHTML = " " + turnScore2;
        return turnScore2;
    }
}

function finishTurn1() {
    if (turnScore1 > 15 && turnScore1 < 21) {
        const text2 = document.getElementById("textspace2");
        text2.innerHTML = "<br/>" + "Current turn";
        const text1 = document.getElementById("textspace1");
        text1.innerHTML = "<br/>" + " ";
        turn = 2;
        return turnScore1;
    }
}

function finishTurn2() {
    if (turnScore2 > 15 && turnScore2 < 21) {
        const text1 = document.getElementById("textspace1");
        text1.innerHTML = "<br/>" + "Current turn";
        const text2 = document.getElementById("textspace2");
        text2.innerHTML = "<br/>" + " ";
        turn = 1;
        if (turnScore1 > 15 && turnScore1 < 21) {
            if (turnScore1 > turnScore2) {
                totalScore1 += 1;
                playerTotal1.innerHTML = " " + totalScore1;
                turnScore1 = 0;
                turnScore2 = 0;
                player2score.innerHTML = " " + turnScore2;
                player1score.innerHTML = " " + turnScore1;
                if (totalScore1 >= 10) {
                    const text1 = document.getElementById("textspace1");
                    text1.innerHTML += "  Winner!";
                    turn = 0;
                    turnScore1 = 0;
                    turnScore2 = 0;
                    score1counter = 0;
                    totalScore1 = 0;
                    totalScore2 = 0;
                    player1score.innerHTML = " " + turnScore1;
                    player2score .innerHTML = " " + turnScore2;
                    playerTotal1 .innerHTML = " " + totalScore1;
                    playerTotal2.innerHTML = " " + totalScore2;
                }
            }
            else if (turnScore2 > turnScore1) {
                totalScore2 += 1;
                playerTotal2.innerHTML = " " + totalScore2;
                turnScore1 = 0;
                turnScore2 = 0;
                player2score.innerHTML = " " + turnScore2;
                player1score.innerHTML = " " + turnScore1;
                if (totalScore2 >= 10) {
                    const text2 = document.getElementById("textspace2");
                    text2.innerHTML += "  Winner!";
                    turn = 0;
                    turnScore1 = 0;
                    turnScore2 = 0;
                    score1counter = 0;
                    totalScore1 = 0;
                    totalScore2 = 0;
                    player1score.innerHTML = " " + turnScore1;
                    player2score .innerHTML = " " + turnScore2;
                    playerTotal1 .innerHTML = " " + totalScore1;
                    playerTotal2.innerHTML = " " + totalScore2;
                }
            }
            else if (turnScore2 === turnScore1) {
                turnScore1 = 0;
                turnScore2 = 0;
                player1score.innerHTML = " " + turnScore1;
                player2score.innerHTML = " " + turnScore2;
            }
        }
        else if (score1counter > 21) {
            if (turnScore2 > 0 && turnScore2 < 21) {
                totalScore2 += 1;
                playerTotal2.innerHTML = " " + totalScore2;
                score1counter = 0;
                turnScore2 = 0;
                player2score.innerHTML = " " + turnScore2;
                if (totalScore2 >= 10) {
                    const text2 = document.getElementById("textspace2");
                    text2.innerHTML += "  Winner!";
                    turn = 0;
                    turnScore1 = 0;
                    turnScore2 = 0;
                    score1counter = 0;
                    totalScore1 = 0;
                    totalScore2 = 0;
                    player1score.innerHTML = " " + turnScore1;
                    player2score .innerHTML = " " + turnScore2;
                    playerTotal1 .innerHTML = " " + totalScore1;
                    playerTotal2.innerHTML = " " + totalScore2;
                }
            }
        }
        else if (score1counter === 21) {
            score1counter = 0;
            turnScore2 = 0;
            player2score.innerHTML = " " + turnScore2;
        }
    }
}

function randomNumber() {
    let num = Math.floor(Math.random()* 6) +1;
    return num;
}