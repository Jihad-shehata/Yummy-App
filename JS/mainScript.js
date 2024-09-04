/// <reference types="../@types/jquery" />

// Global Selection
let menuBtn = document.querySelector(".sideBar2Menu");
let sideBar2 = document.querySelector(".sideBar2");
let sideBar2Menu = document.querySelector(".sideBar2Menu");
let searchRow = document.querySelector(".searchRow");
let openSearch = document.querySelector(".openSearch");
let searchMealName = document.querySelector(".searchMealName");
let MealFullSearch = document.querySelector(".MealFullSearch");
const baseURL = "https://www.themealdb.com/api/json/v1/1/";
let searchFirstLetter = document.querySelector(".searchFirstLetter");
let categoriesRow = document.querySelector(".categoriesRow");
let categoryOption = document.querySelector(".categoryOption");
let randomMeals = document.querySelector(".randomMeals");
let areaRow = document.querySelector(".araeRow");
let areaOption = document.querySelector(".areaOption");
let selectedAreaRow = document.querySelector(".selectedAreaRow");
let ingredientsRow = document.querySelector(".ingredientsRow");
let ingredientsOption = document.querySelector(".ingredientsOption");
let ingredients = document.querySelector(".ingredients");
let contactOption = document.querySelector(".contactOption");
let contact = document.querySelector(".contact");
let rowDetails = document.querySelector(".rowDetails");
let Recipes = document.querySelector(".Recipes ");
let selectedCategoryRow = document.querySelector(".selectedCategoryRow");
let selectedMealsIngrediantsRow = document.querySelector(
  ".selectedMealsIngrediantsRow"
);
let nameInput = document.querySelector(".nameInput");
let emailInput = document.querySelector(".emailInput");
let ageInput = document.querySelector(".ageInput");
let phoneInput = document.querySelector(".phoneInput");
let passwordInput = document.querySelector(".passwordInput");
let rePasswordInput = document.querySelector(".rePasswordInput11");
let vv;
let selectedArea;
let contact1 = document.querySelector(".contact1");
let submittButton = document.querySelector(".submittButton");
let selectedCategoryRow2 = document.getElementById("#myRow");

//    SideBar Openning and Closing

// make sideBar close at first
sideBarMoving();

// Onpenning && Closing sideBar⁡

sideBar2Menu.addEventListener("click", sideBarMoving);

// SideBar Moving Function

function sideBarMoving() {
  console.log($(".sideBar").outerWidth(true) + "px");
  console.log($(".sideBar").css("margin-left"));

  if ($(".sideBar").css("margin-left") == "0px") {
    // Open
    $(".slideDown1").fadeOut(700);
    setTimeout(() => {
      $(".slideDown2").fadeOut(700);
    }, 300);
    $(".slideDown3").fadeOut(700);
    setTimeout(() => {
      $(".slideDown4").fadeOut(700);
    }, 300);
    $(".slideDown5").fadeOut(700);
    vip.setAttribute("class", "fa-solid fa-bars sideBar2Menu");
    $(".sideBar").animate(
      { "margin-left": -$(".sideBar").outerWidth(true) },
      700
    );
    $(".sideBar2").css({ width: "20%" });

    // Close
  } else {
    vip.setAttribute("class", "fa-solid fa-xmark sideBar2Menu");
    $(".slideDown1").slideDown(700);
    setTimeout(() => {
      $(".slideDown2").slideDown(700);
    }, 300);
    $(".slideDown3").slideDown(700);
    setTimeout(() => {
      $(".slideDown4").slideDown(700);
    }, 300);
    $(".slideDown5").slideDown(700);
    $(".sideBar2").css({ width: "15%" });
    $(".sideBar").animate({ "margin-left": 0 }, 700);
  }
}

// Search Option

