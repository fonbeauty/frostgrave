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
    // showSchool(chronoBlock, chronoSchool, chronoSchoolObj, 'chrono')
    createSchoolNodes(chronoBlock, chronoSchool, chronoSchoolObj, 'chrono')

}

function createSchoolNodes(nodeBlock, nodeSchool, schoolObj, school) {
    const spellList = document.createElement('div')
    setNodeAttribute(spellList, school + '-spells', 'spell-list')
    nodeBlock.appendChild(spellList)
    // addSchoolEventListener
    nodeSchool.addEventListener('click', () => {
        if (spellList.style.display === 'block'){
            spellList.style.display = 'none'
        } else {
            spellList.style.display = 'block'
        }
    })

    for (let i = 0; i < schoolObj.spells.length; i++) {
        const spellContainer = document.createElement('div')
        setNodeAttribute(spellContainer, school + '-spell__container' + i, 'spell')

        const spellAttributeContainer = document.createElement('div')
        setNodeAttribute(spellAttributeContainer, school + '-spell__attribute-container' + i, 'spell__attribute-container')

        const spellName = document.createElement('div')
        setNodeAttribute(spellName, school + '-spell__name' + i, 'spell__name', schoolObj.spells[i].name)

        const spellDifficult = document.createElement('div')
        setNodeAttribute(spellDifficult, school + '-spell__difficult' + i, 'spell__difficult', schoolObj.spells[i].difficult)

        const spellCategory = document.createElement('div')
        setNodeAttribute(spellCategory, school + '-spell__category' + i, 'spell__category', schoolObj.spells[i].category)

        const spellDescription = document.createElement('div')
        setNodeAttribute(spellDescription, school + '-spell__description' + i, 'spell__description', schoolObj.spells[i].description)
        spellDescription.style.display = 'none'

        spellContainer.appendChild(spellAttributeContainer)
        spellAttributeContainer.appendChild(spellName)
        spellAttributeContainer.appendChild(spellDifficult)
        spellAttributeContainer.appendChild(spellCategory)
        spellContainer.appendChild(spellDescription)
        spellList.appendChild(spellContainer)
    }
}

function setNodeAttribute(node, idAttribute, classAttribute, nodeText = 'none') {
    node.setAttribute('id', idAttribute)
    node.setAttribute('class', classAttribute)
    if (nodeText != 'none') {
        node.textContent = nodeText
    }
}

function schoolClickEventListener(element){
    if (element.style.display === 'block'){
        element.style.display = 'none'
    } else {
        element.style.display = 'block'
    }
}


function showSchool(nodeBlock, nodeSchool, schoolObj, school) {
    nodeSchool.addEventListener('click', () => {
        const switcher = document.getElementById(school + '0')

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
    // showSchool(elemenеBlock, elementSchool, elementSchoolObj, 'element')
    createSchoolNodes(elemenеBlock, elementSchool, elementSchoolObj, 'element')
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

