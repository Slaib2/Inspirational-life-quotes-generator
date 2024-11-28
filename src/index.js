function displayQuote(response) {
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "66be36afb0bfdbdtc4e9dd41a4603o8c";
  let prompt = `User instrctions:Generate inspirational life quotes about ${instructionsInput.value};`;
  let context =
    "You are an inspirational assistant.You like to inspire others.Your task is to generate a short life quote using.Do not include the author of the quote. Sign off the quote with 'SheCodes AI' and put a related emoji at the end.Please follow the user instructions";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="generating">⏳ Generating a life quote about ${instructionsInput.value}</div>`;
  axios.get(apiURL).then(displayQuote);
}
let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
