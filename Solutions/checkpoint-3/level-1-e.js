function favoriteWord() {
  let word = prompt("What is your favorite word?") + " ";
  let times = parseInt(prompt("How many times do you want me to repeat it?"));
  alert(word.repeat(times));
}

favoriteWord();

// Here I'm creating a function that prompts the users twice. First time it saves the given favorite word with a space at the end. The second prompt is parsed into a number and saved as a variabel as well. Finally the user is alerted with the message that multiplies the saved variables word and times by using the repeat() method.
