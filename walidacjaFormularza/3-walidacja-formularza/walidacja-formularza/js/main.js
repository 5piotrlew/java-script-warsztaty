'use strict';

/*var ostatniCheckbox = document.querySelectorAll('input[type=checkbox]'[2]);
var wszystkieZgody = document.querySelectorAll('input[type=checkbox]');
function IsEmpty(){ 
if(document.form.name.value == "")
{
console.log('imie i nazwisko jest puste');
}
    return;
}
function IsEmptyy(){ 
if(document.form.email.value == "")
{
console.log('email jest pusty');
}
    return;
}
document.getElementById("myBtn").addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "Hello World";
    document.querySelectorAll('input[type=checkbox]'[2]);
});
function checkboxState() {
    //przekazac stan ostatniego checkbox true lub false     
    if (ostatniCheckbox.checked == true) {
        wszystkieZgody.checked;
        console.log('wszystkie zgody zaznaczone');        
    }
    else {
        console.log('ostatni checkbox niezaznaczony');
    }     
}*/

console.log("Hej");

var wszystkieZgody = document.getElementById("wszystkie-zgody");

var wszystkieCheckboxy = document.querySelectorAll("input[type=checkbox]");

var zgodaMarketingowa1 = document.getElementById("zgoda-marketingowa-1");
var zgodaMarketingowa2 = document.getElementById("zgoda-marketingowa-2");

var wyslijBtn = document.getElementById("wyslij");

var inputImie = document.getElementById("name");
var inputEmail = document.getElementById("email");

var wiadomosc = document.getElementById("wiadomosc");

console.log(wszystkieZgody);
console.log(wszystkieCheckboxy);


/*

wszystkieZgody.addEventListener('click', function (e) {
    if (wszystkieZgody.checked == true) {
        console.log("checked");
    } else {
        console.log("false");
    }

});*/

function stanCheckboxa() {
    zgodaMarketingowa1.checked = this.checked;
    zgodaMarketingowa2.checked = this.checked;

    zgodaMarketingowa1.disabled = this.checked;
    zgodaMarketingowa2.disabled = this.checked;
}

wszystkieZgody.onchange = stanCheckboxa;

/*wszystkieZgody.onchange = function(){
    console.log('klikniety');
    if (this.checked == true) {
        console.log("checked");
        document.getElementById("zgoda-marketingowa-2").checked = true;
    } else {
        console.log("false");
        document.getElementById("zgoda-marketingowa-2").checked = false;
    }
}*/

function walidujFormularz(event) {

   wiadomosc.innerHTML = '<ul id="wiadomosc"></ul>';

    
    if (inputImie.value.trim() == "") {
        var msgImie = document.createElement("li");
        msgImie.innerHTML = "wpisz imie!";
        wiadomosc.appendChild(msgImie);

        event.preventDefault();
    } 

    if (inputEmail.value.trim() == "") {
        var msgEmail = document.createElement("li");
        msgEmail.innerHTML = "wpisz email!";
        wiadomosc.appendChild(msgEmail);
        
        event.preventDefault();
    } 

    if (! zgodaMarketingowa1.checked) {
        var msgZgodaMarketingowa1 = document.createElement("li");
        msgZgodaMarketingowa1.innerHTML = "nie wyraziles zgody!";
        wiadomosc.appendChild(msgZgodaMarketingowa1);
    } 
}

wyslijBtn.addEventListener('click', walidujFormularz);