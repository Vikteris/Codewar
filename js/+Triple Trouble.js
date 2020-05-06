"use strict"

function tripleTrouble(one, two, three){
    
    let words = '';

    for(let i=0; i<one.length; i++){
        words += one[i] + two[i] + three[i];
    }
        
    return words;
}


console.log (tripleTrouble("this","test","lock"), "ttlheoiscstk");
console.log (tripleTrouble("aa","bb","cc"), "abcabc");
console.log (tripleTrouble("Bm", "aa", "tn"), "Batman");
console.log (tripleTrouble("LLh","euo","xtr"), "LexLuthor");
