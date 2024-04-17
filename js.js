let x_o = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let player1;
let player2;
let player11 = 0;
let player22 = 0;
let chh = 0;
let r = "X";
function b() {
  if (r == `X`) {
    confirm(`${player1} Winner`);
    player11++;
  } else {
    confirm(`${player2} Winner`);
    player22++;
  }
  document.getElementById("over-x-o-container").style.zIndex = `1`;
  document.getElementById("btn1").style.display = `block`;
}
function checkLine(a, b, c) {
  return a === r && b === r && c === r;
}
function a(aa) {
  for (let i = 0; i < 9; i++) {
    if (x_o[i] == aa) {
      x_o[i] = r;
      document.getElementById(`${aa}`).disabled = true;
    }
  }

  for (let i = 0; i < 3; i++) {
    // Check rows
    if (checkLine(x_o[i * 3], x_o[i * 3 + 1], x_o[i * 3 + 2])) {
      b();
      break;
    }
    // Check columns
    if (checkLine(x_o[i], x_o[i + 3], x_o[i + 6])) {
      b();
      break;
    }
  }
  // Check diagonals
  if (checkLine(x_o[0], x_o[4], x_o[8]) || checkLine(x_o[2], x_o[4], x_o[6])) {
    b();
  }
  chh++;
  if (chh == 9) {
    confirm("NO WINNER");
    document.getElementById("over-x-o-container").style.zIndex = `1`;
    document.getElementById("btn1").style.display = `block`;
  }
  r = r === "X" ? "O" : "X";
  document.getElementById("para").innerHTML = r + " TURN";
}

function reseat() {
  x_o = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  r = "X";
  document.getElementById("player1").innerHTML = `${player1} : X : ${player11}`;
  document.getElementById("player2").innerHTML = `${player2} : O : ${player22}`;
  document.getElementById("para").innerHTML = r + " TURN";
  document.getElementById("over-x-o-container").style.zIndex = `-1`;
  for (let k = 0; k < 9; k++) {
    document.getElementById(`${k}`).innerHTML = ``;
    document.getElementById(`${k}`).disabled = false;
  }
}

document.getElementById("btn").addEventListener("click", function () {
  player11 = 0;
  player22 = 0;
  player1 = prompt("Name Player 1: ");
  player2 = prompt("Name Player 2: ");
  confirm(`${player1} will play with X\n ${player2} will play with O`);
  reseat();
});

document.getElementById("btn1").addEventListener("click", function () {
  reseat();
});
