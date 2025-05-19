import { getQuote } from "./api.js";

// DOM Elements
const appContainer = document.querySelector(".app-container");

// Functions
export function renderQuote(quote) {
  appContainer.innerHTML = "";

  const html = `<h1>Quotes Generator</h1>
        <blockquote class="quote-text">${quote.text}</blockquote>
        <em>${quote.author}</em>
        <div class="actions">
            <button class="generate-button">Generate Quote</button>
            <button class="copy-button"><i class="fa-solid fa-copy"></i></button>
        </div>`;

  appContainer.insertAdjacentHTML("afterbegin", html);

  const newGenerateBtn = document.querySelector(".generate-button");
  const copyBtn = document.querySelector(".copy-button");
  const quoteText = document.querySelector(".quote-text");

  newGenerateBtn.addEventListener("click", getQuote);

  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.textContent).then(() => {
      alert("Quote copied to clipboard!");
    });
  });
}

const initialGenerateBtn = document.querySelector(".generate-button");
if (initialGenerateBtn) {
  initialGenerateBtn.addEventListener("click", getQuote);
}
