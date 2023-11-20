Recipe Repository
Overview
This repository contains a collection of recipes stored in a structured JSON format. Each recipe is represented as an object within the "recipes" array, providing details on ingredients, cooking instructions, and additional attributes.

File Structure
    recipes.json: The main JSON file containing an array of recipe objects.
    Usage Guide
    Key Attributes
                      name: The name of the recipe.
                      filePath: The file path to the recipe's detailed instructions, possibly an HTML file.
                      ingredients: An array listing the ingredients required for the recipe.
                      appliances: An array specifying the appliances needed for cooking.
                      cuisine: The regional cuisine to which the recipe belongs.
                      tags: An array of tags indicating characteristics of the recipe (e.g., Dinner, Healthy).
                      cookingTime: The estimated time required to prepare and cook the recipe.
                      difficulty: The difficulty level of the recipe (e.g., Beginner, Intermediate).
                      glutenFree: Indicates whether the recipe is gluten-free (yes or no).
                      lactoseFree: Indicates whether the recipe is lactose-free (yes or no).
                      vegetarian: Indicates whether the recipe is vegetarian (yes or no).
                      served: The recommended serving temperature (e.g., hot, cold).
                      spicy: A numerical value indicating the spiciness level on a scale from 1 to 3.
                      price: A numerical value indicating the estimated cost of preparing the recipe on a scale from 1 to 3.

Contribution Guidelines:

    Follow the provided structure when adding new recipes.
    Ensure accuracy and completeness of data.
    If contributing HTML files, link them appropriately in the "filePath" attribute.
Enjoy Cooking!
Feel free to explore and contribute to this repository. If you have any questions or suggestions, contact Alylo.