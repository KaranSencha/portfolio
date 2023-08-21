// Animation Typing
var typed = new Typed("#element", {
  strings: ["Web Developer.", "UI/UX Designer.", "Web Designer."],
  typeSpeed: 300,
  backSpeed: 200,
  loop: true,
  loopCount: Infinity,
  showCursor: true,
  backDelay: 500,
});

// Toggle Theme
const themeButton = document.getElementById("themeButton");
const sunIcon = document.getElementById("sunIcon");
const moonIcon = document.getElementById("moonIcon");
const body = document.body;

themeButton.addEventListener("click", function () {
  body.classList.toggle("dark-theme");

  if (moonIcon.style.display !== "none") {
    moonIcon.style.display = "none";
    sunIcon.style.display = "block";
  } else {
    moonIcon.style.display = "block";
    sunIcon.style.display = "none";
  }
});

// Add Active Class
// Get all the navigation links
const navLinks = document.querySelectorAll("nav a");

// Add click event listener to each navigation link
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    // Prevent the default anchor link behavior
    event.preventDefault();

    // Get the target section ID from the link's href attribute
    const targetId = link.getAttribute("href");

    // Scroll smoothly to the target section
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Add the 'active' class to the clicked link
    navLinks.forEach((navLink) => {
      navLink.classList.remove("active");
    });
    link.classList.add("active");
  });
});

// Add scroll event listener to update active link on scroll
window.addEventListener("scroll", () => {
  const currentPosition = window.pageYOffset + 70;

  // Remove 'active' class from all navigation links
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  // Find the section currently in view and add 'active' class to its corresponding navigation link
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (currentPosition >= sectionTop && currentPosition < sectionTop + sectionHeight) {
      const targetId = "#" + section.getAttribute("id");
      navLinks.forEach((link) => {
        if (link.getAttribute("href") === targetId) {
          link.classList.add("active");
        }
      });
    }
  });
});

// Smooth Faqs
let currentAnswerId = null;

function toggleAnswer(id) {
  const answerElement = document.getElementById(`faq-answer-${id}`);
  if (currentAnswerId !== id) {
    hideCurrentAnswer();
    // Get the scroll height of the answer content and set it as the max-height
    answerElement.style.maxHeight = answerElement.scrollHeight + "px";
    currentAnswerId = id;
  } else {
    hideCurrentAnswer();
  }
}

function hideCurrentAnswer() {
  if (currentAnswerId !== null) {
    const currentAnswerElement = document.getElementById(`faq-answer-${currentAnswerId}`);
    currentAnswerElement.style.maxHeight = null;
    currentAnswerId = null;
  }
}

// Mouse Follower
document.addEventListener("DOMContentLoaded", function () {
  const follower = document.getElementById("follower");

  document.addEventListener("mousemove", function (event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Update the position of the circle relative to the scroll position
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    follower.style.left = mouseX + scrollX + "px";
    follower.style.top = mouseY + scrollY + "px";
  });
});




