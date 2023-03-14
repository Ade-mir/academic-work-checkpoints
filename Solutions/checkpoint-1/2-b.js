function printPattern(n, str) {
  result = '';

  for (let i = 0; i < n; i++) {
    result += str;
    console.log(result);
  }
}

printPattern(5, '*');

// Works like a charm. Here I could have used alternatively the concat() method on the string instead of adding to the result, but in essense that is what the concat() does. Used a for loop from 0 to n.
