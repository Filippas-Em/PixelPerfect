const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
})


// scroll animations

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (window.innerWidth > 768) { // Check if the screen width is greater than 768px
      if (entry.isIntersecting) {
          entry.target.classList.add('show');
      } 
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


document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");
  const submitButton = document.getElementById("submitButton");
  const originalButtonValue = submitButton.value;
  const originalButtonColor = window.getComputedStyle(submitButton).getPropertyValue('background-color');


  form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent default form submission behavior

      // Get form data
      const formData = new FormData(form);
      
      // Convert FormData to JSON object
      const jsonData = {};
      formData.forEach((value, key) => {
          jsonData[key] = value;
      });

      console.log(jsonData); // Log the form data

      // Send form data to server using fetch
      fetch("http://localhost:3000/send-email", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(jsonData)
      })
      .then(response => {
          if (response.ok) {
              console.log("Email sent successfully");
              // Optionally, display a success message to the user
              submitButton.style.backgroundColor = "green";
              submitButton.value = "Email Sent!";             // Reset button style and text after 5 seconds
                setTimeout(() => {
                    submitButton.style.backgroundColor = originalButtonColor;
                    submitButton.value = originalButtonValue;
                }, 5000);
              form.reset();
          } else {
              console.error("Failed to send email");
              // Optionally, display an error message to the user
          }
      })
      .catch(error => {
          console.error("Error:", error);
          // Optionally, display an error message to the user
      });
  });
});


document.addEventListener("DOMContentLoaded", function() {
  const inputs = document.querySelectorAll('.form-group input, .form-group textarea');

  inputs.forEach(input => {
      const label = input.nextElementSibling;

      if (input.value) {
          label.style.transform = "translateY(-20px)";
          label.style.fontSize = "12px";
          label.style.color = "black";
      }

      input.addEventListener('focus', function() {
          label.style.transform = "translateY(-30px)";
          label.style.fontSize = "15px";
          label.style.color = "black";
      });

      input.addEventListener('blur', function() {
          if (!this.value) {
              label.style.transform = "translateY(0px)";
              label.style.fontSize = "16px";
              label.style.color = "grey";
          }
      });
  });
});
