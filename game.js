let cardArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let playerA = new Array();
let playerB = new Array();

let counterA = 0;
let counterB = 0;

const init = () => {
  cardArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  playerA = [];
  playerB = [];

  counterA = 0;
  counterB = 0;

  shuffle(cardArr);
  distribute(cardArr);

  document.querySelector("#scoreA").innerHTML = `${counterA}`;
  document.querySelector("#scoreB").innerHTML = `${counterB}`;
  document.querySelector("h4").innerHTML = '';
  document.querySelector("#play").innerHTML = "Play";
  document.querySelector("#play").addEventListener('click', compare);
}


const shuffle = (arr) => {
  arr.sort(function (a, b) {
    return 0.5 - Math.random()
  });
}


const distribute = (arr) => {
  playerA = arr.slice(0, (arr.length / 2));
  playerB = arr.slice((arr.length / 2), arr.length);
}

const compare = () => {

  if (playerA.length > 0) {
    document.querySelector("#a").src = `./images/${(playerA[0])-1}.png`;
    document.querySelector("#b").src = `./images/${(playerB[0])-1}.png`;

    playerA[0] > playerB[0] ? counterA++ : counterB++;

    document.querySelector("#scoreA").innerHTML = `${counterA}`;
    document.querySelector("#scoreB").innerHTML = `${counterB}`;

    playerA = playerA.slice(1);
    playerB = playerB.slice(1);


  } else {

    console.log(document.querySelector("h4"));
    counterA > counterB ? document.querySelector("h4").innerHTML = `Player A wins with ${counterA} points
    wait for it...` : document.querySelector("h4").innerHTML = `Player B wins with ${counterB} points
    wait for it...`;

    // document.querySelector("#play").innerHTML = "play again";
    setInterval(init, 5000);

  }




}


shuffle(cardArr);
distribute(cardArr);
document.querySelector("#play").addEventListener('click', compare);