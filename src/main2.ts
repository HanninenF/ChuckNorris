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
const category: AllowedCategories = "fashion";

const getRandomJoke = async (): Promise<string> => {
  const response = await fetch(url + category);
  const data: { value: string } = await response.json();
  return data.value;
};

const displayJoke = async () => {
  const divElement = document.querySelector("#joke") as HTMLElement;
  const pElement = document.createElement("p") as HTMLParagraphElement;
  pElement.textContent = await getRandomJoke();
  divElement.appendChild(pElement);
};

displayJoke();
