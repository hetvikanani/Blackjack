// var add = document.getElementById("year");

// function age() {
//   var year = prompt("what is your born year");
//   var days = (2020 - year) * 365;
//   add.append("you are" + " " + days + " " + " days old");
// }

// function set() {
//   add.remove();
// }

//2rock paper....
// function game(yourchoice) {
//   var cutomerchoice = yourchoice.id;
//   var botchoice = choose(any());
//   console.log(botchoice);
//   results = decidewinner(cutomerchoice, botchoice);
//   console.log(results);
//   message = finalmessage(results);
//   console.log(message);

//   // front(cutomerchoice, botchoice, message);
// }

// function choose(number) {
//   return ["rock", "paper", "scssior"][number];
// }
// function any() {
//   return Math.floor(Math.random() * 3);
// }

// function decidewinner(player, computer) {
//   var data = {
//     rock: { rock: 0.5, paper: 0, scssior: 1 },
//     paper: { rock: 1, paper: 0.5, scssior: 0 },
//     scssior: { rock: 0, paper: 1, scssior: 0.5 },
//   };
//   var yourscore = data[player][computer];
//   var computerscore = data[computer][player];
//   console.log(yourscore, computerscore);
//   return [yourscore, computerscore];
// }
// function finalmessage([yourscore, computerscore]) {
//   if (yourscore === 0) {
//     return { message: "you lost", color: "red" };
//   } else if (yourscore === 0.5) {
//     return { message: "tie", color: "yello" };
//   } else {
//     return { message: "you win", color: "green" };
//   }
// }

// function front(a, b, c) {
//   var database = {
//     rock: document.getElementById("rock").src,
//     paper: document.getElementById("paper").src,
//     scssior: document.getElementById("scssior").src,
//   };
//   document.getElementById("rock").remove();
//   document.getElementById("paper").remove();
//   document.getElementById("scssior").remove();

//   var humandiv = document.createElement("div");
//   var botdiv = document.createElement("div");
//   var messagediv = document.createElement("div");

//   humandiv.innerHTML = "<img src'" + database[a] + "'>";
//   botdiv.innerHTML = "<img src'" + database[b] + "'>";

//   var jaan = document.getElementById("mj").appendChild(humandiv);
//   console.log(jaan);
//   // document.getElementById("flex-box").append(botdiv);
// }
//3. button
// var btn = document.getElementsByTagName("button");

// var copybtn = [];
// for (var i = 0; i < btn.length; i++) {
//   copybtn.push(btn[i].classList[1]), copybtn;
// }

// function changecolor(btnselect) {
//   if (btnselect.value === "red") {
//     redcolor();
//   } else if (btnselect.value === "green") {
//     greencolor();
//   } else if (btnselect.value === "reset") {
//     resetcolor();
//   } else {
//     rendomcolor();
//   }
// }
// function redcolor() {
//   for (var i = 0; i < btn.length; i++) {
//     // btn[i].classList.remove(btn[i].classList[1]);
//     btn[i].classList = "btn-danger btn btn-lg";
//   }
// }
// function greencolor() {
//   for (var i = 0; i < btn.length; i++) {
//     // btn[i].classList.remove(btn[i].classList[1]);
//     btn[i].classList = "btn-success btn btn-lg";
//   }
// }

// function resetcolor() {
//   for (var i = 0; i < btn.length; i++) {
//     // btn[i].classList.remove(btn[i].classList[1]);
//     btn[i].classList = `${copybtn[i]} btn btn-lg`;
//   }
// }
// function rendomcolor() {
//   var ran = ["dark", "success", "primary", "danger", "warning"];
//   for (var i = 0; i < btn.length; i++) {
//     btn[i].classList = "btn-" + ran[Math.floor(Math.random() * 5)];
//   }
// }
//blackjack
var choice = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "A", "Q", "K", "J"];
var cardscore = {
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  Q: 10,
  K: 10,
  J: 10,
  A: 11,
};

document.querySelector("#hitbtn").addEventListener("click", blackjackhit);
document.querySelector("#dealbtn").addEventListener("click", blackjackdeal);
document.querySelector("#standbtn").addEventListener("click", blackjackstand);
var blank = document.querySelector("#blank");
var youdiv = document.querySelector("#youbox");
var delerdiv = document.querySelector("#delerbox");
var score = document.querySelector("#newscore");
var delermark = document.querySelector("#newdelerscore");
var userscore = 0;
var delerscore = 0;
var standbtn = false;
var turnover = false;

function blackjackhit() {
  if (standbtn === false) {
    var card = random();
    blank.innerHTML = "Let's play";
    if (userscore <= 21) {
      var picture = document.createElement("img");
      picture.src = `src_blackjack/images/${card}.png `;
      youdiv.append(picture);
      var hitsound = new Audio("src_blackjack/sounds/swish.m4a");

      hitsound.play();
      userscore = userscore + cardscore[card];
      score.innerHTML = userscore;
    }
    if (userscore > 21) {
      score.innerHTML = "Brust!";
    }
  }
}

function blackjackdeal() {
  turnover = true;

  if (turnover === true) {
    finalwinner();
    var youdivimg = youdiv.querySelectorAll("img");
    for (var i = 0; i < youdivimg.length; i++) {
      youdivimg[i].remove();
    }
    var delerdivimg = delerdiv.querySelectorAll("img");
    for (var i = 0; i < delerdivimg.length; i++) {
      delerdivimg[i].remove();
    }
    score.innerHTML = "You:0";
    userscore = 0;
    delermark.innerHTML = "Deler:0";
    delerscore = 0;
  }
  // standbtn = false;
}

function random() {
  return choice[Math.floor(Math.random() * 13)];
}
function display() {
  if (delermark.innerHTML === "Brust!") clearInterval(z);
  standbtn = true;
  if (standbtn === true) {
    var card = random();
    if (delerscore <= 21) {
      var picture = document.createElement("img");
      picture.src = `src_blackjack/images/${card}.png `;
      delerdiv.append(picture);
      var hitsound = new Audio("src_blackjack/sounds/swish.m4a");
      hitsound.play();
      delerscore = delerscore + cardscore[card];
      delermark.innerHTML = delerscore;
    }
    if (delerscore > 21) {
      delermark.innerHTML = "Brust!";
    }
  }
}
var z;
function blackjackstand() {
  z = setInterval(display, 1300);
}

var lostsound = new Audio("src_blackjack/sounds/aww.mp3");
var winsound = new Audio("src_blackjack/sounds/cash.mp3");
var wins = 1;
var loses = 1;
var draws = 1;

function finalwinner() {
  if (userscore <= 21) {
    if (userscore > delerscore || delerscore > 21) {
      blank.innerHTML = "You Win";
      winsound.play();
      document.querySelector("#win").innerHTML = wins++;
    } else if (userscore < delerscore) {
      blank.innerHTML = "You Lost";
      lostsound.play();
      document.querySelector("#lose").innerHTML = loses++;
    } else if (userscore === delerscore) {
      blank.innerHTML = " Draw";
      document.querySelector("#draw").innerHTML = draws++;
    }
  } else if (userscore > 21 || delerscore < 21) {
    blank.innerHTML = "You Lost";
    lostsound.play();
    document.querySelector("#lose").innerHTML = loses++;
  } else if (userscore > 21 || delerscore > 21) {
    blank.innerHTML = " Draw";
    document.querySelector("#draw").innerHTML = draws++;
  }
}
