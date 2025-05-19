import { renderQuote } from "./main.js";

export async function getQuote() {
  try {
    const response = await fetch("https://thequoteshub.com/api/");
    const data = await response.json();
    console.log(data);

    const quote = {
      text: data.text,
      author: data.author,
    };

    renderQuote(quote);
  } catch (err) {
    console.error(err);
  }
}
