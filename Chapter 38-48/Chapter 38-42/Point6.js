function deleteVowels(sentence) {
  return sentence.replace(/[aeiouAEIOU]/g, '');
}

document.body.innerHTML += `${deleteVowels("This is a test sentence.")}<br>`;