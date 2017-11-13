// ==UserScript==
// @name         Daro GIT
// @namespace    lasoeur.fr
// @version      0.1
// @description  try to take over the world!
// @author       LaSoeur
// @match        https://daro.fr/?action=rotop
// @grant        none
// ==/UserScript==



function submit(){
    window.open('http://www.rotopserv.net/serveurs/daro/vote/32101197','_blank');
}

function sleep(s){
    if(s > 0){
        var span = document.querySelector("#corps > table > tbody > tr > td > div:nth-child(5) > ul > li:nth-child(2) > span");
        const nouveauDiv = document.createElement("div");
        nouveauDiv.id = "fbId";
        var display = "";
        if(s > 60){
            display = parseInt(s/ 60) + "minutes et ";
        }
        display = display + parseInt(s% 60) + " secondes";
        const nouveauContenu = document.createTextNode("Attente de : " + display);
        nouveauDiv.appendChild(nouveauContenu);

        var temp = document.getElementById("fbId");
        if(null !== temp){
            temp.parentNode.removeChild(temp);
        }
        span.insertBefore(nouveauDiv, null);
        setTimeout(function(){
            sleep( s - 1);
        }, 1000);
    }else{
        submit();
    }
}

document.body.style.fontWeight='bold';

var b = document.querySelector("#corps > table > tbody > tr > td > div:nth-child(5) > ul > li:nth-child(2) > span > b");
var text = b.innerHTML;
var res = text.split(":");
var h = res[0];
var m = res[1];
var s = res[2];

if(text == "maintenant"){
    submit();
}else{
    if(h < 1 && m < 1 && s < 3){
        setTimeout(function(){
            submit();
        }, 3);
    }else{
        var attente = 0;
        if(m > 0){
            attente = attente + (parseInt(m) * 60);
        }
        if(s > 0){
            attente = parseInt(attente) + parseInt(s);
        }
        sleep(attente);
    }
}
