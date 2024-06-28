let greatingEl = document.getElementById("greating");

const career = [
  " Front-End Developer",
  " Backend-Developer",
  " Full-Stack Developer",
];
let careerIndex = 0;
let characterIndex = 0;
updateText();
function updateText() {
  characterIndex++;
  greatingEl.innerHTML = `<h1> <i>Hello</br> I am ${
    career[careerIndex].slice(0, 1) === "I" ? "an" : "a"
  }${career[careerIndex].slice(0, characterIndex)}</i></h1>`;

  if (characterIndex === career[careerIndex].length) {
    careerIndex++;
    characterIndex = 0;
  }
  if (careerIndex === career.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 100);
}

const bodyEl = document.body;
const derkerEl = document.querySelector(".darker-mode");
derkerEl.addEventListener("click", () => {
  bodyEl.classList.toggle("darker");
});
const submitEl = document.getElementById("submitData");
submitEl.addEventListener("click", () => {
  submitEl.innerHTML = "Sending...";
  submitEl.style.transform = "scale(1.1)";
  setTimeout(() => {
    submitEl.innerHTML = "Send Message";
    submitEl.style.transform = "scale(1)";
  }, 2000);
});
