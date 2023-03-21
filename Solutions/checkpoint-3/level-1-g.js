function extendString(str) {
  if (str.length >= 10) {
    console.log(str + "????");
  } else if (str.length >= 5) {
    console.log(str + "!!!!");
  } else {
    console.log(str);
  }
}

// Remember here to plan the correct series of the if else statements so that only one condition runs. Using the length property.
