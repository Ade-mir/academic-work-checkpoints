function removeDivisibleByThreeOrFive(list) {
  return list.filter((number) => {
    return number % 3 !== 0 && number % 5 !== 0;
  });
}

// I used the filter() method together with remainder (%) operator to check if the numbers are not divisible by 3 or 5. The filter() method takes a callback function as an argument and returns a new array containing only the elements for which the callback function returns true. In this function, all numbers that are not divisible by 3 or 5. I was having issues getting anything to console log when testing this function, because I initially forgot to return the number inside as well as the list.
