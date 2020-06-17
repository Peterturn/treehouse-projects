/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
                      //_____VAR LIST_____//
const game = new Game ();
let correctLettersArr = [];
let correctLettersArrJoined;

                    //_____DOM SELECTORS_____//
const startButton = document.getElementById('btn__reset');
const hiddenLetters = document.getElementsByClassName('hide letter');
const overlay = document.getElementById('overlay');
const phraseUl = document.getElementById('phrase');

              //____________EVENT HANDLERS____________//

                     //_____START GAME_____//
startButton.addEventListener('click', () => {
game.startGame();
});

                    //_____PLAY GAME_____//
//listens for user interactions
document.querySelectorAll('.key').forEach(item => {
  item.addEventListener('click', event => {

    let eTarget = event.target;
    game.handleInteraction(eTarget);
    });
  })

  // Gets letters Shown as they are changed in the CSS
let letterShown = document.getElementsByClassName('show');
