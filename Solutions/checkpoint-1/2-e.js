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

// For the last bonus question in this checkpoint I created two variables, and left them undefined. Then I handled the case where n is the same as m, and returned a string asking for different numbers. If the numbers are different I then handled the scenario where n might be bigger than m, and vice versa. now regardless of which number is smaller, the subsequent code works the same by setting setting the range values to be equal to the previously mentioned variables biggerNum and smallerNum. After that I used if else statments to check whether or not they are divisible by 3, 7, or both, followed by the stop condition.
