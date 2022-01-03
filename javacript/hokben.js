const nav = document.getElementById("nav");

window.addEventListener("scroll", function () {
  scrollposition = window.scrollY;

  if (scrollposition >= 60) {
    nav.classList.add("nav-dark");
  } else if (this.scrollposition <= 60) {
    nav.classList.remove("nav-dark");
  }
});

const hero = ["Ciater Tanggerang"];
let count = 0;
let txtIndex = 0;
let currentTxt = "";
let words = "";

(function ngetik() {
  if (count == hero.length) {
    count = 0;
  }

  currentTxt = hero[count];

  words = currentTxt.slice(0, ++txtIndex);
  document.querySelector(".efek-ngetik").textContent = words;

  if (words.length == currentTxt.length) {
    count++;
    txtIndex = 0;
  }
  setTimeout(ngetik, 700);
})();