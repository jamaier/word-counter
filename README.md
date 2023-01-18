# _Describe: wordCounter()_

### _Test: "It should return 1 if a passage has just one word."_
**_Code:_**
**_const text = "hello";_**
**_wordCounter(text);_**
**_Expected Output: 1_**

### _Test: "It should return 2 if a passage has two words."_
**_Code:_**
**_const text = "hello there";_**
**_wordCounter(text);_**
**_Expected Output: 2_**


Describe: removeOffensiveWords()

test: "It should remove and offensive word."
code:
let text = "this is zoinks, muppeteer, biffaroni, and loopdaloop!";
removeOffensiveWords(text)
expected output: "this is and";

describe: numberOfOccurences()
Test: "If an empty string is passed in as a word, it should return 0."
Code:
const word = "";
const text = "red RED Red!";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Describe: boldPassage()

test: "It should return null if the word or text are empty"
code:
const word = ""
const text = ""
boldPassage(word, text)
Expected Output: null

