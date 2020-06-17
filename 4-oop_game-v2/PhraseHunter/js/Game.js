/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 //A game consturctor to handle the start and end of the game.
class Game {
  constructor(){
    this.missed = 0;
    //a the selection of a phrase objects for the game.
    this.phrases =[
      {phrase:'Money Talks'},
      {phrase: 'keep it simple'},
      {phrase: 'Show me the money'},
      {phrase:'let it go'},
      {phrase: 'Holy Cow Batman'},
      {phrase: 'Pray Often'}
    ];
    this.activePhrase = null;
  }

getRandomPhrase(){
    var randomNum = Math.floor(Math.random() * this.phrases.length );
    return this.phrases[randomNum];
  }


/**
* Start Game Methode: Clears the overlay and sets phrase
*/
  startGame(){
    overlay.style.display = 'none';
    this.activePhrase = new Phrase(this.getRandomPhrase().phrase);
    this.activePhrase.addPhraseToDisplay();
    console.log(this.activePhrase);

    //creates an array and then .join('')s it for checkForWin()
    for (let i=0; i <hiddenLetters.length; i++){
    correctLettersArr.push(hiddenLetters[i].innerText);
    }
    correctLettersArrJoined = correctLettersArr.join('');
    }


/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
  handleInteraction(eTarget){
    this.activePhrase.checkLetter(eTarget);
    this.activePhrase.showMatchedLetter(eTarget);
    this.checkForWin();
    this.removeLife(eTarget);
  }


              //_____HANDLE INTERACTIONS METHODS SECTION_____//
/**
 * Checks for winning move
 * @return {boolean} True if game has been won, false if game wasn't
won */
  checkForWin() {
    if (letterShown.length === correctLettersArrJoined.length){
          console.log(`checkforwin(): you win`);
          this.gameOver();
      }
    }

/**
 * Increases the value of the missed property
 * Removes a life from the scoreboard
 * Checks if player has remaining lives and ends game if player is out
 */
  removeLife(eTarget){
    if(!this.activePhrase.checkLetter(eTarget))
    this.missed += 1;

    const liveHearts = document.querySelectorAll("img");
    if(this.missed === 1){
      liveHearts[4].src = 'images/lostHeart.png';
    }
    if(this.missed === 2){
      liveHearts[3].src = 'images/lostHeart.png';
    }
    if(this.missed === 3){
      liveHearts[2].src = 'images/lostHeart.png';
    }
    if(this.missed === 4){
      liveHearts[1].src = 'images/lostHeart.png';
    }
    if(this.missed === 5){
      liveHearts[0].src = 'images/lostHeart.png';
      this.gameOver(true);
    }
  }

//Everything above works//

/**
* Displays game over message
* @param {boolean} - checks whether or not the user won the game
* based on this.missed.
*/
  gameOver() {
    const gameOverMsg = document.getElementById('game-over-message');
    if(this.missed === 5){
      gameOverMsg.innerText = "You Lost. No Worries Try Again!";
      overlay.className = 'lose';
      overlay.style.display = '';
      this.removePhrase();
      this.removeClickesOnLetters();
      this.resetHearts();
      correctLettersArr = [];
    }
    else{
      gameOverMsg.innerText = 'You Win! Wanna Play Again?';
      overlay.className = 'win';
      overlay.style.display = '';
      this.removePhrase();
      this.removeClickesOnLetters();
      this.resetHearts();
      correctLettersArr = [];
    }
  }

                      //_____RESET GAME METHODS SECTION_____//

/**
* Creates a ul element
* Removes old this.activePhrase ul element
* Appends new ul element into the phrase div area
*/
  removePhrase(){
    const createUl = document.createElement('ul');
    phraseUl.removeChild(phraseUl.firstElementChild);
    phraseUl.appendChild(createUl);
  }

/**
* Selects all button elements on the virtual keyboard
* forLoop clears all the classNames and adds the original classNames back
* All buttons are re-enabled
*/
  removeClickesOnLetters(){
    const btns = document.getElementById('qwerty').querySelectorAll('button');

    for (let i = 0; i < btns.length; i++){
      btns[i].className = 'key';
      btns[i].disabled= false;
    }
  }

/**
* Selects all image elements
* forLoop all images to original values
* this.missed is reset to equal = 0
*/
  resetHearts(){
  const liveHearts = document.querySelectorAll("img");
    for (let i = 0; i < liveHearts.length; i++){
      liveHearts[i].src = 'images/liveHeart.png';
      this.missed = 0;
    }
  }

}
