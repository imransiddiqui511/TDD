// This is the function that adds numbers from a string
function add(numbers) {
    // If the input string is empty, return 0
    if (!numbers) return 0;
  
    // Default delimiters are commas and newlines
    let delimiterPattern = /,|\n/;
  
    // Check if there is a custom delimiter
    if (numbers.startsWith("//")) {
      // Split the string into the delimiter and the numbers part
      const parts = numbers.split('\n');
      const customDelimiter = parts[0].slice(2); // Extract delimiter
      delimiterPattern = new RegExp(`[${customDelimiter}]`); // Update delimiter pattern
      numbers = parts[1]; // Update the numbers part
    }
  
    // Convert the string to an array of numbers
    const nums = numbers.split(delimiterPattern).map(num => parseInt(num, 10));
  
    // Find any negative numbers
    const negatives = nums.filter(num => num < 0);
  
    // If there are negative numbers, throw an error
    if (negatives.length > 0) {
      throw new Error(`Negatives not allowed: ${negatives.join(', ')}`);
    }
  
    // Calculate and return the sum of all numbers
    return nums.reduce((sum, num) => sum + num, 0);
  }
  
  module.exports = add; // Export the function so it can be used elsewhere
  
  
  