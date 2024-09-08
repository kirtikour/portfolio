let con = document.querySelectorAll(".cards");
let flippedcard = null;
let move = 0;
let gameend = false;
var isPaused = false;
movehtml = document.querySelector(".moves");
function restart() {
  window.location.reload();
}

function rotate(card) {
  if (gameend || isPaused) {
    return;
  }

  let contents = card.querySelector(".content");
  contents.style.transform = "rotateY(180deg)";
  move++;
  console.log(move);
  movehtml.innerHTML = `${13 - move}`;
  if (move == 13) {
    con.forEach((content) => {
      content.querySelector(".content").style.transform = "rotateY(0deg)";
    });
    alert("out of moves");
    // window.location.reload();
    // move = 0;
    // movehtml.innerHTML = `${12 - move}`;
    // flippedcard = null;
    gameend = true;
    return;
  }

  if (flippedcard) {
    let flippedcardcontent = flippedcard.querySelector(".content");
    if (flippedcardcontent != contents) {
      let flipimg = flippedcardcontent.querySelector(".back img").alt;
      let contentimg = contents.querySelector(".back img").alt;

      if (flipimg == contentimg) {
        flippedcard = null;

        return;
      } else {
        setTimeout(() => {
          contents.style.transform = "";
          flippedcardcontent.style.transform = "";
        }, 1000);
        flippedcard = null;
        return;
      }
    }
  }
  flippedcard = card;
}

function togglePause() {
  isPaused = !isPaused;
  // var overlay = document.getElementById("overlay");
  var pauseButton = document.getElementById("pauseButton");

  if (isPaused) {
    //overlay.style.display = "block"; // Show the black transparent overlay
    pauseButton.textContent = "RESUME";
    pauseButton.style.backgroundColor = "#1a1a1a";
    pauseButton.style.color = "#fff";
    // Disable other game actions here
  } else {
    //overlay.style.display = "none"; // Hide the black transparent overlay
    pauseButton.textContent = "PAUSE";

    // Enable other game actions here
  }
}
