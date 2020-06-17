/** 
 * Var Selectors 
 */
const gallery = document.getElementById('gallery');
const testZone = document.getElementById('test');

/** employeeArr captures the data and is later used to compare against 
 *employee little cards data and to complete Big Module data.
 */
let employeeArr = [];
let bigBox;
let xBTN;

/** 
 * Fetch protocols 
 */

//FEtch GETs 12 random users from the API
fetch('https://randomuser.me/api/?results=12')
    .then(response => response.json())
    .then((data) => {
        //stores data for comparision in eventListener
        employeeArr.push(data.results);

        //Creates 12 little Employee cards and post them to the DOM
        generateEmployees(data.results);

        //Opens and closes Big-Module-Card
        eListener(data);
    })

/** 
 * functions
 */

//function creates small cards of employee information and post it to the DOM
function generateEmployees(data) {
    /** 
     * employees small cards
     */
    let html = '';
    data.map(item =>
        html += ` 
            <div class="card" id="${item.name.first}">
                <div class="card-img-container">
                    <img class="card-img" src="${item.picture.medium}" alt="profile picture">
                </div>
                <div class="card-info-container">
                    <h3 id="name" class="card-name cap">${item.name.first} ${item.name.last}</h3>
                    <p class="card-text">${item.email}</p>
                    <p class="card-text cap">${item.location.city}</p>
                </div>    
            </div>
                `);

    gallery.innerHTML = html;

}


/** 
 * Open and Close Module EventListeners
 */
function eListener(data) {
    let cards = document.getElementsByClassName('card');
    //For-Loop attaches an event listener to each employee card
    for (let i = 0; i < cards.length; i++) {

        //vars to re-arrange the way the birthday appears in the DOM
        let birthday = employeeArr[0][i].dob.date.slice(8, 10)
        let birthMonth = employeeArr[0][i].dob.date.slice(5, 7)
        let birthYear = employeeArr[0][i].dob.date.slice(2, 4)

        /**
         * each card has an attached event listener. The event listener based on selection creates
         * a module with employee info using a flexible template literal.
         */
        cards[i].addEventListener('click', event => {
            let moduleHTML = '';
            moduleHTML += `
           <div class="modal-container" id="bigBox">
                       <div class="modal">
                           <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
                           <div class="modal-info-container">
                               <img class="modal-img" src="${employeeArr[0][i].picture.large}" alt="profile picture ${employeeArr[0][i].name.last}">
                               <h3 id="name" class="modal-name cap">${employeeArr[0][i].name.first} ${employeeArr[0][i].name.last}</h3>
                               <p cla="modal-text">${employeeArr[0][i].email}</p>
                               <p class="modal-text cap">${employeeArr[0][i].location.city}</p>
                               <hr>
                               <p class="modal-text">${employeeArr[0][i].phone}</p>
                               <p class="modal-text">${employeeArr[0][i].location.street.number} ${employeeArr[0][i].location.street.name}, ${employeeArr[0][i].location.city}, ${employeeArr[0][i].nat} ${employeeArr[0][i].location.postcode}</p>
                               <p class="modal-text">Birthday: ${birthMonth}/${birthday}/${birthYear}</p>
                           </div>
                       </div>
                       `;
            //Appends the template literal as the next DOM element.
            //Thank you to @Kalen H "Treehouse Student" who suggested 'insertAdjacentHTML'.
            gallery.insertAdjacentHTML('afterend', moduleHTML)

            //var selectors for the next event Listener
            bigBox = document.getElementById('bigBox');
            xBTN = document.getElementById('modal-close-btn');
            //event listener to remove the module when clicking the 'x' button
            xBTN.addEventListener('click', () => {
                bigBox.remove()
            })
        });
    }
}