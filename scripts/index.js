// Function to refresh the displayed time every 5 seconds
function refreshTime() {
  let time = document.getElementById("time");
  let date = new Date();
  time.textContent = date;
}
setInterval(refreshTime, 5000);  // Calls refreshTime every 5 seconds

// Function to handle scrolling and display a "Go to Top" button
window.onload = function ondocload() {
  var mybutton = document.getElementById("goToTopBtn");
  window.onscroll = function () {
    scrollFunction();
  };

  // Function to toggle the visibility of the "Go to Top" button based on scroll position
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";  // Display the button when scrolled down
    } else {
      mybutton.style.display = "none";   // Hide the button when close to the top
    }
  }
};

// Function to scroll the page to the top
function scrollUp() {
  document.body.scrollTop = 0;            // For Safari
  document.documentElement.scrollTop = 0;  // For Chrome, Firefox, IE, Opera
}

// Function to handle form submission
document.getElementById("contact-me").onsubmit = () => {
  let form = document.getElementById("contact-me");

  // Validation checks for form inputs
  if (
    form.elements.name.value === "" &&
    form.elements.email.value === "" &&
    form.elements.message.value === ""
  ) {
    alert("Please enter information before submitting your form!");
  } else if (form.elements.email.value === "") {
    alert("Your email is required for this form!");
  } else if (form.elements.message.value === "") {
    alert("A message is required for this form!");
  } else {
    // Sending form data using emailjs library
    var parameters = {
      from_name: form.elements.name.value,
      email_id: form.elements.email.value,
      message: form.elements.message.value,
    };
    emailjs.send("service_601l51h", "template_h287l3c", parameters).then(
      function (response) {
        console.log("success", response.status, response.text);
      },
      function (error) {
        console.log("failed", error);
      }
    );
    alert("Message sent!");
    form.elements.name.value = "";
    form.elements.email.value = "";
    form.elements.message.value = "";
  }
}

// Get references to various elements
const colorButton = document.getElementById('color');
const body = document.body;
const navbarItems = document.querySelectorAll('.navbar-nav .nav-item');  // Select all navigation list items
const aboutMeSection = document.querySelector('.about-me');
const collapseOne = document.getElementById('flush-collapseOne');
const collapseTwo = document.getElementById('flush-collapseTwo');
const collapseThree = document.getElementById('flush-collapseThree');

// Function to toggle dark mode and adjust visibility of various elements
function toggleDarkMode() {
  body.classList.toggle('dark-mode');        // Toggle dark mode class on body
  aboutMeSection.classList.toggle('visible'); // Toggle visibility of about-me section
  collapseOne.classList.toggle('visible');    // Toggle visibility of collapsible sections
  collapseTwo.classList.toggle('visible');
  collapseThree.classList.toggle('visible');
  navbarItems.forEach(item => {
    item.classList.toggle('navigation-item-dark');  // Toggle visibility of navbar list items
  });
}

// Add click event listener to the colorButton to toggle dark mode
colorButton.addEventListener('click', toggleDarkMode);