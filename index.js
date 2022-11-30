let homescoreEl = document.getElementById("home-score")
let guestscoreEl = document.getElementById("guest-score")

let homescorebtn1 = document.getElementById("home-score-1")
let homescorebtn2 = document.getElementById("home-score-2")
let homescorebtn3 = document.getElementById("home-score-3")
let resethomescore = document.getElementById("reset-home-score")

let guestscorebtn1 = document.getElementById("guest-score-1")
let guestscorebtn2 = document.getElementById("guest-score-2")
let guestscorebtn3 = document.getElementById("guest-score-3")
let resetguestscore = document.getElementById("reset-guest-score")

homescorebtn1.addEventListener("click", function() {
    homescoreEl.textContent++;
});

homescorebtn2.addEventListener("click", function() {
    homescoreEl.textContent = Number(homescoreEl.textContent) + 2;
});

homescorebtn3.addEventListener("click", function() {
    homescoreEl.textContent = Number(homescoreEl.textContent) + 3;
});

resethomescore.addEventListener("click", function() {
    homescoreEl.textContent = 0;
});

guestscorebtn1.addEventListener("click", function() {
    guestscoreEl.textContent++;
});

guestscorebtn2.addEventListener("click", function() {
    guestscoreEl.textContent = Number(guestscoreEl.textContent) + 2;
});

guestscorebtn3.addEventListener("click", function() {
    guestscoreEl.textContent = Number(guestscoreEl.textContent) + 3;
});

resetguestscore.addEventListener("click", function() {
    guestscoreEl.textContent = 0;
});

    
  

