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