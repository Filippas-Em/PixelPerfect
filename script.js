const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
})


// scroll animations

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
    });
});

//selecting elements to be animated
const hiddenElements = document.querySelectorAll('.hidden');
const hiddenElementsLeft = document.querySelectorAll('.hiddenLeft');
const hiddenElementsFade = document.querySelectorAll('.hiddenFade');

hiddenElements.forEach((el) => observer.observe(el));
hiddenElementsLeft.forEach((el) => observer.observe(el));
hiddenElementsFade.forEach((el) => observer.observe(el));



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const offset = targetElement.getBoundingClientRect().top + window.pageYOffset;
            
            const adjustedOffset = offset - document.querySelector('nav').offsetHeight;
            
            window.scrollTo({
                top: adjustedOffset,
                behavior: 'smooth'
            });
        }
    });
});



var navbar = document.getElementById('navbar');
var section1 = document.getElementById('services');
var section1Top = section1.offsetTop; // Get the top position of section1 from the top of the viewport
var isSticky = false;

window.addEventListener('scroll', function() {
  // Check if the scroll position is greater than or equal to the top of section1
  if (window.scrollY >= section1Top && !isSticky) {
    navbar.classList.add('sticky'); // Add the sticky class
    isSticky = true; // Set isSticky to true to indicate that navbar is sticky
  } else if (window.scrollY < section1Top && isSticky) {
    navbar.classList.remove('sticky'); // Remove the sticky class
    isSticky = false; // Set isSticky to false to indicate that navbar is no longer sticky
  }
});


var scrollTopLink = document.getElementById('top');

scrollTopLink.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default anchor behavior (scrolling to the top of the page)

  // Scroll to the top of the page
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scrolling behavior
  });
});


var mobileNav = document.getElementById('mobileNav');
var sectionOne = document.getElementById('services');
var sectionOneTop = sectionOne.offsetTop;
var isMobileNavSticky = false;

window.addEventListener('scroll', function() {
  // Check if the scroll position is greater than or equal to the top of section1
  if (window.scrollY >= sectionOneTop && !isMobileNavSticky) {
    mobileNav.classList.add('sticky'); // Add the sticky class for mobile navbar
    isMobileNavSticky = true; // Set isMobileNavSticky to true to indicate that navbar is sticky
  } else if (window.scrollY < sectionOneTop && isMobileNavSticky) {
    mobileNav.classList.remove('sticky'); // Remove the sticky class for mobile navbar
    isMobileNavSticky = false; // Set isMobileNavSticky to false to indicate that navbar is no longer sticky
  }
});