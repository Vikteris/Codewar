"use strict"


function century(year) {

  let centuryCount = 0;
  while (year > 0){
    year = year - 100;
    centuryCount = centuryCount + 1;
  }
  return centuryCount;


}


console.log (century(1705), 18, 'Testing for year 1705');
console.log (century(1900), 19, 'Testing for year 1900');
console.log (century(1601), 17, 'Testing for year 1601');
console.log (century(2000), 20, 'Testing for year 2000');
console.log (century(89), 1, 'Testing for year 89');


