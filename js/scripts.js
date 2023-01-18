//Business logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const textArray = text.split(" ");
  textArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  const textArray = text.split(" ");
  let wordCount = 0;
  textArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

// This project contains two functions that effectively remove bad words from text. One uses a boolean, the other uses comparative operators.

function removeOffensiveWords(text) {
  const offensiveWords = [
    "zoinks",
    "muppeteer",
    "biffaroni",
    "loopdaloop"
  ]
  const textArray = text.split(" ");
  let outputArr = []
  textArray.forEach(function(word) {
    let isOkay = true;
    offensiveWords.forEach(function(offensiveWord) {
      if(word.toLowerCase().includes(offensiveWord.toLowerCase())) {
        isOkay = false;
      }
    })
    if(isOkay) {
      outputArr.push(word)
    }
  })
  return outputArr.join(" ")
};

// function removeBadWords(text) {
//   const badWords = ["zoinks", "shucks", "shoot"];

//   let textArray = text.split(" ");
//   let outputArray = [];

//   textArray.forEach(function(word) {
//     if (!badWords.includes(word.toLowerCase())) 
//       outputArray.push(word);
//   })
  
//   return outputArray.join(" ");
// };