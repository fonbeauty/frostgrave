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
    createSchoolNodes(chronoBlock, chronoSchool, chronoSchoolObj, 'chrono')
}

function createSchoolNodes(nodeBlock, nodeSchool, schoolObj, school) {
    const spellList = document.createElement('div')
    setNodeAttribute(spellList, school + '-spells', 'spell-list')
    nodeBlock.appendChild(spellList)

    nodeSchool.addEventListener('click', function () {
        clickEventListener(spellList)
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

        spellAttributeContainer.addEventListener('click', function () {
            clickEventListener(spellDescription)
        })

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

function clickEventListener(element) {
    if (element.style.display === 'block') {
        element.style.display = 'none'
    } else {
        element.style.display = 'block'
    }
}

const request2 = new XMLHttpRequest()

request2.open('GET', 'https://fonbeauty.github.io/frostgrave/json/elementalist_spells.json')
request2.responseType = 'json'
request2.send()
request2.onload = function () {
    const elementSchoolObj = request2.response
    console.log(elementSchoolObj);
    createSchoolNodes(elemenеBlock, elementSchool, elementSchoolObj, 'element')
}


let body = document.querySelector('body')

