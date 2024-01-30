const baseURL = "httpsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss://www.themealdb.com/api/json/v1/1/";

// async function getMealById (id) {
//   const response = await fetch(`${baseURL}lookup.php?i=${id}`);
//   const data = await response.json();
//   console.log(data);
//   return data;
// };

// const getMealByFirstLetter = async (letter) => {
//   const response = await fetch(`${baseURL}search.php?f=${letter}`);
//   const data = await response.json();
//   console.log(data);
//   return data;
// };

// const getMealByName = async (name) => {
//   const response = await fetch(`${baseURL}search.php?s=${name}`);
//   const data = await response.json();
//   console.log(data);
//   return data;
// };

const getRandomMeal = async () => {
  const response = await fetch(`${baseURL}random.php`);
  const data = await response.json();
  console.log(data);
  return data;
};

const getAllMealCategories = async () => {
  const response = await fetch(`${baseURL}categories.php`);
  const data = await response.json();
  console.log(data);
  return data;
};

const getAllMealArea = async () => {
  const response = await fetch(`${baseURL}list.php?a=list`);
  const data = await response.json();
  console.log(data);
  return data;
};

const getAllMealIngredients = async () => {
  const response = await fetch(`${baseURL}list.php?i=list`);
  const data = await response.json();
  console.log(data);
  return data;
};

const getAllMealsByIngredient = async (ingredient) => {
  const response = await fetch(`${baseURL}filter.php?i=${ingredient}`);
  const data = await response.json();
  console.log(data);
  return data;
};

const getAllMealsByArea = async (area) => {
  const response = await fetch(`${baseURL}filter.php?a=${area}`);
  const data = await response.json();
  console.log(data);
  return data;
};

const getAllMealsByCategory = async (category) => {
  const response = await fetch(`${baseURL}filter.php?c=${category}`);
  const data = await response.json();
  console.log(data);
  return data;
};

const getThumbnailImage = (imageURL) => {
  return `${imageURL}/preview`;
};

const getIngredientImage = (ingredient) => {
  return `https://www.themealdb.com/images/ingredients/${ingredient}.png`;
};

const getIngredientImagePreview = (ingredient) => {
  return `https://www.themealdb.com/images/ingredients/${ingredient}-Small.png`;
};
