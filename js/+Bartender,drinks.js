"use strict"


function getDrinkByProfession(param){


    const loweCaseText=param.toLowerCase();
    let answer='';

    switch (loweCaseText) {
        case 'jabroni':
            answer ='Patron Tequila';
            break;
        case 'school counselor':
            answer ='Anything with Alcohol';
            break;
        case 'programmer':
            answer ='Hipster Craft Beer';
            break; 
        case 'bike gang member':
            answer ='Moonshine';
            break;
        case 'politician':
            answer ='Your tax dollars';
            break;
        case 'rapper':
            answer ='Cristal';
            break;

            default:
            answer ='Beer';
            break;
    }
    return answer;
   
}






console.log (getDrinkByProfession("jabrOni"), "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
console.log (getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
console.log (getDrinkByProfession("prOgramMer"), "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
console.log (getDrinkByProfession("bike ganG member"), "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
console.log (getDrinkByProfession("poLiTiCian"), "Your tax dollars", "'Politician' should map to 'Your tax dollars'");
console.log (getDrinkByProfession("rapper"), "Cristal", "'Rapper' should map to 'Cristal'");
console.log (getDrinkByProfession("pundit"), "Beer", "'Pundit' should map to 'Beer'");
console.log (getDrinkByProfession("Pug"), "Beer", "'Pug' should map to 'Beer'");
