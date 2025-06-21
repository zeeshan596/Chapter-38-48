function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

document.body.innerHTML += isLeapYear(2024) ? "Leap Year<br>" : "Not a Leap Year<br>";