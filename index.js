
//------------------------ Question 1---------------------------
//Write a function that ask the user for two numbers and return the product of them. But the challenge here is that you can't use the operator * (you can't make the product)
//hint: multiplication is a sequence of sums

 //@param {number} number1
 //@param {number} number2
 //@return {number} product


//The top answer is with user input and the latter is without

/*const multiplication = () => {
   numb1 = prompt( "please enter a number");
   numb2 = prompt( "please enter a number");
   product = 0
  for (let i = 0; i < +numb2; i++){
    product += +numb1;
    }
    alert(`The product is ${product}.`);
    }

multiplication();

*/

const multiplication = (numb1, numb2) => {
  let product = 0
  for (let i = 0; i < numb2; i++){
    product += numb1;
    }
    return product
    }
   
  console.log(multiplication( 8,5) ); 





const htmlTarget = document.getElementById('a-1')
htmlTarget.innerHTML = answer1



//------------------------ Question 2 ---------------------------
// Write a function that recieves a string as a parameter and evaluate each character of the string to determinate if the character is vowel or a consonant. you have to store each character on separates arrays, one for vowels and the other one for consonants.
// after separating the characters concatenate both arrays. ask the user if wants the vowels first or consonants first in the final array.
//hint:

//@param {string}
//@return {character} => array of characters
 const word = prompt ("Enter a word")
vowelOrConsonant = (str) => {
  let vowels = ["a", "e", "i", "o", "u"]
  let v = [];
  let c = [];
  for(let i = 0; i < str.length; i++){
      let char = str[i] //h
      if vowels.indexOf(char) === -1){

      }
    }
  return

}

//const answer2 = vowelOrConsonant()

const htmlTarget2 = document.getElementById('a-2')
htmlTarget2.innerHTML = answer2





//------------------------ Question 3 ---------------------------
//Now let's create a small game. The game consists in a player (ask the user for the name).The player has 3 oportunities to guess a number. The number is a random number between 10 - 50.
//If the player don't find the number, the program must displays an alert and stop the game, but if the player finds the number, then the program must show a congratulations message (alert) with the name of the player in upperCase letters and stop the game
//You must have to store the player information in a 'player' object. The Player object contains the following Properties:
// {string} name, {number} lives, {numbers} fail_numbers[]
//where: name, saves the name of the player. Lives, represents the remaining oportunities each time the player fails. Fail_numbers, is an array of numbers that stores the fail numbers the player has used

//@return {string} win / gameOver => the string that says if the user wasted the three oportunities showing the fails numbers or the name if the player wins
const player = {
  name:" ",
  lives: 2,//I know it's possible to start at 1 instead of zero.
  failnumbers:[]
}
player.name = prompt("Please enter your name")
const randomnumb = randomnumber();
let guess;
let message;


function randomnumber(){
   return Math.floor( Math.random() *50 ) +10;
}
for(let i = 1; i <= 3; i++){
  let lives = player.lives;
  let attempts = player.failnumbers;
  guess = prompt("guess a number between ten and fifty");
if( +guess === randomnumb ){
  message = alert(`Congratulations ${player.name.toUpperCase() } you guessed correctly`);
  break;
} if (+guess != randomnumb){
  player.lives--;
  attempts.push(guess);
  message = alert(`You have ${lives} guesses remaining`);
} if (player.lives <= -1)////the negative 1 is because lives starts at zero
 {
  message = alert(`Game over, you guessed ${player.failnumbers.join(", " )} none of those guesses were correct`);
}
}
console.log(player.failnumbers);


//------------------------ Question 4 ---------------------------
// In the function below we are giving you an array of objects, each one with the same properties. Ask to the user for 3 diferentes options to sorting the array from the highest to lowest. In the case of a string, the criteria to sort must be the length of the string. The first one is sorting the array of objects based on the title property.
// The second one sorting the array of objects based on the author property, the third one based on the library property. finally, the return value has to be the string sorted of the property selected separeted with a semicolon. Remember you have to sort all of the array based on the selected property
//example: if the user select sorting by title the return value must be: "Mockingjay: The Final Book of The Hunger Games; Walter Isaacson; The Road Ahead"

sort = () => {
let userrequest = prompt("how would you like these sorted? Title? Author? Library id?")

  var library = [
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];

  return
}

const answer4 = sort()

const htmlTarget4 = document.getElementById('a-4')
htmlTarget4.innerHTML = answer4
