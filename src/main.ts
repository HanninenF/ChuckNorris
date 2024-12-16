import "./style.css";

const url = "https://api.chucknorris.io/jokes/random?category=";

const jokesByCategory = [
  "animal",
  "career",
  "celebrity",
  "dev",
  "explicit",
  "fashion",
  "food",
  "history",
  "money",
  "movie",
  "music",
  "political",
  "religion",
  "science",
  "sport",
  "travel",
] as const;

type AllowedCategories = (typeof jokesByCategory)[number];
const category: AllowedCategories = "explicit";

const getRandomJoke = async (): Promise<string> => {
  const response = await fetch(url + category);
  const data: { value: string } = await response.json();
  return data.value;
};

const displayJokeDropdown = async () => {
  const sectionElement = document.querySelector("#middle") as HTMLElement;
  const h2Element = document.createElement("h2") as HTMLHeadElement;
  h2Element.textContent = "Get Chuck Norris Jokes By Category";
  const form = document.createElement("form") as HTMLFormElement;
  form.id = "category-form";
  form.action = "";
  const labelElement = document.createElement("label") as HTMLLabelElement;
  labelElement.htmlFor = "dropdown-menu";
  labelElement.textContent = "Category";
  const selectElement = document.createElement("select") as HTMLSelectElement;
  selectElement.name = "dropdown-menu";
  selectElement.id = "dropdown-menu";
  selectElement.setAttribute("required", "true");
  sectionElement.appendChild(h2Element);
  sectionElement.appendChild(form);
  form.appendChild(labelElement);
  labelElement.appendChild(selectElement);

  const optionPlaceholder = document.createElement(
    "option"
  ) as HTMLOptionElement;
  optionPlaceholder.value = "";
  optionPlaceholder.setAttribute("disabled", "true");
  optionPlaceholder.setAttribute("selected", "true");
  optionPlaceholder.textContent = "-- Select a category --";
  selectElement.appendChild(optionPlaceholder);

  jokesByCategory.forEach((category) => {
    const optionElement = document.createElement("option") as HTMLOptionElement;
    optionElement.value = category;
    optionElement.textContent = category;
    selectElement.appendChild(optionElement);
  });
};

displayJokeDropdown();

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
