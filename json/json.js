'use strict';

var jsonPracownicy = {
    "pracownicy": [
        {
            firstName: "Krystian",
            lastName: "Dziopa",            
        },
       {
            firstName: "Anna",
            lastName: "Szapiel",            
        },
       {
            firstName: "Piotr",
            lastName: "Żmuda",            
        },   ] };




console.log(jsonPracownicy);

jsonPracownicy.pracownicy.forEach( function (e, i) {
    console.log(e, i);
});
