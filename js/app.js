
//Define  Variables

const navBar = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

// check which element is active
function checkActive() {
    maximumSection = sections[0];
    minimumVal = 1000500;
    for (i of sections) {
        let bounding = i.getBoundingClientRect();
        if (bounding.top > -500 & bounding.top < minimumVal) {
            minimumVal = bounding.top;
            maximumSection = i;
        };
    };
    return maximumSection;
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
const creatNav=()=>{
  let x='';

  sections.forEach((section, i) => {
    ID=section.id;
    dataNav=section.dataset.nav;
    x+=`<li><a class="menu__link" href="#${ID}"> ${dataNav}</a></li>`;

  });

  navBar.innerHTML=x;
};
creatNav();


//add active list
const add_Active=(conditional, section)=>{
  if(conditional)
  {
    section.classList.add('your-active-class');
    section.style.cssText = "background-color:#8FBC8F;";
  };
};

//removing remove-active list
const remove_Active=(section)=>{
  section.classList.remove('your-active-class');
  section.style.cssText = "background-color:linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%);";
};


// Add class 'add-Active' to section when near top of viewport
const pos = (section)=>{
  return Math.round(section.getBoundingClientRect().top);
};

const activateSection=()=>{
  sections.forEach((section, i) => {
    elementPos=pos(section);
    inViewPort=()=> elementPos<250 && elementPos>=-250;
    remove_Active(section);
    add_Active(inViewPort(),section);
  });

};

  window.addEventListener('scroll', activateSection);

// Scroll to section on link click

const scroll=()=>{
  links = document.querySelectorAll('.navbar__menu a');
  links.forEach((link, i) => {
    link.addEventListener('click',()=>{
    j=0;
    while(j<sections)
      {
      sections[j].addEventListener("click",sectionScroll(link));
      j++;
      }
    });

  });

};

scroll();
