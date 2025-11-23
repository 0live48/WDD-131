// recipes.mjs

const recipes = [
    {
        name: "Chocolate Cake",
        tags: ["dessert", "celebration", "chocolate"],
        description:
            "This moist and rich chocolate cake recipe is perfect for birthdays and special occasions, topped with a creamy chocolate ganache.",
        ingredients: [
            { item: "all-purpose flour", quantity: "1 3/4", unit: "cups" },
            { item: "cocoa powder", quantity: "3/4", unit: "cup" },
            { item: "sugar", quantity: "2", unit: "cups" },
            { item: "buttermilk", quantity: "1", unit: "cup" },
        ],
        rating: 5,
        image: "img/chocolatecake.jpg", 
    },
    {
        name: "Hearty Lentil Soup",
        tags: ["lunch", "dinner", "vegetarian", "healthy"],
        description: "A comforting and healthy vegetarian soup packed with vegetables, lentils, and rich spices.",
        ingredients: [
            { item: "brown lentils", quantity: 1, unit: "cup" },
            { item: "vegetable broth", quantity: 6, unit: "cups" },
            { item: "carrots", quantity: 2, unit: "" },
            { item: "onion", quantity: 1, unit: "medium" },
        ],
        rating: 4,
        image: "img/lentilsoup.jpg",
    },
    {
        name: "Classic Apple Crisp",
        tags: ["dessert", "fruit", "fall"],
        description: "This apple crisp recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream.",
        ingredients: [
            { item: "apples (mixed varieties)", quantity: 6, unit: "cups" },
            { item: "oats", quantity: 1, unit: "cup" },
            { item: "cinnamon", quantity: 1, unit: "tsp" },
        ],
        rating: 3,
        image: "img/applecrisp.jpg",
    },
];

// Named export required by your current setup
export function getRecipes() {
    return recipes;
}