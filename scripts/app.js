'use strict';

var blue = "#2F3BA2"
var green = "#24872E"
var red = "#BF3433"

var mode = "quiz"

var currentAlphabet = "n"
var inverted = false

var letters
var correctIndex
var lastLetter = -1

var word = "solution"
var dictionary = null

function onQuizClicked() {
  mode = "quiz"
  document.getElementById('butQuiz').style.opacity = 1
  document.getElementById('butRead').style.opacity = 0.6
  document.getElementById('quiz').style.display = "inherit"
  document.getElementById('read').style.display = "none"
  getNewQuestion()
}

function onReadClicked() {
  mode = "read"
  document.getElementById('butRead').style.opacity = 1
  document.getElementById('butQuiz').style.opacity = 0.6
  document.getElementById('read').style.display = "inherit"
  document.getElementById('quiz').style.display = "none"
  getNewQuestion()
}

function onSolutionClicked() {
  if (mode == 'quiz') {
    document.getElementById('answer' + correctIndex).style.background = green
  } else if (mode == 'read') {
    document.getElementById('readSolution').innerHTML = word
  } else {
    console.log("Invalid mode")
  }
}

function onNextClicked() {
  getNewQuestion()
}

function onAlphabetClicked(alphabet) {
  document.getElementById(currentAlphabet).style.background = "gray"
  document.getElementById(alphabet).style.background = blue
  currentAlphabet = alphabet
  getNewQuestion()
}

function onAnswerClicked(index) {
  if (index == correctIndex) {
    document.getElementById('answer' + index).style.background = green
    setTimeout(function(){
        getNewQuestion()
    }, 300)
  } else {
    document.getElementById('answer' + index).style.background = red
  }
}

function getRandomLetter() {
  var randomLetter = Math.floor(26 * Math.random()) + 1
  if (randomLetter == lastLetter) {
    return getRandomLetter()
  } else {
    return randomLetter
  }
}

function getRandomIndex(size) {
    return Math.floor(size * Math.random())
}

function get5RandomLetters() {
  var result = []
  while (result.length < 5) {
    var random = getRandomLetter()
    if (!result.includes(random)) {
      result.push(random)
    }
  }
  return result
}

function getNewQuestion() {
  if (mode == 'quiz') {
    getNewQuizQuestion()
  } else if (mode == 'read') {
    getNewReadQuestion()
  } else {
    console.log("Invalid mode")
  }
}

function getNewQuizQuestion() {
  var questionAlphabet
  var answerAlphabet
  if (document.getElementById("invert").checked) {
    questionAlphabet = 'a'
    answerAlphabet = currentAlphabet
  } else {
    questionAlphabet = currentAlphabet
    answerAlphabet = 'a'
  }
  letters = get5RandomLetters()
  correctIndex = getRandomIndex(5)
  lastLetter = letters[correctIndex]

  document.getElementById('imgQuestion').src = "/images/alphabets/" + questionAlphabet + "/" +  letters[correctIndex] + ".png"

  document.getElementById('answer0').src = "/images/alphabets/" + answerAlphabet + "/" +  letters[0] + ".png"
  document.getElementById('answer1').src = "/images/alphabets/" + answerAlphabet + "/" +  letters[1] + ".png"
  document.getElementById('answer2').src = "/images/alphabets/" + answerAlphabet + "/" +  letters[2] + ".png"
  document.getElementById('answer3').src = "/images/alphabets/" + answerAlphabet + "/" +  letters[3] + ".png"
  document.getElementById('answer4').src = "/images/alphabets/" + answerAlphabet + "/" +  letters[4] + ".png"

  document.getElementById('answer0').style.background = "gray"
  document.getElementById('answer1').style.background = "gray"
  document.getElementById('answer2').style.background = "gray"
  document.getElementById('answer3').style.background = "gray"
  document.getElementById('answer4').style.background = "gray"
}

function getNewReadQuestion() {
  document.getElementById('readSolution').innerHTML = ""
  word = dictionary[getRandomIndex(dictionary.length)]
  for (var i = 0; i < 20; ++i) {
    var element = document.getElementById('gridItem' + i)
    if (i < word.length) {
      element.style.visibility = "inherit"
      var letter = word.charCodeAt(i) - 96
      element.src = "/images/alphabets/" + currentAlphabet + "/" +  letter + ".png"
    } else {
      element.style.visibility = "hidden"
    }
  }
}

function loadDictionary(callback) {   
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', '/assets/dictionary.json', true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
      callback(xobj.responseText);
    }
  };
  xobj.send(null);  
}



/**
 * Initialize the app, gets the list of locations from local storage, then
 * renders the initial data.
 */
function init() {
  console.log("Loading dictionary")
  loadDictionary(function(response) {
  // Parse JSON string into object
    dictionary = JSON.parse(response);
    console.log("Loaded dictionary with " + dictionary.length + " words.")
  });
  onQuizClicked()
  onAlphabetClicked('n')
}

init()
