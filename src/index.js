function generateQuote(event) {
  event.preventDefault();
  let quoteElement = document.querySelector("#quote");

  new Typewriter("#quote", {
    strings: "You have to believe in yourself when no one else does.",
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}
let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
