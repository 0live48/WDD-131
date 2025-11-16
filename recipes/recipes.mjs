// recipes.mjs

const recipes = [
  {
    name: "Chocolate Cake",
    tags: ["dessert", "celebration"],
    description:
      "This moist and rich chocolate cake recipe is perfect for birthdays and special occasions, topped with a creamy chocolate ganache.",
    ingredients: [
      { item: "all-purpose flour", quantity: "1 3/4", unit: "cups" },
      { item: "cocoa powder", quantity: "3/4", unit: "cup" },
      { item: "baking soda", quantity: "1", unit: "teaspoon" },
      { item: "baking powder", quantity: "1/2", unit: "teaspoon" },
      { item: "salt", quantity: "1", unit: "teaspoon" },
      { item: "sugar", quantity: "2", unit: "cups" },
      { item: "eggs", quantity: "2", unit: "large" },
      { item: "buttermilk", quantity: "1", unit: "cup" },
      { item: "vegetable oil", quantity: "1/2", unit: "cup" },
      { item: "vanilla extract", quantity: "2", unit: "teaspoons" },
      { item: "boiling water", quantity: "1", unit: "cup" },
    ],
    directions: [
      {
        step: "Preheat oven to 350°F (175°C).",
        details: "Grease and flour two 9-inch round cake pans.",
      },
      {
        step: "Whisk together dry ingredients.",
        details: "In a large bowl, mix flour, cocoa, baking soda, baking powder, salt, and sugar.",
      },
      {
        step: "Add wet ingredients.",
        details: "Add eggs, buttermilk, oil, and vanilla; beat on medium speed for 2 minutes.",
      },
      {
        step: "Stir in boiling water.",
        details: "Carefully mix in the boiling water (batter will be thin).",
      },
      { step: "Pour and bake.", details: "Pour into prepared pans. Bake for 30-35 minutes." },
      {
        step: "Cool and frost.",
        details: "Let cool completely before frosting with chocolate ganache.",
      },
    ],
    rating: 5, // Changed to 5 stars
    image: "chocolate-cake.jpg", // Assuming you download or create this image
  },
  // Other recipes would go here...
];

export function getRecipes() {
  return recipes;
}