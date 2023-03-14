function removeDivisibleByThreeOrFive(list) {
  return list.filter((number) => {
    return number % 3 !== 0 && number % 5 !== 0;
  });
}

// Here I am using the filter() method. As well as the modulus to check if they are not divisible.

// Here I was having issues getting anything to console log, because I forgot to return the number inside as well as the list.

// This function takes in an array of numbers as an argument and uses the filter() method to remove any numbers that are divisible by either 3 or 5.

// The filter() method takes a callback function as an argument and returns a new array containing only the elements for which the callback function returns true.

// In this case, the callback function is an arrow function that takes a single argument number. It returns true if the number is not divisible by 3 and not divisible by 5, and returns false otherwise.

// So, the first return statement in the removeDivisibleByThreeOrFive function is returning the filtered list of numbers, which is an array containing only the elements for which the callback function returns true.

// The second return statement is within the callback function, which returns true or false for each element in the array. The filter() method uses this return value to determine whether to include the element in the new array or not.

// So, the return keyword in the callback function is necessary to return the result of the boolean expression to the filter() method, and the second return statement in the removeDivisibleByThreeOrFive function is necessary to return the final filtered list of numbers.
