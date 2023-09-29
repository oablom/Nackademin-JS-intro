/* Skriv en funktion som tar emot "programming" och 
"index" som inparametrar och returnerar språket på det
 angivna indext */

const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes: [
    "https://www.devtopics.com/best-programming-jokes/",
    "https://www.hongkiat.com/blog/programming-jokes/",
  ],
};

function programmingLanguage(object, index) {
  console.log(object.languages[index]);
}

programmingLanguage(programming, 0);
