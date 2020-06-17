/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
  constructor(phrase) {
      this.phrase = phrase.toLowerCase();}

/**
 * Display phrase on game board
 */
  addPhraseToDisplay(){
      const phraseSection = document.getElementById('phrase').firstElementChild;
      const phraseSplit = this.phrase.split('');
      //console.log(phraseSplit);
      //loop that adds className for each 'letter' and 'space.' It then appends each as an 'li' to the 'ul' in the phrase section of the html.
      for (let i = 0; i<phraseSplit.length; i++){
        const li = document.createElement('li');
        if(phraseSplit[i]!==' '){
        li.className = 'hide letter';
        li.innerText = phraseSplit[i];
        phraseSection.appendChild(li);
        }else{
        li.className = 'hide space';
        li.innerText = ' ';
        phraseSection.appendChild(li);}
      }
    }

/**
* Checks if passed letter is in phrase
* @param (string) eTarget - Letter to check
*/
  checkLetter(eTarget){
      if (correctLettersArrJoined.match(eTarget.textContent)){
         return true;
      }else{
         return false;
      }
    }

/**
* Displays passed letter on screen after a match is found
* @param (string) eTarget - Letter to display
*/
  showMatchedLetter(eTarget){
       //forLoop runs though the 'li' array and shows matched letter on click event.
       for (let i=0; i <hiddenLetters.length; i++){
         if(hiddenLetters[i].innerText === eTarget.textContent){
           //console.log('true');
           hiddenLetters[i].className = 'show';
          }
        }
     /**
     *2nd forLoop passesover the new list of hiddenLetters.
     *The second loop is there for dynamic programing should someone
     *add a double letter word. If 2 identical letter i.e. 'tt, ss...' are present
     *in the hidden phrase the fist letter is removed from the array and the
     *new position of the next letter is in the current [i].
     *In order to select the duplicate that are next to each other the
     *a second iteration is needed.
     */
       for (let j=0; j <hiddenLetters.length; j++){
         if(hiddenLetters[j].innerText === eTarget.textContent ){
           //console.log('true');
           hiddenLetters[j].className = 'show';
          }
        }
     }

}
