console.log('Hello Cullen');

// anonymous function
// function() {}

// declared function
// sound is a parameter
function kittyKat(sound, age) {
  // do the magic
  console.log('Meow');
  console.log('age:', age);

  return 'the Cat says: ' + sound;
}

function loopFruit(listOfFruit, searchFruit) {
  // is the searchFruit in the listOfFruit
  for (let i = 0; i < listOfFruit.length; i++) {
    const individualFruit = listOfFruit[i];
    console.log('individualFruit:',individualFruit);

    if (individualFruit === searchFruit) {
      return true;
    }
  }
  return false;
}

// function expression
const kittyKat2 = function() {
  // do some magic
  console.log('Fur Ball');
};

kittyKat2();

// function call
// 'Meow!!' - argument
console.log(kittyKat('Meow!!')); // Meow!!
const katSound = kittyKat('Meow, Meow!!', 4);
console.log(katSound);

const basketOfFruit = ['orange', 'apple', 'kiwi', 'grapefruit'];
const output = loopFruit(basketOfFruit, 'kittyKat');
loopFruit(basketOfFruit, 'apple');
loopFruit(basketOfFruit, 'kiwi');
console.log(output);
