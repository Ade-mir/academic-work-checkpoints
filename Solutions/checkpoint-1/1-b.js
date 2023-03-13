function countDown(fromN) {
  if (fromN <= 0) {
    console.log('fromN must be bigger than 0');
  } else {
    for (let i = fromN; i >= 0; i--) {
      console.log(i);
    }
  }
}
