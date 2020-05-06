"use strict"



function hero(bullets, dragons){

if( bullets>= dragons*2){
    return true;
} else {
    return false;
}
}

// vienam drakonui reikia 2 kulku, pasiima random kieki kulku kad nukaltu random kieki drakonu


console.log (hero(10, 5), true); //* kad nukalt 5 drakonus reik deskau kulktu, tai true
console.log (hero(7, 4), false); //* kad nukalt 4 draktonus reikia 8 kulku, tai false
console.log (hero(4, 5), false); //* kad nukalt 5 drakonus, reik 10 ammo, tj false
console.log (hero(100, 40), true); //* kad nukalt 40 drakonu, reikia 80 ammo, tai true, 20 ammo magaryčioms liek
console.log (hero(1500, 751), false); //* kad nukalt 751, reik 1502 kulku, tai false.
console.log (hero(0, 1), false); //* kad nukalt 1 drakona, reik išvis kulku turet, tai false.
