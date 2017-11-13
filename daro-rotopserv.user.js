// ==UserScript==
// @name         Daro Rotopserv
// @namespace    lasoeur.fr
// @version      0.1
// @description  Procède au calcule
// @author       LaSoeur
// @match        http://www.rotopserv.net/serveurs/daro/vote/32101197*
// @grant        none
// ==/UserScript==


function getCalcul(t){
    var c = null;
    if(t == "*" || t == "fois"){
        c = "*";
    }else if(t == "/" || t == "divisé" ){
        c = "/";
    }else if(t == "-" || t == "moins"){
        c = "-";
    }else if(t == "+" || t == "plus"){
        c = "+";
    }
    return c;
}

function getNb(t){
    var nb = null;
    try {
        nb = parseInt(t);
        if(isNaN(nb)){
            throw "";
        }
    }catch(e){
        if(t == "un"){
            nb = 1;
        }else if(t == "zero"){
            nb = 0;
        }else if(t == "deux"){
            nb = 2;
        }else if(t == "trois"){
            nb = 3;
        }else if(t == "quatre"){
            nb = 4;
        }else if(t == "cinq"){
            nb = 5;
        }else if(t == "six"){
            nb = 6;
        }else if(t == "sept"){
            nb = 7;
        }else if(t == "huit"){
            nb = 8;
        }else if(t == "neuf"){
            nb = 9;
        }
    }
    return nb;
}
var b = document.querySelector("body > div.main > div.module-popup.active > div.popup > form > section > table > tbody > tr > td:nth-child(1) > label");
var text = b.innerHTML;
var res = text.split(" ");
console.log(res);

var un, calcul, deux;
if(res[0] == "Calculez"){
    un = getNb(res[1]);
    calcul = getCalcul(res[2]);
    deux = getNb(res[3]);
}else if(res[0] == "Combien"){
    un = getNb(res[2]);
    calcul = getCalcul(res[3]);
    deux = getNb(res[4]);
}




console.log(un + " " + calcul + " " + deux);
var result = eval(un + " " + calcul + " " + deux);
console.log(result);
var f = document.querySelector("body > div.main > div.module-popup.active > div.popup > form > section > table > tbody > tr > td:nth-child(2) > input[type=\"text\"]");
f.value =  result;
/*setTimeout(
  function()
  {
      console.log(document.querySelector("#recaptcha-anchor > div.recaptcha-checkbox-checkmark"));
    //do something special
  }, 5000);
*/
