const search = document.getElementById('search');
const submit = document.getElementById('submit');
const random = document.getElementById('random');
const mealsEl = document.getElementById('meals');
const resultHeading = document.getElementById('result-heading');
const single_mealEL = document.getElementById('single-meal');
const searchBtn = document.getElementById('search-btn');
const alert = document.getElementById('alert');
const closeBtn = document.getElementById('close-btn');


// Search meal and fetch from API
function searchMeal(e) {
  e.preventDefault();

  // Clear single meal
  single_mealEL.innerHTML = '';


  // Get search term
  const term = search.value;
  // console.log(term);

  // Check if something was actually submited
  if (term.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        resultHeading.innerHTML = `<h2>Search results for '${term}':</h2>`;

        if (data.meals === null) {
          resultHeading.innerHTML = `<p style="margin-top: 50px;">There are no search results. Try again.</p>`;
        } else {
          meals.innerHTML = data.meals.map(meal => `
            <div class="meal">
              <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
              <div class="meal-info" data-mealID="${meal.idMeal}">
                <h3>${meal.strMeal}</h3>
              </div>
            </div>
          `)
            .join('');
        }
      });

    // Clear search text
    search.value = '';
  } else {
    if (searchBtn.value.length == 0) {
      // alert("empty");

      searchBtn.addEventListener('click', () => alert.classList.remove('hide'));
      searchBtn.addEventListener('click', () => alert.classList.add('show'));

      closeBtn.addEventListener('click', () => alert.classList.remove('show'));
      closeBtn.addEventListener('click', () => alert.classList.add('hide'));

    }
  }
}

// Fetch meal by ID
function getMealById(mealID) {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      const meal = data.meals[0];

      addMealToDOM(meal);
    });
}

// Add meal to DOM
function addMealToDOM(meal) {
  const ingredients = [];

  // Get single meal
  for (let i = 1; i <= 20; i++) {
    if (meal[`strIngredient${i}`]) {
      ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
    } else {
      break;
    }
  }

  // Output single meal
  single_mealEl.innerHTML = `
    <div class="single-meal">
      <h1>${meal.strMeal}</h1>
    </div>
  `;
}

//Event Listeners
submit.addEventListener('submit', searchMeal);

mealsEl.addEventListener('click', e => {
  const mealInfo = e.path.find(item => {
    // console.log(item);
    if (item.classList) {
      return item.classList.contains('meal-info');
    } else {
      return false;
    }
  });
  // console.log(mealInfo);

  // Check for mealInfo
  if (mealInfo) {
    const mealID = mealInfo.getAttribute('data-mealid');
    // console.log(mealID);

    // Pass into a function
    getMealById(mealID);
  }

});