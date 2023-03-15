function dearSanta(forbidden) {
  const answer = prompt("Santa: Ho ho ho! What do you want for Christmas?");

  if (forbidden.includes(answer)) {
    alert(
      "Santa: You've been naughty this year and will only get coal in your stockings!"
    );
  } else
    alert(
      `Santa: You've been nice this year and will get ${answer} for Christmas!`
    );
}

dearSanta(["motorcycle", "car"]);

// For this solution I used the includes() method to determines whether an array included the forbidden list or not. If any index value within the forbidden array list would signal true, it would return the first "naughty alert", else it would return false and return the second alert message.