openSearch.addEventListener("click", () => {
  $(".Random").css({ display: "none" });
  $(".searchName").css({ display: "block" });
  $(".search").css({ display: "block" });
  $(".category").css({ display: "none" });
  $(".ingredients").css({ display: "none" });
  $(".contact").css({ display: "none" });
  $(".selectedArea").css({ display: "none" });
  $(".mealDetails").css({ display: "none" });
  $(".selectedMealsIngrediants").css({ display: "none" });
  
  searchRow.innerHTML = `<div class="col-md-6">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label text-white searchByName">Search by Meal Name</label>
                        <input type="text" class="form-control w-100 searchMealName" id="exampleInputEmail1 " aria-describedby="emailHelp">
                        <div id="searchHelp" class="form-text text-white fs-6">You need to Know your meal name to can find it</div>
                    </div>
                </div>
                    
                    <div class="col-md-6">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label text-white searchByName">Search by First Letter</label>
                            <input type="text" class="form-control w-100 searchFirstLetter" id="exampleInputEmail1" aria-describedby="emailHelp">
                            <div id="searchHelp" class="form-text text-white fs-6">You need to Know just the first letter of your meal name to find it</div>
                        </div>
                    </div>
                
            </div>`;
  searchMealName = document.querySelector(".searchMealName");
  searchMealName.addEventListener("keyup", searchByName);
  searchFirstLetter = document.querySelector(".searchFirstLetter");
  searchFirstLetter.addEventListener("keyup", searchByFirstLetterr);
});

// Search By Name Function
async function searchByName() {
  $(".searchName").css({ display: "bkock" });
  $(".search").css({ display: "block" });
  $(".category").css({ display: "none" });
  $(".area").css({ display: "none" });
  $(".Random").css({ display: "none" });
  $(".ingredients").css({ display: "none" });
  $(".contact").css({ display: "none" });
  $(".selectedArea").css({ display: "none" });
  $(".mealDetails").css({ display: "none" });
  $(".selectedCategory").css({ display: "none" });
  $(".selectedMealsIngrediants").css({ display: "none" });
  let mealName = searchMealName.value;

  const response = await fetch(`${baseURL}search.php?s=${mealName}`);
  const data = await response.json();
  createMealCards(data, MealFullSearch);
}

// Get Random Meals at First

async function randomMaels() {
  $(".searchName").css({ display: "none" });
  $(".search").css({ display: "none" });
  $(".category").css({ display: "none" });
  $(".area").css({ display: "none" });
  $(".Random").css({ display: "block" });
  $(".ingredients").css({ display: "none" });
  $(".contact").css({ display: "none" });
  $(".selectedArea").css({ display: "none" });
  $(".mealDetails").css({ display: "none" });
  $(".selectedCategory").css({ display: "none" });
  $(".selectedMealsIngrediants").css({ display: "none" });

  let mealName = "";
  const response = await fetch(`${baseURL}search.php?s=${mealName}`);
  const data = await response.json();
  createMealCards(data, randomMeals);
}
randomMaels();

/// Search by first Letter

async function searchByFirstLetterr() {
  $(".searchName").css({ display: "block" });
  $(".search").css({ display: "block" });
  $(".category").css({ display: "none" });
  $(".area").css({ display: "none" });
  $(".Random").css({ display: "none" });
  $(".ingredients").css({ display: "none" });
  $(".contact").css({ display: "none" });
  $(".selectedArea").css({ display: "none" });
  $(".mealDetails").css({ display: "none" });
  $(".selectedCategory").css({ display: "none" });
  $(".selectedMealsIngrediants").css({ display: "none" });
  let mealFirstLetter = searchFirstLetter.value;

  const response = await fetch(`${baseURL}search.php?f=${mealFirstLetter}`);
  const data = await response.json();
  createMealCards(data, MealFullSearch);
}

// Get All Meals Categories

