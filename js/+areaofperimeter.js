"use strict"

// ---------------------------------------Area of perimeter----------------------------



const areaOrPerimeter = function(l , w) {

  if ( l===w){ 
    return l*w;
  } else {
      return 2*l+2*w;
  } 
}

console.log (areaOrPerimeter(4 , 4) , 16);
console.log (areaOrPerimeter(6 , 10) , 32);