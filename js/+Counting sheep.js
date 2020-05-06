"use strict"


function countSheeps(arrayOfSheep) {
  
    var sheepamount = 0;
    
    for( var i = 0; i < arrayOfSheep.length; i++) {
      
      if(arrayOfSheep[i]== true) {
        sheepamount++;
      }
    }
    return sheepamount;
  }
  
  
  var array1 = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true ];
  


    


console.log (countSheeps(array1) == 17, 'There are 17 sheeps in total')
