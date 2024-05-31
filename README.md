# Nutrition Analysis App

## Project Overview

This project is a Nutrition Analysis App that uses the Edamam API to provide detailed nutritional information about recipes. Users can enter a recipe title, a list of ingredients, and the number of servings to receive a nutritional breakdown per serving.

## Features

- Enter a recipe title.
- Enter a list of ingredients.
- Specify the number of servings.
- Get detailed nutritional information per serving, including:
  - Calories
  - Fat
  - Carbohydrates
  - Protein
  - Phosphorus
  - Potassium
  - Sodium
  - Added Sugar
  - Fiber

## How to Use

1. **Open the Nutrition Analysis App:**

   You can access the Nutrition Analysis App through GitHub Pages at the following URL:

   https://Ken-DT.github.io/analyze-nutritional/

Replace `your-github-username` with your actual GitHub username.

2. **Enter Data into the Form:**

- **Recipe Title:** Enter the name of your recipe in the "Recipe Title" input field.
- **Ingredients List:** Enter each ingredient on a new line in the "Ingredients List" textarea. For example:
  ```
  1 cup orange juice
  3 tablespoons olive oil
  2 carrots
  ```
- **Number of Servings:** Enter the number of servings for the recipe in the "Number of Servings" input field.

3. **Submit the Form:**

Click the "Analyze" button to submit the form.

4. **View the Nutritional Analysis:**

After submitting the form, the nutritional analysis per serving will be displayed under the form. The analysis includes:
- Calories
- Fat
- Carbohydrates
- Protein
- Phosphorus
- Potassium
- Sodium
- Added Sugar
- Fiber

## Project Structure

- `index.html`: The main HTML file containing the structure of the form and content area.
- `styles.css`: The CSS file for styling the form and content area.
- `nutritional.js`: The JavaScript file containing the logic for handling form submissions and displaying nutritional analysis.
- `README.md`: This file.

## Getting an API Key

To use the Edamam Nutrition Analysis API, you need to sign up and get an API key. Follow these steps:

1. **Sign Up:**

Go to the [Edamam Developer Portal](https://developer.edamam.com/) and sign up for a free developer account.

2. **Create an Application:**

After signing up, log in to your account and create a new application in the Edamam dashboard. Choose the "Nutrition Analysis API".

3. **Get Your API Key:**

Once your application is created, you will receive an API ID and API Key. Make sure to store these credentials securely as you will need them to make API requests.

4. **Use Your API Key:**

In the `nutritional.js` file, replace `YOUR_APP_ID` and `YOUR_API_KEY` with your actual API ID and API Key.

## Setting Up GitHub Pages

To set up GitHub Pages for this project, follow these steps:

1. **Create a GitHub Repository:**

Create a new public repository on GitHub named `nutrition-analysis-app`.

2. **Upload Your Project Files:**

Upload the `index.html`, `styles.css`, `nutritional.js`, and `README.md` files to the repository.

3. **Enable GitHub Pages:**

- Go to the repository settings.
- Scroll down to the "GitHub Pages" section.
- Under "Source," select the `main` branch.
- Click "Save."

4. **Access Your Project:**

After enabling GitHub Pages, you can access your project at the following URL:

Replace `your-github-username` with your actual GitHub username.

## Credits

This project was created as part of a Javascript Fundamentals class at CanCode  Communities. It is designed to demonstrate the use of asynchronous API calls, form handling, and dynamic content generation in a web application.

## License

This project is licensed under the MIT License..
