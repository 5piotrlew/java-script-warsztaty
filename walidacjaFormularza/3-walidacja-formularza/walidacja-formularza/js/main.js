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

wszystkieZgody.onchange = function(){
    console.log('klikniety');
    if (this.checked == true) {
        console.log("checked");
    } else {
        console.log("false");
    }
}