function calculateNotes() {
  let amount = +prompt("Enter amount to withdraw!!:");

  let hundreds = Math.floor(amount / 100);
  let remainder = amount % 100;

  let fifties = Math.floor(remainder / 50);
  remainder = remainder % 50;

  let tens = Math.floor(remainder / 10);

  document.body.innerHTML = `
    Amount: Rs. ${amount}<br>
    100s: ${hundreds}<br>
    50s: ${fifties}<br>
    10s: ${tens}
  `;
}

calculateNotes();