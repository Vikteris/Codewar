"use strict"


function guessBlue(blueStart, redStart, bluePulled, redPulled) {
 
  const bagLeft= (blueStart+redStart)-(bluePulled+redPulled);
  let blueLeft = blueStart -bluePulled;
  let main= blueLeft / bagLeft;

  return main;
}  



console.log (guessBlue(5, 5, 2, 3), 0.6);
console.log (guessBlue(5, 7, 4, 3), 0.2);
console.log (guessBlue(12, 18, 4, 6), 0.4);


