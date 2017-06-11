'use strict';

var ostatniCheckbox = document.querySelectorAll('input[type=checkbox]'[2]);

var wszystkieZgody = document.querySelectorAll('input[type=checkbox]');


function IsEmpty(){ 

if(document.form.name.value == "null")
{
console.log('imie i nazwisko jest puste');
}
    return;
}

function IsEmptyy(){ 

if(document.form.email.value == "null")
{
console.log('email jest pusty');
}
    return;
}


document.getElementById("myBtn").addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "Hello World";
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
      
}