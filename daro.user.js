// ==UserScript==
// @name         Daro
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
function displayCountdow(date){
    displayTime(date);
    var now = new Date();
    if(date.getTime() <= now.getTime()){
        submit();
    }else{
        setTimeout(function(){
            displayCountdow(date);
        }, 1000);
    }
}
function displayTime(date){
    var nouveauDiv = null;
    {
        nouveauDiv = document.getElementById("fbId");
        if(null !== nouveauDiv){
            nouveauDiv.parentNode.removeChild(nouveauDiv);
        }
        nouveauDiv = document.createElement("div");
        nouveauDiv.id = "fbId";
        nouveauDiv.style.fontWeight='bold';
        nouveauDiv.setAttribute("align", "center");
    }


    {
        var toDate = [date.getHours(),
                      date.getMinutes(),
                      date.getSeconds()].join(':');
        var newText2 = document.createElement("div");
        newText2.textContent = "Voter à : " + toDate;
        nouveauDiv.insertBefore(newText2, null);
    }
    {
        var rest = date.getTime() - new Date().getTime();
        rest = Math.round(rest / 1000);
        var hours   = Math.floor(rest / 3600);
        var minutes = Math.floor((rest - (hours * 3600)) / 60);
        var seconds = rest - (hours * 3600) - (minutes * 60);
        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        var display =   hours+':'+minutes+':'+seconds;

        var newText = document.createElement("div");
        newText.textContent = "Votez dans : " + display;
        nouveauDiv.insertBefore(newText, null);
    }


    span.insertBefore(nouveauDiv, null);
}
function dateAdds(date, h, m, s){
    date.setHours(date.getHours() + h );
    date.setMinutes(date.getMinutes() + m );
    date.setSeconds(date.getSeconds() + s );
}

// document.body.style.fontWeight='bold';

var b = document.querySelector("#corps > table > tbody > tr > td > div:nth-child(5) > ul > li:nth-child(2) > span > b");
var span = document.querySelector("#corps > table > tbody > tr > td > div:nth-child(5) > ul > li:nth-child(2) > span");
var text = b.innerHTML;
var res = text.split(":");

if(res.length == 1){
    submit();
}else{
    var date = new Date();
    dateAdds(date, parseInt(res[0]), parseInt(res[1]), parseInt(res[2]));
    displayCountdow(date);
}
