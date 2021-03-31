
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

    // if (element[0] === vowelArray[i]) {
    //   console.log(newtext.concat(element.slice(1, 5) + element[0] + "way"));
    // }
    if (getCount(element, vowelArray) == 1) {
      console.log(newtext.concat(element.slice(1, 7) + element[0] + "ay"));

    }
    else if (getCount(element, vowelArray) == 2) {
      console.log(newtext.concat(element.slice(2, 8) + element[0] + element[1] + "ay"));
    }

  });

  return text;
}

function getCount(str, array) {

  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (str[0] !== vowelArray[i]) {
      counter++;
      break;
    }
  }

  if (str[1] !== 'a' && str[1] !== 'e' && str[1] !== 'i' && str[1] !== 'u') {
    counter++;
  }
  return counter;
}

// var test1 = getCount("mmaxwell", vowelArray);
// console.log(test1);



var test = changeToPigLatin("maxwell");
