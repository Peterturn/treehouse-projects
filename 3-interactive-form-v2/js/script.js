                        //Global Var Section
//job title selectors
const titleDropList = document.getElementById('title');
const otherTitleTextArea = document.getElementById('other-title');
//Selects the T-shirt "Design:" drop down list node and children
const selectTheme = document.getElementById('design');
const sTC = selectTheme.children;
////Selects the T-shirt "Color:" drop down list node and children
const colors = document.getElementById('color');
const cC = colors.children;
//global var for the over all cost of the activities section
const activities = document.querySelector('.activities');
const checkBoxes = activities.querySelectorAll('input[type="checkbox"]');
//payment section global var
const payment = document.getElementById('payment');
const paymentOptions = payment.children;
const creditCard = document.getElementById('credit-card');
const ccChildren = creditCard.children;
const payPal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');
//Credit Card true used for the submit handler to know if it should submit the form without cc info.
let creditCardTrue = true;
//Vars for Validation
const basicInfo = document.querySelector('fieldset');
const nameField = document.getElementById('name');
const emailField = document.getElementById('mail');
const ccNum = document.getElementById('cc-num');
const zip = document.getElementById('zip');
const cVv = document.getElementById('cvv');
//Vars for error messages
const legendary = document.querySelectorAll('legend');
const btn = document.querySelector('button');
//selects the form for the submit handler
const form = document.querySelector("form");
const proTip = document.getElementsByClassName("proTip");
const proTipcc = document.getElementsByClassName("proTipcc");

//Sets focus on the name field at the loading of the page
nameField.focus();
/*Hides html element at the loading of page but will appear if java script is not working.*/
otherTitleTextArea.style.display = 'none';
//payment section preset display properties to hide the paypal and bitcoin messages.
creditCard.style.display = 'block'
payPal.style.display = 'none';
bitcoin.style.display = 'none';
payment[1].selected = true;
//If job role other is chosen, the hidden text area will display for the user.
titleDropList.addEventListener('change', (e)=>{
  if (e.target.value == "other"){
  otherTitleTextArea.style.display = '';
}else{
  otherTitleTextArea.style.display = 'none';
}
});

/*Removes the select Theme node from the list of options IN the "Design:" list
but only after the mouseover.
*/
selectTheme.addEventListener('mouseover', (e) => {
  if (sTC[0].innerText === 'Select Theme'){
sTC[0].style.display = 'none';
sTC[0].disabled = true;
}});

/*Function creates and option inside the "colors drop down menu" later this option
selected = true and disabled = true forcing the user to select a t-shirt theme before continuing.
 */
function appOpt() {
const options = document.createElement("option");
colors.insertBefore(options, colors[0]);
}
appOpt();

// for I loop that hides all theme options and sets classNames as an optional selection method
for (let i = 1; i < cC.length; i++){
  cC[i].style.display = 'none';
  if(i<4)
  {cC[i].className = 'jsPuns';}
  else{cC[i].className = 'iHeart';}
}

//creates a 'Please select a T-shirt theme' inside the drop down menu.
cC[0].textContent='Please select a T-shirt theme';
cC[0].selected = true;
cC[0].disabled = true;

//based on user selection of Design, the Color Menu's options change.
// CLEAN UP CODE LATER
selectTheme.addEventListener('change', (e) => {
if(e.target.value == "heart js"){
  cC[0].style.display = 'none';
  cC[1].style.display = 'none';
  cC[2].style.display = 'none';
  cC[3].style.display = 'none';
  cC[4].style.display = '';
  cC[5].style.display = '';
  cC[6].style.display = '';
}
//next part of statement
else if (e.target.value == "js puns") {
  cC[0].style.display = 'none';
  cC[1].style.display = '';
  cC[2].style.display = '';
  cC[3].style.display = '';
  cC[4].style.display = 'none';
  cC[5].style.display = 'none';
  cC[6].style.display = 'none';
}
});

