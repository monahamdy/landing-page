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
const offset = (section) => {
  return(section.getBoundingClientRect().top);
};

// add the active class
function add(active, section) {
  if (active) {
    section.classList.add('your-active-class');
  };
}
// remove the active class
function remove(section) {
  section.classList.remove('your-active-class');
}
// function for activing sections 
function secActive() {
  sections.forEach(function (section) {
    const elem = offset(section);
    inviewPort = function () {
      return elem < 160 && elem >= -150;
    };
    remove(section);
    add(inviewPort(), section);
  });
}
window.addEventListener('scroll' , secActive);

// scroll window
window.onscroll=() => {
  
  links = document.querySelectorAll('.navbar__menu a');
  links.forEach(() => {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    SVGTextPositioningElement;
    console.log(scrollTop);
  });
  // scrollWindow();
  /**
  * End Main Functions
  * Begin Events
  *
  */
}

// scrollWindow();

/**
* End Main Functions
* Begin Events
* 
*/











