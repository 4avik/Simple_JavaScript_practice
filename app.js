/* const heading = document.querySelector('.heading') //on ka olemas get element by id, querySelectorAll jms

heading.textContent ='TAK-22'

const papa = document.querySelector('.papa')
papa.textContent ='Arbuus'

const pets = ['Leochant', 'Lovi', 'Valk']

console.log(pets)

const petso = {
    a: "Leochant",
    b: "Lovi",
    c: "Valk"
  };

  for (let key in petso) {
    console.log(key + ": " + petso[key]);
  }
*/

//Geni näited

const orderedListElement = document.querySelector('.componentList')

const components = ['cpu', 'gpu', 'motherboard', 'ram', 'power supply']
components.forEach(component => { 
    const listItem = document.createElement('li')
    listItem.classList.add('list-item') 
    listItem.innerText = component
    orderedListElement.appendChild(listItem)
}) 

