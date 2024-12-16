import { AllowedCategories } from "../AllowedCategories";
import { url } from "../main";

export const getRandomJoke = async (
  category: AllowedCategories
): Promise<string> => {
  const response = await fetch(url + category);
  const data: { value: string } = await response.json();
  return data.value;
};
