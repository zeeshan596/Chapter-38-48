function average(m1, m2, m3) {
  return (m1 + m2 + m3) / 3;
}

function percentage(m1, m2, m3) {
  return ((m1 + m2 + m3) / 300) * 100;
}

function mainFunction(m1, m2, m3) {
  let avg = average(m1, m2, m3);
  let perc = percentage(m1, m2, m3);
  document.body.innerHTML += `Average: ${avg}<br>Percentage: ${perc}%<br>`;
}

mainFunction(85, 90, 95);