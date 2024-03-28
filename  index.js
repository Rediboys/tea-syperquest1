// Helper function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  // Helper function to reverse a string
  function reverseString(string) {
    return string.split('').reverse().join('');
  }
  
  // Helper function to count the occurrences of a character in a string
  function countOccurrences(string, char) {
    return string.split(char).length - 1;
  }
  
  // Example usage of helper functions
  console.log(capitalizeFirstLetter("hello")); // Output: Hello
  console.log(reverseString("world")); // Output: dlrow
  console.log(countOccurrences("hello world", "l")); // Output: 3
  