//Var for the total cost of all activities.
let totalCost = 0;

/*function appends a dom element at the end of the activities section with the total cost of activities.*/
function costDiv() {
const div = document.createElement("div");
div.className = 'activities';
div.id = 'total';
div.innerText = 'Total Cost: $ ' +totalCost;
activities.appendChild(div);
}
costDiv();

//addEventListener that updates cost an disbales selections based on conflict
activities.addEventListener('change', (e) => {
  let divInnerHTML = document.getElementById('total');
  let changedCheckbox = e.target;
  let isChecked = changedCheckbox.checked;
  let dayTime = changedCheckbox.getAttribute("data-day-and-time");

  //if statements that updates total cost.
  if (isChecked){
    let dataCost = parseInt(changedCheckbox.getAttribute("data-cost"));
    totalCost += dataCost;
    divInnerHTML.innerText = 'Total Cost: $ '+totalCost;
  }
  else if (isChecked === false ){
    let dataCost = parseInt(changedCheckbox.getAttribute("data-cost"));
    totalCost -= dataCost;
    divInnerHTML.innerText = 'Total Cost: $ '+totalCost;}

//Statement that compares time and date and disbales the other option if conflicting.
  for (let i = 1; i<checkBoxes.length; i++){
    let dayTimeOther = checkBoxes[i].getAttribute("data-day-and-time");
      if (dayTime === dayTimeOther && checkBoxes[i] !== changedCheckbox){
        if(isChecked){
        checkBoxes[i].disabled = true;
        changedCheckbox.disabled = false;
      }else{
        checkBoxes[i].disabled = false;
      }
      }
  }
});

// Hides the "select payment methode" inside the menu.
payment.addEventListener('mouseover', (e) => {
  if (paymentOptions[0].innerText === 'Select Payment Method'){
paymentOptions[0].style.display = 'none';
paymentOptions[0].disabled = true;
}});

//Based on user selection the payment option screen display changes.
payment.addEventListener('change', (e) => {
if(e.target.value == "credit card"){
  creditCard.style.display = 'block';
  creditCardTrue = true;
  payPal.style.display = 'none';
  bitcoin.style.display = 'none';
} else if (e.target.value == "paypal"){
  creditCard.style.display = 'none';
  creditCardTrue = false;
  payment[1].selected = false;
  payPal.style.display = 'block';
  bitcoin.style.display = 'none';
} else if (e.target.value == "bitcoin"){
  creditCard.style.display = 'none';
  creditCardTrue = false;
  payment[1].selected = false;
  payPal.style.display = 'none';
  bitcoin.style.display = 'block';
}
});

//validator functions
function isValidName(username){
  return /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(username);
}
function isEmailValid(usermail){
  return /^[^@]+@[^@.]+\.[a-z]+/.test(usermail);
  //  return /^[a-zA-Z-0-9]+(([',. -!&*][a-zA-Z ])?[a-zA-Z]*)*@[a-zA-Z-0-9]+(([',. -!&*][a-zA-Z ])?[a-zA-Z]*)*[.][a-zA-Z-0-9]+(([',. -!&*][a-zA-Z ])?[a-zA-Z]*)*$/.test(usermail);
}
function isValidCreditCardNum(cardNum){
  return/^[0-9]{13,16}$/.test(cardNum);
  //return /^\d{3}([ \-]?)((\d{6}\1?\d{5})|(\d{4}\1?\d{4}\1?\d{4}))$/.test(cardNum);
}
function isValidZip(zipCode){
  return /^\d{5}$/.test(zipCode);
}
function isValidCv(cvCode){
  return /^\d{3}$/.test(cvCode);
}

// section input True False Testers
function nameTester(){
  return isValidName(nameField.value);
}
function emailTester(){
  return isEmailValid(emailField.value);
}
function boxTester(){
  for (let i=0; i < checkBoxes.length; i++){
    if(checkBoxes[i].checked){
      return true;
    }
  }
}
function creditCardTester(){
  return isValidCreditCardNum(ccNum.value);
}
function zipCodeTester(){
  return isValidZip(zip.value);
}
function cvCodeTester(){
  return isValidCv(cVv.value);
}