async function getAllMealCategories() {
  $(".Random").css({ display: "none" });
  $(".searchName").css({ display: "none" });
  $(".search").css({ display: "none" });
  $(".category").css({ display: "block" });
  $(".area").css({ display: "none" });
  $(".ingredients").css({ display: "none" });
  $(".contact").css({ display: "none" });
  $(".selectedArea").css({ display: "none" });
  $(".mealDetails").css({ display: "none" });
  $(".selectedCategory").css({ display: "none" });
  $(".selectedMealsIngrediants").css({ display: "none" });
  
  const response = await fetch(`${baseURL}categories.php`);
  const data = await response.json();
  let categoriesCards = "";
  for (let i = 0; i < data.categories.length; i++) {
    let categoryMealImgAPI = data.categories[i].strCategoryThumb;
    let categogyNameAPI = data.categories[i].strCategory;
    let categoryDescAPI = data.categories[i].strCategoryDescription;
    categoriesCards += `<div class="col-md-3 categoryPointer">
                        <div class="caregoryContent position-relative overflow-hidden rounded-2">
                            <img src="${categoryMealImgAPI}" alt="" class="w-100">
                            <div class="categoryLayer position-absolute text-center">
                                <p class="categoryName fs-3 ">${categogyNameAPI}</p>
                                <p class="categoryDescription  ">${categoryDescAPI}</p>
                            </div>
                        </div>
                    </div>`;
  }

  categoriesRow.innerHTML = categoriesCards;
}
categoryOption.addEventListener("click", getAllMealCategories);

// Get All Meals Areas

async function getAllMealArea() {
  $(".area").css({ display: "block" });
  $(".Random").css({ display: "none" });
  $(".searchName").css({ display: "none" });
  $(".search").css({ display: "none" });
  $(".category").css({ display: "none" });
  $(".ingredients").css({ display: "none" });
  $(".contact").css({ display: "none" });
  $(".selectedArea").css({ display: "none" });
  $(".mealDetails").css({ display: "none" });
  $(".selectedCategory").css({ display: "none" });
  $(".selectedMealsIngrediants").css({ display: "none" });
  const response = await fetch(`${baseURL}list.php?a=list`);
  const data = await response.json();
  let areaCards = "";
  for (let i = 0; i < data.meals.length; i++) {
    let areaNameAPI = data.meals[i].strArea;

    areaCards += `<div class="col-md-3 text-center areaSelected">
                        <img src="./Images/areaLogo.PNG" alt="" class="w-50 rounded-2">
                        <p class="fs-4 fw-semibold text-white selectedAreea">${areaNameAPI}</p>
                    </div>`;
  }

  areaRow.innerHTML = areaCards;
  $(".areaSelected").click((e) => {
    if (e.target.tagName === "IMG") {
      selectedArea = $(e.target).next().text();
    } else if (e.target.tagName === "P") {
      selectedArea = $(e.target).text();
    } else {
      selectedArea = $(e.target).children().next().text();
    }
    console.log(selectedArea);
    getAllMealsByArea();
  });
}
areaOption.addEventListener("click", getAllMealArea);

// Get Meals by Selected Area

async function getAllMealsByArea() {
  $(".area").css({ display: "none" });
  $(".Random").css({ display: "none" });
  $(".searchName").css({ display: "none" });
  $(".search").css({ display: "none" });
  $(".category").css({ display: "none" });
  $(".ingredients").css({ display: "none" });
  $(".contact").css({ display: "none" });
  $(".selectedArea").css({ display: "block" });
  $(".mealDetails").css({ display: "none" });
  $(".selectedCategory").css({ display: "none" });
  $(".selectedMealsIngrediants").css({ display: "none" });

  const response = await fetch(`${baseURL}filter.php?a=${selectedArea}`);
  const data = await response.json();
  createMealCards(data, selectedAreaRow);
}

// Get Meals Ingredients

async function getAllMealIngredients() {
  $(".area").css({ display: "none" });
  $(".Random").css({ display: "none" });
  $(".searchName").css({ display: "none" });
  $(".search").css({ display: "none" });
  $(".category").css({ display: "none" });
  $(".ingredients").css({ display: "block" });
  $(".contact").css({ display: "none" });
  $(".selectedArea").css({ display: "none" });
  $(".mealDetails").css({ display: "none" });
  $(".selectedCategory").css({ display: "none" });
  $(".selectedMealsIngrediants").css({ display: "none" });
  let IngradIendsCards = "";
  const response = await fetch(`${baseURL}list.php?i=list`);
  const data = await response.json();
  for (let i = 0; i < data.meals.length && i < 20; i++) {
    let ingrdientMealName = data.meals[i].strIngredient;
    let ingrdientMealDes = data.meals[i].strDescription;
    IngradIendsCards += `<div class="col-md-3 text-center overflow-hidden choosed">
    <img src="./Images/ingredientsLogo.PNG" alt="" class="w-50">
    <h6 class="fs-3 fw-semibold text-white ingrediantPointer">${ingrdientMealName}</h6>
                        <p class="text-white text-center ingrMaxheight">${ingrdientMealDes}</p>
                    </div>`;
  }
  ingredientsRow.innerHTML = IngradIendsCards;
}
ingredientsOption.addEventListener("click", getAllMealIngredients);

