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

// Cursor Follower 
 const cursor = new MouseFollower({
    el: null,
    container: document.body,
    className: 'mf-cursor',
    innerClassName: 'mf-cursor-inner',
    textClassName: 'mf-cursor-text',
    mediaClassName: 'mf-cursor-media',
    mediaBoxClassName: 'mf-cursor-media-box',
    iconSvgClassName: 'mf-svgsprite',
    iconSvgNamePrefix: '-',
    iconSvgSrc: '',
    dataAttr: 'cursor',
    hiddenState: '-hidden',
    textState: '-text',
    iconState: '-icon',
    activeState: '-active',
    mediaState: '-media',
    stateDetection: {
        '-pointer': 'a,button',
        '-hidden': 'iframe'
    },
    visible: true,
    visibleOnState: false,
    speed: 0.55,
    ease: 'expo.out',
    overwrite: true,
    skewing: 0,
    skewingText: 2,
    skewingIcon: 2,
    skewingMedia: 2,
    skewingDelta: 0.001,
    skewingDeltaMax: 0.15,
    stickDelta: 0.15,
    showTimeout: 20,
    hideOnLeave: true,
    hideTimeout: 300,
    hideMediaTimeout: 300
});


// Show/Hide menu
const menuIcon = document.getElementById("menuIcon");
const menuItem = document.getElementById("menuItem");
menuIcon.addEventListener("click", function () {
  menuIcon.classList.toggle("menu-show");
  menuItem.classList.toggle("menu-show-item");
});

menuItem.addEventListener("click", function () {
  menuIcon.classList.toggle("menu-show");
  menuItem.classList.toggle("menu-show-item");
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
8;

// Form Submit Page
const form = document.querySelector("form");
const thankYouPage = document.querySelector(".thank-you");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  form.style.display = "none";
  thankYouPage.style.display = "block";
});

// update copyright year automatically
function updateCopyrightYear() {
  copyrightYear = document.getElementById("copyrightYear");
  copyrightYear.innerText = new Date().getFullYear();
}
updateCopyrightYear();
