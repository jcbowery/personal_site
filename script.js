const greetings = {
    English: "Hello",
    Spanish: "Hola",
    German: "Hallo",
    French: "Bonjour",
    Japanese: "こんにちは", // Kon'nichiwa
    Korean: "안녕하세요",  // Annyeonghaseyo
    Ukrainian: "Привіт" // Pryvit
};

const greetingElement = document.getElementById("greeting");
const languages = Object.keys(greetings);
let currentLanguageIndex = 0;

function typeText(text, callback) {
    let index = 0;
    greetingElement.textContent = "";
    const interval = setInterval(() => {
        greetingElement.textContent += text[index];
        index++;
        if (index === text.length) {
            clearInterval(interval);
            setTimeout(callback, 1500); // Pause before erasing
        }
    }, 100); // Typing speed
}

function eraseText(callback) {
    const interval = setInterval(() => {
        greetingElement.textContent = greetingElement.textContent.slice(0, -1);
        if (greetingElement.textContent.length === 0) {
            clearInterval(interval);
            callback();
        }
    }, 50); // Erasing speed
}

function rotateGreetings() {
    const language = languages[currentLanguageIndex];
    const text = greetings[language];
    typeText(`${text}`, () => {
        eraseText(() => {
            currentLanguageIndex = (currentLanguageIndex + 1) % languages.length;
            rotateGreetings();
        });
    });
}

// Start the animation
rotateGreetings();