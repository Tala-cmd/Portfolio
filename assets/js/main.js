/* === SHOW MENU === */
const navMenu= document.getElementById('nav-menu');
const navToggle= document.getElementById('nav-toggle');
const navClose= document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
    })
}

if(navClose){
navClose.addEventListener('click', () => {
navMenu.classList.remove('show-menu')
})
}

//REMOVE MENU MOBILE
const navLink=document.querySelectorAll('.nav__link');

const linkAction = () => {
const navMenu = document.getElementById('nav-menu')
//When we click on each nav__link, we remove the show-menu class
navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener ('click', linkAction));

/* === HEADER SHADOW === */

const shadowHeader = () => {
const header = document.getElementById('header');
 //When the scroll is greater than 50 viewport height, add the shadow-header class 
this.scrollY >= 50? header.classList.add('shadow-header') : header.classList.remove('shadow-header');
}
window.addEventListener('scroll', shadowHeader)

/* === EMAIL JS === */

const contactForm= document.getElementById('contact-form');
const contactMessage= document.getElementById('contact-message');


const sendEmail = (e) =>{
    e.preventDefault()
    
    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_e2lh0ls', 'template_m651ted', '#contact-form', 'bV5I-JCc-ZOrumj7Y')
    
    .then(() => {
    //Show Sent Message
    contactMessage.textContent='Message sent successfully ✓'
    
    //Remove message after 5 seconds
    setTimeout(() =>{
    contactMessage.textContent=''}, 5000)
    }, () =>{
    //Show error message
    contactMessage.textContent= 'Message sending failed (Service error) ✘'
    }
    )
    //Clear input fields
    contactForm.reset()
}

contactForm.addEventListener('submit', sendEmail);

/* === SHOW SCROLL UP === */
const scrollUp = () =>{
    const scrollUp= document.getElementById('scroll-up')
    //When the scroll is higher than 350vh, add the class.
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* === SCROLL SECTIONS ACTIVE LINK === */
// This section determines which page section the user is currently viewing.
const sections= document.querySelectorAll('section[id]');

const scrollActive = () =>{
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive);


/* === DARK LIGHT THEME === */

const themeButton = document.getElementById('theme-button');
const darkTheme= 'dark-theme';
const iconTheme = 'ri-sun-line';

//Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// Get a reference to the image element
const themeImage = document.getElementById('theme-image');

function changeImageBasedOnColorScheme() {
    if (document.body.classList.contains(darkTheme)) {
        // Dark mode detected, switch to dark mode image
        themeImage.src = "assets/img/lang-2-removedbg.png";
    } else {
        // Light mode detected, use the default light mode image
        themeImage.src = "assets/img/lang-1-removedbg.png";
    }
}

// Function to get the currently selected image
function getCurrentImage() {
    return themeImage.src;
}

// Call the function initially to set the correct image
changeImageBasedOnColorScheme();

//We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

//We validate if the user previously chose a topic
if(selectedTheme){
    //If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

//Activate or deactivate the theme manually with the button 
themeButton.addEventListener('click', () =>{
    //Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    //We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
    

    // Call the function to change the image when the theme changes
    changeImageBasedOnColorScheme();
    localStorage.setItem('selected-image', getCurrentImage());
})

// Retrieve and set the image based on local storage on page load
const savedImage = localStorage.getItem('selected-image');
console.log(savedImage);
if (savedImage) {
    themeImage.src = savedImage;
}


/*=== SCROLL REVEAL ANIMATION ===  */ 
const sr= ScrollReveal({
    origin:'top', 
    distance: '60px',
    duration: 2000,
    delay:400,
    //Animations repeat reset: true 
})

sr.reveal(`.home__profile, .about__image, .contact__mail`, {origin: 'right'})
sr.reveal(`.home__name, .home__info, .about__container 
            .section__title-1, .about__info, .contact__social, .contact__data` 
            , {origin: 'left'})
sr.reveal(`.services__card, .projects__card`, {interval: 100})