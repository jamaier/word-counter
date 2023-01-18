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
  
  if(word.trim().length === 0) {
    return 0;
  }

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

//User Interface

function handleFormSubmission(event) {
  event.preventDefault();
  const passage = document.getElementById("text-passage").value;
  const word = document.getElementById("word").value;
  const wordCount = wordCounter(passage);
  const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
  document.getElementById("total-count").innerText = wordCount;
  document.getElementById("selected-count").innerText = occurrencesOfWord;
}

window.addEventListener("load", function() {
  document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
});

function boldPassage(word, text) {
  if ((text.trim().length === 0) || (word.trim().length === 0)) {
    return null;
  }
  const p = document.createElement("p");
  let textArray = text.split(" ");
  textArray.forEach(function(element) {
  if (word === element) {
    const bold = document.createElement("strong");
    bold.append(element);
    p.append(bold);
  } else {
    p.append(element);
  }
  if (index !==(textArray.length - 1)) {
    p.append(" ");
    }
  });
  return p;
  }

