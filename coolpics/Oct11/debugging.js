const PI = 3.14;       // Corrected variable name
let radius = 3;        // Use 'let' because we change it later
let area = 0;

// Calculate area for radius 3
area = radius * radius * PI;
console.log("Activity 1 - Area1:", area);

// Change radius to 4 and calculate again
radius = 4;
area = radius * radius * PI;
console.log("Activity 1 - Area2:", area);

// Create a function to calculate the area of a circle
function circleArea(radius) {
  const area = radius * radius * PI;  // Multiply radius * radius * PI
  return area;                        // Return the result
}

// Use the function with different radius values
area = circleArea(3);
console.log("Activity 2 - Area1:", area);

area = circleArea(4);
console.log("Activity 2 - Area2:", area);
