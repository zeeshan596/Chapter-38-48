function toMeters(km) {
  return km * 1000;
}

function toFeet(km) {
  return km * 3280.84;
}

function toInches(km) {
  return km * 39370.1;
}

function toCentimeters(km) {
  return km * 100000;
}

let distanceKm = 5;
document.body.innerHTML += `Meters: ${toMeters(distanceKm)}<br>`;
document.body.innerHTML += `Feet: ${toFeet(distanceKm)}<br>`;
document.body.innerHTML += `Inches: ${toInches(distanceKm)}<br>`;
document.body.innerHTML += `Centimeters: ${toCentimeters(distanceKm)}<br>`;