function printRange(n, m) {
  let length = m + 1 - n;
  for (let j = 0; j < length; j++) {
    for (let i = n; i <= m; i++) {
      console.log(i);
    }
  }
}

printRange(1, 10);

// Here I used a a nested for loop to iterate over the length which was saved as a variable, then in the inner loop the range is console logged from n to m.
