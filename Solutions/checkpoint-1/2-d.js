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
