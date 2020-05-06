"use strict"

function correctPolishLetters (string) {
  
  
  // let letters = {'ą':'a', 'ć':'c', 'ę':'e', 'ł':'l','ń':'n', 'ó':'o', 'ś':'s', 'ź':'z', 'ż':'z'};

  let changed = '';
    for(let i=0; i<string.length; i++){
      if(string[i]=== 'ą'){
        changed += 'a';
      }
      else if(string[i]=== 'ć'){
        changed += 'c';
      }
      else if(string[i]=== 'ę'){
        changed += 'e';
      }
      else if(string[i]=== 'ł'){
        changed += 'l';
      }
      else if(string[i]=== 'ń'){
        changed += 'n';
      }
      else if(string[i]=== 'ó'){
        changed += 'o';
      }
      else if(string[i]=== 'ś'){
        changed += 's';
      }
      else if(string[i]=== 'ź'){
        changed += 'z';
      }
      else if(string[i]=== 'ż'){
        changed += 'z';
      }
      else{
      changed += string[i];
      }
    }
    return changed;

}
console.log (correctPolishLetters("Jędrzej Błądziński"),"Jedrzej Bladzinski");
console.log (correctPolishLetters("Lech Wałęsa"),"Lech Walesa");
console.log (correctPolishLetters("Maria Skłodowska-Curie"),"Maria Sklodowska-Curie");
