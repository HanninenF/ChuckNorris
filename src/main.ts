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

const category: AllowedCategories = "food";
const getRandomJoke = async (): Promise<string> => {
  const response = await fetch(url + category);
  const data: { value: string } = await response.json();

  return data.value;
};

console.log(getRandomJoke());

const displayJoke = async (): Promise<void> => {
  const divElement = document.querySelector("#joke") as HTMLElement;
  const pElement = document.createElement("p") as HTMLParagraphElement;

  pElement.textContent = await getRandomJoke();
  divElement.appendChild(pElement);
};

displayJoke();

[
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
];

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
