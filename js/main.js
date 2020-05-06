"use script"
// String.prototype.pirmaRaide = function () {
//     return this[0];
// }
// console.log('tuygudud'.pirmaRaide() );


// String.prototype.PaskutineRaide = function () {
//     return this[this.length-1];
// }
// console.log('kazkasnaujo'.PaskutineRaide() );
// console.log('salamaleikum'.PaskutineRaide() );


String.prototype.toAlternatingCase = function (){
    console.log(this);

    let newText='';
    for(let i=0; i<this.length; i++){
        let naujaRaide = this[i];
        
        if(this[i]=== this[i].toLowerCase()){
            //jei raide mažoji!
            newText += this[i].toUpperCase();
        }
        else {
            //jei raide didžioji!
            newText += this[i].toLowerCase();
        }
    }   
    console.log(newText);
    
    return newText;
}

console.log ("hello world".toAlternatingCase() === "HELLO WORLD");
console.log ("Viktoras".toAlternatingCase() === "vIKTORAS");