const quoteElement = document.querySelector(".quote");
const button = document.querySelector(".header__btn");

function updateQuote() {
  fetch("https://se-quotes-api.onrender.com/v1/quotes/random")
    .then((res) => res.json())
    .then((data) => {
      quoteElement.textContent = data.quote;
    });
}

button.addEventListener("click", updateQuote);
