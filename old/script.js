// all elements
const hamburgers = document.querySelectorAll('.hamburger');
const menuToggle = document.getElementById('menu-toggle')
const menuDropdown = document.getElementById('menu-dropdown')

// Add a click event listener to each hamburger
hamburgers.forEach(hamburger => {
  hamburger.addEventListener('click', () => {
    // Find all child elements with the class 'hamburger__bar' inside the clicked hamburger
    const bars = hamburger.querySelectorAll('.hamburger__bar');

    // Toggle the 'hamburger__bar--change' class on each bar
    bars.forEach(bar => bar.classList.toggle('hamburger__bar--change'));
  });
});


menuToggle.addEventListener('click', () => {
  menuDropdown.classList.toggle('dropdown-menu--active')
});


const messages = [
  "Hello",
  "Hola",
  "Bonjour",
  "Hallo",
  "Ciao",
  "こんにちは", // Japanese
  "你好", // Chinese
  "안녕하세요", // Korean
  "Olá", // Portuguese
  "Добрий день" // Ukrainian
];

const textElement = document.getElementById('animatedText');
let currentMessageIndex = 0;

function showNextMessage() {
  textElement.style.animation = 'none'; // Reset animation
  void textElement.offsetWidth; // Trigger reflow

  textElement.textContent = messages[currentMessageIndex];
  textElement.style.animation = 'typing 2s steps(20) forwards, blink 0.5s step-end infinite';

  currentMessageIndex = (currentMessageIndex + 1) % messages.length;

  setTimeout(showNextMessage, 3000); // Wait for animation to complete before showing the next message
}

showNextMessage();