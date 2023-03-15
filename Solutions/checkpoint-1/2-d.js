// function countDown(fromN) {
//   if (fromN <= 0) {
//     console.log('fromN must be bigger than 0');
//   } else {
//     for (let i = fromN; i >= 0; i--) {
//       console.log(i);
//     }
//   }
// }

function countDown(fromN) {
  console.log(fromN);

  const newNumber = fromN - 1;

  if (newNumber > -1) {
    countDown(newNumber);
  }
}

// The recursive function starts by console logging the given argument fromN, then instead of iterating over the number, it defines a new constant which is 1 less than the argument. The last line si the stop condition that says that as long as the number is not negative, it will call the countDown function by referencing itself, which is what is called a callback function.
