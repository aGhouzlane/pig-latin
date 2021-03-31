alert("hello");

const vowelArray = ['a', 'e', 'i', 'o', 'u'];

//Start with vowel => add 'way' to the end
//Start with consonant => move consecutive consonants to the end and + 'ay'
//words include 'qu' => move 'qu' to the end 
//start with y => move it to the end + 'ay'


function changeToPigLatin(text) {

  var wordArray = text.split(" ");

  wordArray.forEach(element => {
    for (let i = 0; i < vowelArray.length; i++) {
      if (element[0] === vowelArray[i]) {
        console.log("it's working");
      }
    }
  });

  return text;
}

var test = changeToPigLatin("ahmed");
console.log(test);