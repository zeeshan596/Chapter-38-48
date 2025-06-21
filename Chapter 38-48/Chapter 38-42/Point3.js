function calculateS(a, b, c) {
  return (a + b + c) / 2;
}

function areaOfTriangle(a, b, c) {
  let s = calculateS(a, b, c);
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

document.body.innerHTML += `Area: ${areaOfTriangle(3, 4, 5)}<br>`;