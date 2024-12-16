import { AllowedCategories } from "./AllowedCategories";
import { displayJokeDropdown } from "./func/displayJokeDropdown";
import { form, selectElement, jokeResult } from "./DOMElement";
import { getRandomJoke } from "./func/getRandomJoke";
import "./style.css";

export const url = "https://api.chucknorris.io/jokes/random?category=";

displayJokeDropdown();

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (selectElement.value === "") {
    alert("please select a category");
  } else {
    const selectedCategory = selectElement.value as AllowedCategories;
    const joke = await getRandomJoke(selectedCategory);
    jokeResult.textContent = joke;
  }
});

/* const url = "https://api.chucknorris.io/jokes/";
const getRandomJoke = async (): Promise<string> => {
  const response = await fetch(url + "random");
  const data: { value: string } = await response.json();
  return data.value;
};

const displayJoke = async () => {
  const divElement = document.querySelector("#joke") as HTMLElement;
  const pElement = document.createElement("p") as HTMLElement;
  const joke = await getRandomJoke(); // Vänta på skämtet
  pElement.textContent = joke; // Tilldela texten
  divElement.appendChild(pElement); // Lägg till i DOM:en
};

displayJoke(); */