// Create Meal Cards
function createMealCards(data, div) {
  let str = "";
  for (let i = 0; i < data.meals.length && i < 20; i++) {
    let selectedImgArea = data.meals[i].strMealThumb;
    let selectedAreaMealName = data.meals[i].strMeal;
    str += `  <div class="col-md-3  card ${i} mb-1" id="myRow">
                        <div class="mealContent position-relative overflow-hidden">
                            <img src="${selectedImgArea}" alt="" class="w-100 mealImgFullSearch rounded-4">
                            <div class="mealLayer position-absolute rounded-4 d-flex justify-content-center align-items-center ">

                                <p class="fs-5 mealfullSearch xx">${selectedAreaMealName}</p>
                                <p class="d-none">${i}</p>

                            </div>
                        </div>
                    </div>`;
  }
  div.innerHTML = str;
  $(".card").click((e) => {
    let id = data.meals[$(e.target).children().next().text()].idMeal;

    console.log(id);
    displayMealDetails(id);
  });
}

// Display MealDetails

async function displayMealDetails(id) {
  $(".area").css({ display: "none" });
  $(".Random").css({ display: "none" });
  $(".searchName").css({ display: "none" });
  $(".search").css({ display: "none" });
  $(".category").css({ display: "none" });
  $(".ingredients").css({ display: "none" });
  $(".contact").css({ display: "none" });
  $(".mealDetails").css({ display: "block" });
  $(".selectedCategory").css({ display: "none" });
  $(".selectedArea").css({ display: "none" });
  $(".mealsSelectedAreaRender").css({ display: "block" });
  $(".selectedMealsIngrediants").css({ display: "none" });

  const response = await fetch(`${baseURL}lookup.php?i=${id}`);
  const data = await response.json();
  let pageContent = "";
  pageContent += `<div class="col-md-4 mb-0">
                        <img src="${data.meals[0].strMealThumb}" class="w-100 rounded-3 " alt="">
                       
                    </div>
                    <div class="col-md-8 text-white">
                        <h1 class="InstructionsDetails ">Instructions</h1>
                        <p>${data.meals[0].strInstructions}
                        </p>
                        <h3><span class="text-danger">Area</span> : ${data.meals[0].strArea}</h3>
                        <h3><span class="text-danger">Category</span>   : ${data.meals[0].strCategory}</h3>
                        <h3><span class="text-danger">Meal Name</span></span> : ${data.meals[0].strMeal}</h3>
                        
                    </div>`;

  const ingredients = [];
  const measures = [];

  for (let i = 1; i <= 10; i++) {
    const ingredient = data.meals[0][`strIngredient${i}`];
    const measure = data.meals[0][`strMeasure${i}`];

    if (ingredient && measure) {
      ingredients.push(ingredient);
      measures.push(measure);
    }
  }
  console.log(ingredients);
  // Concatenate each ingredient with its corresponding measure
  const ingredientMeasurePairs = [];
  for (let i = 0; i < ingredients.length; i++) {
    const pair = `${measures[i]} ${ingredients[i]}`;
    ingredientMeasurePairs.push(pair);
  }
  pageContent += `<h1 class="text-white mt-5 pb-5 text-center text-danger">Recipes :</h1>`;
  for (let x = 0; x < ingredientMeasurePairs.length && x < 8; x++) {
    pageContent += `      
                            <div class="col-md-2 ">
                             
                                <div class="component1 component  rounded-2">
                                    <p class="p-2">${ingredientMeasurePairs[x]}</p>
                                </div>
                    
                    
                            </div>
                            
                        `;
  }
  pageContent += `<div class="row  mt-3 gy-2">
                      <div class="offset-md-5  col-md-1 ">
    <button type="button" class="btn border border-2 border-danger" ><a class="text-decoration-none text-danger hover" href="https://www.youtube.com/results?search_query=
how to cook ${data.meals[0].strMeal}">Youtue</a></button>
</div>
<div class="col-md-1 ">
    <button type="button" class="btn border border-2 border-warning"><a class="text-decoration-none text-warning hover" href="https://www.google.com/search?q= ${data.meals[0].strMeal}
">Source</a></button>
</div>
</div>`;
  rowDetails.innerHTML = pageContent;
}

