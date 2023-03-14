function printRepeatedRange(n, m, x) {
  for (let i = 0; i < x; i++) {
    for (let i = n; i <= m; i++) {
      console.log(i);
    }
  }
}

// Here I used a for loop within a for loop. The inner loop console logs the range from n to m, whilst the outer loop runs the inner one x times.
