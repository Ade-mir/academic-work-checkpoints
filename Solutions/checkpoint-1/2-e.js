function printSequence(n, m) {
  let biggerNum;
  let smallerNum;

  if (n === m) {
    console.log("Please choose two different numbers");
  } else if (n < m) {
    smallerNum = n;
    biggerNum = m;
  } else {
    smallerNum = m;
    biggerNum = n;
  }

  let newNumber = smallerNum + 1;

  if (smallerNum % 3 === 0 && smallerNum % 7 === 0) {
    console.log("wubbalubba");
  } else if (smallerNum % 3 === 0) {
    console.log("wubba");
  } else if (smallerNum % 7 === 0) {
    console.log("lubba");
  } else {
    console.log(smallerNum);
  }

  if (newNumber < biggerNum) {
    printSequence(newNumber, biggerNum);
  }
}

printSequence(1, 23);
