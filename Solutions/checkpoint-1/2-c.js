function dearSanta(forbidden) {
  const answer = prompt('Santa: Ho ho ho! What do you want for Christmas?');

  if (forbidden.includes(answer)) {
    alert(
      "Santa: You've been naughty this year and will only get coal in your stockings!"
    );
  } else
    alert(
      `Santa: You've been nice this year and will get ${answer} for Christmas!`
    );
}

dearSanta(['motorcycle', 'car']);
