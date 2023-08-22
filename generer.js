"use strict";

//Lav en funktion der console.logger et tilfældigt tal fra og med 0 til og med 100

let rndNum = generateRandomNumber(100);

function generateRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

console.log(rndNum);

// Opdater din funktion så den skriver det tilfædige tal til HTML.

window.addEventListener("load", clickButton);

function clickButton() {
  document.querySelector("#button").addEventListener("click", newNumber);
}

function newNumber() {
  document.querySelector("#number").textContent = rndNum;
}
