// let chronomancer = []
//
// let spell = [Раскрошить - Crumble,]

const request1 = new XMLHttpRequest()
const chronoBlock = document.getElementById('chronomancer-block')
const elemenеBlock = document.getElementById('elementalist-block')
const chronoSchool = document.getElementById('chronomancer-school')
const elementSchool = document.getElementById('elementalist-school')

request1.open('GET', 'https://fonbeauty.github.io/frostgrave/json/chronomancer_spells.json')
request1.responseType = 'json'
request1.send()
request1.onload = function () {
    const chronoSchoolObj = request1.response

    console.log(chronoSchoolObj);
    // showSpells(chronomancerSchool)
    showSchool(chronoBlock, chronoSchool, chronoSchoolObj, 'chrono')

}

function showSchool(nodeBlock, nodeSchool, schoolObj, school) {
    nodeSchool.addEventListener('click', () => {
        const switcher = document.getElementById(school +'0')

        if (!switcher) {
            spellsList = document.createElement('ul')
            nodeBlock.appendChild(spellsList)
            for (let i = 0; i < schoolObj.spells.length; i++) {
                const listItem = document.createElement('li')
                listItem.setAttribute('id', school + i)
                listItem.setAttribute('class', 'spell')
                listItem.textContent = schoolObj.spells[i].name
                spellsList.appendChild(listItem)
            }
        } else {

        }
    })

}

const request2 = new XMLHttpRequest()

request2.open('GET', 'https://fonbeauty.github.io/frostgrave/json/elementalist_spells.json')
request2.responseType = 'json'
request2.send()
request2.onload = function () {
    const elementSchoolObj = request2.response
    console.log(elementSchoolObj);
    // showSpells(elementalistSchool)
    showSchool(elemenеBlock, elementSchool, elementSchoolObj, 'element')
}


function showSpells(schoolObject) {
    let schoolBlock = document.createElement('div')
    // let schoolName = document.createElement('h2')
    // schoolName.textContent = schoolObject.schoolName
    schoolBlock.innerHTML = "<h2>" + schoolObject.schoolName + "</h2>"
    // schoolBlock.appendChild(schoolName)
    body.appendChild(schoolBlock)

    const spells = schoolObject['spells']
    for (let i = 0; i < spells.length; i++) {
        const spellBlock = document.createElement('div')
        const spellName = document.createElement('h3')
        const spellInnerBlock = document.createElement('div')
        const schoolName = document.createElement('h3')
        const spellDifficult = document.createElement('h3')
        const spellCategory = document.createElement('h3')
        const spellDescription = document.createElement('p')

        spellName.textContent = spells[i].name
        spellName.setAttribute('class', 'spell-name')
        schoolName.textContent = schoolObject.schoolName
        schoolName.setAttribute('class', 'spell_flex__school-name')
        spellDifficult.textContent = spells[i].difficult
        spellDifficult.setAttribute('class', 'spell_flex__difficult')
        spellCategory.textContent = spells[i].category
        spellCategory.setAttribute('class', 'spell_flex__spell-category')
        spellDescription.textContent = spells[i].description

        spellInnerBlock.setAttribute('class', 'spell-flex')
        spellInnerBlock.appendChild(schoolName)
        spellInnerBlock.appendChild(spellDifficult)
        spellInnerBlock.appendChild(spellCategory)

        spellBlock.appendChild(spellName)
        spellBlock.appendChild(spellInnerBlock)
        spellBlock.appendChild(spellDescription)

        schoolBlock.appendChild(spellBlock)
    }


}

let body = document.querySelector('body')

