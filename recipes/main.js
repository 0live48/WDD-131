// main.js

import { getRecipes } from './recipes.mjs';

// Get the recipes list by calling the function
const recipes = getRecipes(); 

// --- 02 Build the random functions ---
/**
 * Generates a random whole number from 0 up to (but not including) num.
 */
function random(num) {
	return Math.floor(Math.random() * num);
}

/**
 * Returns a random entry from a given list (array).
 */
function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}


// --- 03 Create Template Functions ---

/**
 * Creates the HTML string for the tags list of a recipe.
 */
function tagsTemplate(tags) {
	// loop through the tags list and transform the strings to HTML
	const html = tags.map(tag => `<p class="tag">${tag}</p>`).join('');
	return html;
}

/**
 * Creates the HTML string for the star rating of a recipe.
 */
function ratingTemplate(rating) {
	// begin building an html string
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars">`;

	// our ratings are always out of 5, so create a for loop from 1 to 5
	for (let i = 1; i <= 5; i++) {
		// check if the current index is less than or equal to the rating
		if (i <= rating) {
			// filled star
			html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
		} else {
			// empty star
			html += `<span aria-hidden="true" class="icon-star-empty"></span>`; 
		}
	}
	
	// add the closing tag
	html += `</span>`;
	return html;
}

/**
 * Generates the full HTML structure for a single recipe card.
 */
function recipeTemplate(recipe) {
    const imageSrc = recipe.image || 'img/placeholder.jpg';
    
    return `<section class="recipe-card">
            <div class="recipe-image-container">
                <img src="${imageSrc}" alt="Image of ${recipe.name}." loading="lazy">
            </div>
            <div class="recipe-info">
                ${tagsTemplate(recipe.tags)}
                <h2 class="recipe-title">${recipe.name}</h2>
                ${ratingTemplate(recipe.rating)}
                <p class="recipe-description">${recipe.description}</p>
            </div>
        </section>`;
}


// --- 04 Render the Random Recipe ---
/**
 * Outputs a list of recipes to the DOM, replacing the current content of the <main> tag.
 */
function renderRecipes(recipeList) {
	// get the element we will output the recipes into
	const mainElement = document.querySelector('main');
	
    if (recipeList.length === 0) {
        mainElement.innerHTML = '<p class="no-results">No recipes found matching your search criteria. Try a different term!</p>';
        return;
    }
    
    // use the recipeTemplate function to transform our recipe objects into recipe HTML strings
	const htmlStrings = recipeList.map(recipe => recipeTemplate(recipe));
	
	// Set the HTML strings as the innerHTML of our output element.
	mainElement.innerHTML = htmlStrings.join('');
}


// --- 05 Filtering Recipes ---

/**
 * Filters and sorts the main list of recipes based on a query string.
 */
function filterRecipes(query) {
    const filtered = recipes.filter(recipe => {
        // Convert query to lower case once
        const q = query.toLowerCase();

        // Check if the query shows up in the name, description, tags, OR ingredients
        const nameMatch = recipe.name.toLowerCase().includes(q);
        const descriptionMatch = recipe.description.toLowerCase().includes(q);

        // Check tags array
        const tagsMatch = recipe.tags.find(tag => tag.toLowerCase().includes(q));

        // Check ingredients array (assuming ingredients is an array of objects with an 'item' property)
        const ingredientsMatch = recipe.ingredients.find(ingredient => ingredient.item.toLowerCase().includes(q));

        return nameMatch || descriptionMatch || tagsMatch || ingredientsMatch;
    });

    // Sort the list of recipes by name alphabetically (case-insensitive)
    const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));

    return sorted;
}


/**
 * Handles the search form submission, filters recipes, and renders the results.
 */
function searchHandler(e) {
	e.preventDefault();
	
	// get the search input value and convert to lowercase
    const searchInput = document.getElementById('search');
	const query = searchInput.value.toLowerCase();
	
    // use the filter function to filter our recipes
    const filteredRecipes = filterRecipes(query);
	
    // render the filtered list
    renderRecipes(filteredRecipes);
}


/**
 * Initializes the page by rendering a random recipe and setting up the search listener.
 */
function init() {
  // get a random recipe
  const recipe = getRandomListEntry(recipes);
  
  // render the recipe in an array
  renderRecipes([recipe]);

  // Attach event listener for search functionality
  const searchForm = document.querySelector('.search-form');
  searchForm.addEventListener('submit', searchHandler);
}


// Call init to start the process on page load
init();