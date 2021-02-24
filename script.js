const search = document.getElementById('search');
const submit = document.getElementById('submit');
const random = document.getElementById('random');
const mealsEl = document.getElementById('meals');
const single_mealEL = document.getElementById('single-meal');

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

  } else {

  }
}

//Event Listeners
submit.addEventListener('submit', searchMeal);