//Get Category Meals
let mm;
$(".categoriesRow").click((e) => {
 mm=$(e.target).text()
  async function getCategorySelectedMeals() {
    $(".area").css({ display: "none" });
    $(".Random").css({ display: "none" });
    $(".searchName").css({ display: "none" });
    $(".search").css({ display: "none" });
    $(".category").css({ display: "none" });
    $(".ingredients").css({ display: "none" });
    $(".contact").css({ display: "none" });
    $(".mealDetails").css({ display: "none" });
    $(".selectedMealsIngrediants").css({ display: "none" });
    $(".selectedCategory").css({ display: "block" });
   
    const response = await fetch(`${baseURL}filter.php?c=${mm}`);
    const data = await response.json();
    createMealCards(data, selectedCategoryRow);
  }
  getCategorySelectedMeals();
});
let lol;
$(".ingredientsRow").click((e) => {
  lol = $(e.target).text();
 

  async function getIngrediantsSelectedMeals() {
    $(".area").css({ display: "none" });
    $(".Random").css({ display: "none" });
    $(".searchName").css({ display: "none" });
    $(".search").css({ display: "none" });
    $(".category").css({ display: "none" });
    $(".ingredients").css({ display: "none" });
    $(".contact").css({ display: "none" });
    $(".mealDetails").css({ display: "none" });
    $(".selectedCategory").css({ display: "none" });
    $(".selectedMealsIngrediants").css({ display: "block" });

    const response = await fetch(`${baseURL}filter.php?i=${lol}`);
    const data = await response.json();
    createMealCards(data, selectedMealsIngrediantsRow);
  }
  getIngrediantsSelectedMeals();
});

//****************************************************** */
// Get Contact Us
contactOption.addEventListener("click", () => {
  $(".area").css({ display: "none" });
  $(".Random").css({ display: "none" });
  $(".searchName").css({ display: "none" });
  $(".search").css({ display: "none" });
  $(".category").css({ display: "none" });
  $(".ingredients").css({ display: "none" });
  $(".contact").css({ display: "block" });
  $(".selectedCategory").css({ display: "none" });
  $(".mealDetails").css({ display: "none" });
  $(".selectedMealsIngrediantsRow").css({ display: "none" });
  $(".contact").css({ display: "block" });
});

// Vlidation of Inputs Function

function validateInputs(name, email, age, phone, password) {
  // Define regex patterns for each input
  const nameRegex = /^[a-zA-Z\s]+$/;
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const ageRegex = /^\d+$/;
  const phoneRegex = /^01[0125][0-9]{8}$/;
  const passwordRegex =/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  // Validate each input
  let isNameValid = nameRegex.test(name);
  let isEmailValid = emailRegex.test(email);
  let isPhoneValid = phoneRegex.test(phone);
  let isAgeValid = ageRegex.test(age);
  let isPasswordValid = passwordRegex.test(password);

  // Return true if all validations pass, otherwise false
  return (
    isNameValid && isEmailValid && isPhoneValid && isAgeValid && isPasswordValid
  );
}
let x1;
let x2;
let x3;
let x4;
let x5;

nameInput.addEventListener("blur", () => {
  x1 = nameInput.value;
  console.log(x1);
});
emailInput.addEventListener("blur", () => {
  x2 = emailInput.value;
});
ageInput.addEventListener("blur", () => {
  x3 = ageInput.value;
});
phoneInput.addEventListener("blur", () => {
  x4 = phoneInput.value;
});
passwordInput.addEventListener("blur", () => {
  x5 = passwordInput.value;
  let isValid = validateInputs(x1, x2, x3, x4, x5);
  if (isValid) {
    submittButton.classList.remove("disabled");
  }
});
