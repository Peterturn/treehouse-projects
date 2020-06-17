/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


//Clean everything but notes and code.
//Global variable(s)

//Selects all studentItems and returns an array.
const studentItems = document.querySelectorAll('li.student-item');
//a const used to create groups of 10 students or less.
const numOfBtnLinks = Math.ceil(studentItems.length/10);
const div = document.querySelector('div.page');


//function to controll how many students are listed at the opening of the page.
  for (let i = 0; i < studentItems.length; i += 1) {
    let li = studentItems[i];
        if (i <= 9){
        li.style.display = '';
      }else{
        li.style.display = 'none';
        }
      }

/***
   Creates the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/

function appendPageLinks (){
  const ulPagination = document.createElement("ul");
  ulPagination.className = 'pagination';
  div.appendChild(ulPagination);


  for (let i = 1; i <= numOfBtnLinks ; i++){
    const li = document.createElement("li");
    li.className = 'pagination';
    const anchor = document.createElement("a");
    anchor.className = 'pagination';
    anchor.textContent = [i];
    ulPagination.appendChild(li);
    li.appendChild(anchor);
    if(i === 1){
      anchor.className = "active";
      }
    }
}
appendPageLinks ();

/***
EventListener allowing the Dynamic pagination buttons to helping users to see the next group of students while also changing the status of the current button to 'active'.
***/
const anchorUl = document.querySelector('ul.pagination');
anchorUl.addEventListener('click', (e) => {
  const anchorElement = e.target.textContent;
  const anchorNumber =  parseInt(anchorElement);
  const  pageBtn = document.getElementsByTagName('a');

//displays the next group of students depending on button clicked.
    for (let i = 0; i < studentItems.length; i += 1) {
      const maxNum = (anchorNumber*10)-1;
      const lowNum = (maxNum-9);
      let li = studentItems[i];
        if ( i >= lowNum && i<=maxNum){
        li.style.display = '';
        }else{
        li.style.display = 'none';
        }
      }
//loop for changing the status of the buttons to 'active'.
    for(let j = 0; j < pageBtn.length; j += 1) {
                      pageBtn[j].className = "";
                    }
      e.target.className = 'active';
});
