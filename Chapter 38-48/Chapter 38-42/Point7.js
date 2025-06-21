function countDoubleVowels(text) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (let i = 0; i < text.length - 1; i++) {
    if (vowels.includes(text[i]) && vowels.includes(text[i + 1])) {
      count++;
    }
  }
  return count;
}

document.body.innerHTML += `Double Vowels: ${countDoubleVowels("Pleases read this application and give me gratuity")}<br>`;