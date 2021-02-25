const search = document.getElementById('search');
const submit = document.getElementById('submit');
const random = document.getElementById('random');
const mealsEl = document.getElementById('meals');
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


//Event Listeners
submit.addEventListener('submit', searchMeal);