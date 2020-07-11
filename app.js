// let chronomancer = []
//
// let spell = [Раскрошить - Crumble,]

const request1 = new XMLHttpRequest()

request1.open('GET', 'https://fonbeauty.github.io/frostgrave/json/chronomancer_spells.json')
request1.responseType = 'json'
request1.send()
request1.onload = function () {
    const chronomancerSchool = request1.response
    console.log(chronomancerSchool);
    showSpells(chronomancerSchool)
}

const request2 = new XMLHttpRequest()

request2.open('GET', 'https://fonbeauty.github.io/frostgrave/json/elementalist_spells.json')
request2.responseType = 'json'
request2.send()
request2.onload = function () {
    const elementalistSchool = request2.response
    console.log(elementalistSchool);
}

function showSpells(schoolObject) {
    let schoolBlock = document.createElement('div')
    // let schoolName = document.createElement('h2')
    // schoolName.textContent = schoolObject.schoolName
    schoolBlock.innerHTML = "<h2>" + schoolObject.schoolName + "</h2>"
    // schoolBlock.appendChild(schoolName)
    body.appendChild(schoolBlock)

    const spells = schoolObject['spells']
    for (let i = 0; i < spells.length; i++ ){
        const spellBlock = document.createElement('div')
        const spellName = document.createElement('h2')
        const spellDifficult = document.createElement('h3')
        const spellCategory = document.createElement('h3')
        const spellDescription = document.createElement('p')

        spellName.textContent = spells[i].name
        spellDifficult.textContent = spells[i].difficult
        spellCategory.textContent = spells[i].category
        spellDescription.textContent = spells[i].description

        spellBlock.appendChild(spellName)
        spellBlock.appendChild(spellDifficult)
        spellBlock.appendChild(spellCategory)
        spellBlock.appendChild(spellDescription)

        schoolBlock.appendChild(spellBlock)
    }


}

let body = document.querySelector('body')

