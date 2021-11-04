// 1 #1
let h1_text = document.querySelector('h1')
let h1_ajout = h1_text.textContent = 'Les attributs class et id'
console.log(h1_text);

// 1 #2
let h2_text = document.querySelectorAll('h2')[0]
let h2_ajout = h2_text.textContent = 'Exercice 2 partie A'
console.log(h2_text);

// 1 #3
let h3_text = document.querySelectorAll('h2')[1]
let h3_ajout = h3_text.textContent = 'Exercice 2 partie B'
console.log(h3_text);

// 1 #4
let first_p = document.querySelectorAll('p')[0]
let p_ajout = first_p.textContent = "L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b>"
console.log(first_p);

// 1 #5
let second_p = document.querySelectorAll('p')[1]
let p_ajout_second = second_p.textContent = "L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b>par coeur</b>"
console.log(second_p);

// 2 #6
let first_h1 = document.querySelector('h1')
first_h1.setAttribute('id', 'bigTitle')
console.log(first_h1);

// 2 #7
let first_div = document.querySelector('div')
first_div.setAttribute('class', 'container')
console.log(first_div);

// 2 #8
let h2 = document.querySelectorAll('h2')
h2.forEach(element => {
    element.setAttribute('class', 'title')
});
console.log(h2);

// 2 #9
let p = document.querySelectorAll('p')
p.forEach(element => {
    element.setAttribute('class', 'text')
});
console.log(p);

// 2.2 #10
let section = document.querySelector('section')
section.setAttribute('class', 'margin-bottom border-black padding')
console.log(section);

// 2.2 #11
let section_2 = document.querySelectorAll('section')[1]
section_2.setAttribute('class', 'margin-top border-black padding')
console.log(section_2);

// 2.2 #12
let div_2 = document.querySelectorAll('div')[1]
// div_2.setAttribute('class', 'margin-top border-black padding')
div_2.setAttribute('style', 'background-color: blue; height: 20px; width: 20px')


