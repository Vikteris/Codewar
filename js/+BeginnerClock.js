"use strict"

function past(h, m, s){
 
return (1000*s)+(m*60000)+(h*3600000);
  
}


      console.log (past(0,1,1),61000)
      console.log (past(1,1,1),3661000)
      console.log (past(0,0,0),0)
      console.log (past(1,0,1),3601000)
      console.log (past(1,0,0),3600000)