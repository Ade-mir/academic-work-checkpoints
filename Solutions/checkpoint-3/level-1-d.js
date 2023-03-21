function addNumbers() {
  var a = parseInt(prompt("First number"));
  var b = parseInt(prompt("Second number"));
  var result = a + b;
  console.log(typeof result);
  console.log(result);
}

addNumbers();

// Here I tested the function and I saw that if I wrote 1, followed by 2 in the prompts, I was returned 12. Which led my to think that the type of the variable result was not computing numbers, but rather strings.

// And when I added an extra line logging out the type of the variable, with the typeof operator, it indeed shows that result is a string.

// In order to make this function work as intended I converted the strings received through the prompt with the parseInt() function.
