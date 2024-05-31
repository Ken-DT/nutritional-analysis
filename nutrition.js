document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('search-form');
    const recipeTitleInput = document.getElementById('recipe-title');
    const ingredientsListInput = document.getElementById('ingredients-list');
    const servingsInput = document.getElementById('servings');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const recipeTitle = recipeTitleInput.value;
        const ingredientsList = ingredientsListInput.value.split('\n');
        const servings = servingsInput.value;
        fetchData(recipeTitle, ingredientsList, servings);
    });

    async function fetchData(title, ingredients, servings) {
        const appId = 'bf7b4243';
        const apiKey = '1d63946bb9d37db1c08d70b72fd67266';
        const url = `https://api.edamam.com/api/nutrition-details?app_id=${appId}&app_key=${apiKey}`;
        
        try {
            const response = await axios.post(url, {
                title: title,
                ingr: ingredients,
                yield: servings
            }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = response.data;
            displayData(data, servings);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    function displayData(data, servings) {
        const content = document.getElementById('content');
        content.innerHTML = `
            <h2>Nutrition Analysis (Per Serving)</h2>
            <p>Servings: ${servings}</p>
            <p>Calories: ${(data.calories / servings).toFixed(2)}</p>
            <p>Fat: ${(data.totalNutrients.FAT.quantity / servings).toFixed(2)} ${data.totalNutrients.FAT.unit}</p>
            <p>Carbs: ${(data.totalNutrients.CHOCDF.quantity / servings).toFixed(2)} ${data.totalNutrients.CHOCDF.unit}</p>
            <p>Protein: ${(data.totalNutrients.PROCNT.quantity / servings).toFixed(2)} ${data.totalNutrients.PROCNT.unit}</p>
            <p>Phosphorus: ${(data.totalNutrients.P.quantity / servings).toFixed(2)} ${data.totalNutrients.P.unit}</p>
            <p>Potassium: ${(data.totalNutrients.K.quantity / servings).toFixed(2)} ${data.totalNutrients.K.unit}</p>
            <p>Sodium: ${(data.totalNutrients.NA.quantity / servings).toFixed(2)} ${data.totalNutrients.NA.unit}</p>
            <p>Added Sugar: ${(data.totalNutrients.SUGAR.added / servings).toFixed(2)} ${data.totalNutrients.SUGAR.unit}</p>
            <p>Fiber: ${(data.totalNutrients.FIBTG.quantity / servings).toFixed(2)} ${data.totalNutrients.FIBTG.unit}</p>
        `;
    }
});
