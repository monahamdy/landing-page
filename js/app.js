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
const navBarList=document.getElementById("navbar__list");
const sections=Array.from(document.querySelectorAll("section"));


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function createListItems(){
    for (section of sections) {
        //create item to each one 
        listItem=document.createElement("li");
        //Add item text
     listItem.innerHTML = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a></li>`;

        //ADD listItem to navbarList
        navBarList.appendChild(listItem);

    }
}
createListItems();
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
window.onscroll = function() {
	document.querySelectorAll("section").forEach(function(active) {
    let activeLink = navBar.querySelector(`[data-nav=${active.id}]`);
	if(active.getBoundingClientRect().top >= -300 && active.getBoundingClientRect().top <= 110){

    active.classList.add("your-active-class");
    activeLink.classList.add("active-link");

    }
    else{
         active.classList.remove("your-active-class");
         activeLink.classList.remove("active-link");
    }
	});
}

/**
 * End Main Functions
 * Begin Events
 * 
*/
// Scroll to section on link click

navBar.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.dataset.nav) {
      document
        .getElementById(`${event.target.dataset.nav}`)
        .scrollIntoView({ behavior:"smooth"});
       setTimeout(() => {
        location.hash = `${event.target.dataset.nav}`;
      }, 150);
    }
  });
  


// Build menu 



