const url = "";

const getRandomJoke = async (): Promise<string> => {
  const response = await fetch(url + "random");
  const data: { value: string } = await response.json();

  return data.value;
};

console.log(getRandomJoke);

const displayJoke = async (): Promise<void> => {
  const divElement = document.querySelector("#joke") as HTMLElement;
  const pElement = document.createElement("p") as HTMLParagraphElement;

  pElement.textContent = await getRandomJoke();
  divElement.appendChild(pElement);
};

displayJoke();
