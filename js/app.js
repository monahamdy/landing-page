/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navBar=document.getElementById("navbar__list");
const sections=document.querySelectorAll("section");
const links = document.querySelectorAll(".navbar__menu a")

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function createNavBarList() {

  // looping over all sections
  for( section of sections){
    listItem=document.createElement("li");
    const secID = section.id;
    const secDataNav = section.dataset.nav;

    listItem.innerHTML = `<li><a class="menu__link" href="#${secID}">${secDataNav}</a></li>`;
    navBar.appendChild(listItem);

  }

}

createNavBarList();
// * End Helper Functions
// * Begin Main Functions
// * 
// */
  

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
   
// Set sections as active


/**
 * End Main Functions
 * Begin Events
 * 
*/

// const links = document.querySelectorAll(".navbar__menu a")

function activationSec(){
  sections.forEach(section =>{
    const elemTop = section.getBoundingClientRect().top;
    if (elemTop > 0 && elemTop > 260) {
      //add // add the active class
      section.classList.add('your-active-class');
    }
    //loop over links  x
    links.forEach (x =>{
      if (x) {
        //add // add the active class
        x.classList.add('your-active-class');
    }
      else {
      //remove active link
      x.classList.remove('your-active-class');
    }
  })
})
}
window.addEventListener('scroll' , activationSec);
//scroll window 

// window.onscroll=() => {
  
//   links = document.querySelectorAll('.navbar__menu a');
//   links.forEach(() => {
//     var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     SVGTextPositioningElement;
//     console.log(scrollTop);
//   });
//   // scrollWindow();
//   /**
//   * End Main Functions
//   * Begin Events
//   *
//   */
// }

// scrollWindow();

/**
* End Main Functions
* Begin Events
* 
*/




