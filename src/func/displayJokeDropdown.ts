import { jokesByCategory } from "../AllowedCategories";
import {
  h2Element,
  form,
  labelElement,
  selectElement,
  sectionElement,
  optionPlaceholder,
  jokeResult,
  lowerSection,
  button,
} from "../DOMElement";

export const displayJokeDropdown = async () => {
  h2Element.textContent = "Get Chuck Norris Jokes By Category";

  form.id = "category-form";
  form.action = "";

  labelElement.htmlFor = "dropdown-menu";
  labelElement.textContent = "Category";

  selectElement.name = "dropdown-menu";
  selectElement.id = "dropdown-menu";
  selectElement.setAttribute("required", "true");
  sectionElement.appendChild(h2Element);
  sectionElement.appendChild(form);
  form.appendChild(labelElement);
  labelElement.appendChild(selectElement);

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

  button.type = "submit";
  button.textContent = "Get Joke";
  form.appendChild(button);
  // Lägg till plats för skämt

  jokeResult.id = "joke-result";
  lowerSection.appendChild(jokeResult);
};
