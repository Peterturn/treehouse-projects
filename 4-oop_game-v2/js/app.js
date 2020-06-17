/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
                      //_____VAR LIST_____//
const game = new Game ();

/**
*creates an empty array and then joins it for
*Game.js line 44 to use as a test for Game.js 77
*/
let correctLettersArr = [];
let correctLettersArrJoined;

                    //_____DOM SELECTORS_____//
const startButton = document.getElementById('btn__reset');
const hiddenLetters = document.getElementsByClassName('hide letter');
const overlay = document.getElementById('overlay');
const phraseUl = document.getElementById('phrase');


              //____________EVENT HANDLERS____________//

                      //_____START GAME_____//
/**
*EventListener attached to 'btn__reset' to start game Game.js line 36
*/
startButton.addEventListener('click', () => {
game.startGame();
});

                    //_____PLAY GAME_____//
/**
*EventListener attached to 'On Screen keyboard btns' to handleInteraction
*Game.js line 55
*/
document.querySelectorAll('.key').forEach(item => {
  item.addEventListener('click', event => {

    let eTarget = event.target;
    game.handleInteraction(eTarget);
    });
  })


// Gets letters Shown as they are changed in the CSS (app.js line 46)
let letterShown = document.getElementsByClassName('show');
