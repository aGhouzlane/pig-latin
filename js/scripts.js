
const vowelArray = ['a', 'e', 'i', 'o', 'u'];

//Start with vowel => add 'way' to the end
//Start with consonant => move consecutive consonants to the end and + 'ay' // case 1: only starts with one consonant
// case 2: starts with more consecutive consonant
//words include 'qu' => move 'qu' to the end 
//start with y => move it to the end + 'ay'


function changeToPigLatin(text) {

  var wordArray = text.split(" ");
  var newtext = "";

  wordArray.forEach(element => {

    if (element[0] === 'a' || element[0] === 'e' || element[0] === 'i' || element[0] === 'u' || element[0] === 'o') {
      console.log(newtext.concat(element.slice(1, 6) + element[0] + "way"));
    }
    else if (getCount(element) === 1) {
      console.log(newtext.concat(element.slice(1, 7) + element[0] + "ay"));
    }
    else if (getCount(element) === 2) {
      console.log(newtext.concat(element.slice(2, 8) + element[0] + element[1] + "ay"));
    }

  });

  return text;
}

function getCount(str) {
  let counter = 0;

  if (str[0] !== 'a' || str[0] !== 'e' || str[0] !== 'i' || str[0] !== 'u' || str[0] !== 'o') {
    counter++;
  }
  if (str[1] !== 'a' && str[1] !== 'e' && str[1] !== 'i' && str[1] !== 'u' && str[0] !== 'o') {
    counter++;
  }
  return counter;
}

// var test1 = getCount("maxwell");
// console.log(test1);

var quword = "maquzd";
var newString = "";
if (quword.includes('qu')) {
  const startIndex = quword.indexOf('qu');
  const endIndex = startIndex + 'qu'.length;
  console.log(newString.concat(quword.slice(0, startIndex) + quword.slice(endIndex) + quword.slice(startIndex, endIndex)));
}


//var test = changeToPigLatin("quoz");
