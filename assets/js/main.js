const textArea = document.getElementById("text-area");

const handleUpperCase = () => {
  textArea.value = textArea.value.toUpperCase();

};

const handleLowerCase = () => {
  textArea.value = textArea.value.toLowerCase();
};

const handleProperCase = () => {
  const text = textArea.value.toLowerCase();
  const words = text.split(/\s+/);
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    words[i] = setFirstLetterToUpperCase(word);
  }
  textArea.value = words.join(" ");
};

const handleSentenceCase = () => {
  const text = textArea.value.toLowerCase();
  const sentences = text.match(/\(?[^.?!]+[.!?]\)?/g);
  for (let i = 0; i < sentences.length; i++) {
    const sentence = sentences[i];
    sentences[i] = setFirstLetterToUpperCase(sentence.trim());
  }
  textArea.value = sentences.join(" ");
};

const setFirstLetterToUpperCase = (text) => {
  if (text.length === 0) return text;
  const firstLetter = text.slice(0,1).toUpperCase();
  if (text.length === 1) return firstLetter;
  return firstLetter + text.slice(1);
}

const download = () => {
  const filename = "text.txt";
  const text = textArea.value;
  const element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};