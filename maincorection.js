//1 
let exo1 = document.querySelector('h1')
exo1.innerText = "Les attributs class et id"

let exo2 = document.querySelector("h2")
exo2.innerText = "Exercice 2 partie A"

let exo3 = document.querySelectorAll('h2')[1]
exo3.innerText = "Exercice 2 partie B"

let exo4 = document.querySelector('p')
exo4.innerHTML = "L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b> "

let exo5 = document.querySelectorAll('p')[1]
exo5.innerHTML = "La manipulation de l'attribut Style peut-être une <i>solution</i> rapide"

exo1.setAttribute('id', "bigTitle")
let recupDiv = document.querySelector('div')
recupDiv.setAttribute('class', "container")

let exo8 = document.querySelectorAll('h2')
let arrExo8 = Array.from(exo8)

arrExo8.forEach(el => {
    el.setAttribute('class', "title")
});

let allP = document.querySelectorAll('p')
let arrP = Array.from(allP)

arrP.forEach(el => {
    el.setAttribute("class", "text")
});

let section = document.querySelectorAll('section')
section[0].setAttribute('class', 'margin-bottom border-black padding')

section[1].setAttribute('class', "margin-top border-black padding")

let myDiv = section[1].querySelector('div')
console.log(myDiv);
myDiv.style.height = "20px"
myDiv.style.width = "20px"
myDiv.style.backgroundColor = "blue"
myDiv.style.border = "1px solid black"