//append hidden error messages to display if on submit the information is incorrect
for (let i=0; i<legendary.length; i++){
  const spanText = document.createElement('span');
  spanText.className = 'proTip';
  spanText.innerText = 'Error information is in the incorrect Format.';
  spanText.style.display = 'none';
  legendary[i].appendChild(spanText);
  }

for (let i=0; i<ccChildren.length; i++){
  const ccText = document.createElement('p');
  ccText.className = 'proTipcc';
  ccText.innerText = 'Error information is in the incorrect Format.';
  ccText.style.color = '#FF6347'
  ccText.style.display = 'none';
  ccChildren[i].appendChild(ccText);
  }


//Submit Listener that test if all required parts of the form are filled before submitting
form.addEventListener('submit', (e)=>{
//-------------Credit Card Section------------------//
  //CVV
   if(creditCardTester() && creditCardTrue && zipCodeTester() && !cvCodeTester()){
      e.preventDefault();
      cVv.focus();
      proTipcc[2].style.display = 'block';
      proTipcc[2].innerText = "Must Enter Valid 3 digit CVV code";
      cVv.style.borderColor = '#FF6347';
      //console.log('CVV field not working like you want it to');
    }else{
      proTipcc[2].style.display = 'none';
      cVv.style.borderColor = 'green';}

  //Zip CODE
  if(creditCardTester() && creditCardTrue && !zipCodeTester()){
      e.preventDefault();
      zip.focus();
      proTipcc[1].style.display = 'block';
      proTipcc[1].innerText = "Must Enter Valid 5 digit zip code";
      zip.style.borderColor = '#FF6347';
      cVv.style.borderColor = '#FF6347';
      //console.log('Zip field not working like you want it to');
    }else {
      proTipcc[1].style.display = 'none';
      zip.style.borderColor = 'green';
    }

//Credit Card
if(!creditCardTester() && creditCardTrue){
    e.preventDefault();
    ccNum.focus();
    proTipcc[0].style.display = 'block';
    proTipcc[0].innerText = "Must Enter Valid Credit Card Number between '13-16' digits";
    ccNum.style.borderColor = '#FF6347';
    zip.style.borderColor = '#FF6347';
    cVv.style.borderColor = '#FF6347';
    //console.log('CC field not working like you want it to');
  }else{
    proTipcc[0].style.display = 'none';
    ccNum.style.borderColor = 'green';}

//-------------Boxes---------------------//

//Activity Boxes
  if(!boxTester()){
    e.preventDefault();
    const focusBox = activities.querySelector('input[type="checkbox"]');
    focusBox.focus();
    proTip[2].style.display = 'block';
    proTip[2].innerText = "Must select at least one activity";
    legendary[2].style.borderColor = '#FF6347';
    //console.log('Box field not working like you want it to');
  }else {
    proTip[2].style.display = 'none';
    legendary[2].style.borderColor = 'blue';
  }

//-------------------- Basic Info ---------------------//

//eMail
  if(!emailTester()){
    e.preventDefault();
    emailField.focus();
    proTip[0].style.display = 'block';
    emailField.style.borderColor = '#FF6347';
    //console.log('eMail field not working like you want it to');
  } else {
    proTip[0].style.display = 'none';
    emailField.style.borderColor = 'green';
  }
//Name
  if(!nameTester()){
    e.preventDefault();
    nameField.focus();
    proTip[0].style.display = 'block';
    nameField.style.borderColor = '#FF6347'; //tomato
    //console.log('Name field not working like you want it to');
  } else if (nameTester() && !emailTester()){
    proTip[0].style.display = 'block';
    nameField.style.borderColor = 'green';
  }else {nameField.style.borderColor = 'green';}

});
