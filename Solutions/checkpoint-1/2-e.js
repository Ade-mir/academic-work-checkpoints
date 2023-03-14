function printSequence(n, m) {
  if (n === m) {
    console.log(n);
  }
  if (n < m) {
    for (let i = n; i <= m; i++) {
      if (i % 3 === 0 && i % 7 === 0) {
        console.log('wubbalubba');
      } else if (i % 3 === 0) {
        console.log('wubba');
      } else if (i % 7 === 0) {
        console.log('lubba');
      } else console.log(i);
    }
  }
  if (n > m) {
    for (let i = m; i <= n; i++) {
      if (i % 3 === 0 && i % 7 === 0) {
        console.log('wubbalubba');
      } else if (i % 3 === 0) {
        console.log('wubba');
      } else if (i % 7 === 0) {
        console.log('lubba');
      } else console.log(i);
      m;
    }
  }
}

printSequence(1, 23);

function countDown(fromN) {
  console.log(fromN);

  const newNumber = fromN - 1;

  if (newNumber > -1) {
    countDown(newNumber);
  }
}
