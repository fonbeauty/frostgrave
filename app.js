const request1 = new XMLHttpRequest()
request1.open('GET', 'https://fonbeauty.github.io/frostgrave/json/chronomancer_spells.json')
request1.responseType = 'json'
request1.send()
request1.onload = function () {
    const chronoSchoolObj = request1.response
    const chronoBlock = document.getElementById('chrono-block')
    const chronoSchool = document.getElementById('chrono-school')
    console.log(chronoSchoolObj);
    createSchoolNodes(chronoBlock, chronoSchool, chronoSchoolObj, 'chrono')
    addButtonClickEventListener(chronoSchoolObj)
}

const request2 = new XMLHttpRequest()
request2.open('GET', 'https://fonbeauty.github.io/frostgrave/json/elementalist_spells.json')
request2.responseType = 'json'
request2.send()
request2.onload = function () {
    const elementSchoolObj = request2.response
    const elemenеBlock = document.getElementById('element-block')
    const elementSchool = document.getElementById('element-school')
    console.log(elementSchoolObj);
    createSchoolNodes(elemenеBlock, elementSchool, elementSchoolObj, 'element')
    addButtonClickEventListener(elementSchoolObj)
}

const request3 = new XMLHttpRequest()
request3.open('GET', 'https://fonbeauty.github.io/frostgrave/json/enchanter_spells.json')
request3.responseType = 'json'
request3.send()
request3.onload = function () {
    const enchantSchoolObj = request3.response
    const enchantBlock = document.getElementById('enchant-block')
    const enchantSchool = document.getElementById('enchant-school')
    console.log(enchantSchoolObj);
    createSchoolNodes(enchantBlock, enchantSchool, enchantSchoolObj, 'enchant')
    addButtonClickEventListener(enchantSchoolObj)
}

const request4 = new XMLHttpRequest()
request4.open('GET', 'https://fonbeauty.github.io/frostgrave/json/illusionist_spells.json')
request4.responseType = 'json'
request4.send()
request4.onload = function () {
    const illusionSchoolObj = request4.response
    const illusionBlock = document.getElementById('enchant-block')
    const illusionSchool = document.getElementById('enchant-school')
    console.log(illusionSchoolObj);
    createSchoolNodes(illusionBlock, illusionSchool, illusionSchoolObj, 'enchant')
    addButtonClickEventListener(illusionSchoolObj)
}

function createSchoolNodes(nodeBlock, nodeSchool, schoolObj, school) {
    const spellList = document.createElement('div')
    setNodeAttribute(spellList, school + '-spells', 'spell-list')
    nodeBlock.appendChild(spellList)

    nodeSchool.addEventListener('click', function () {
        spellClickEventListener(spellList)
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
        const spellModDifficult = document.createElement('div')
        setNodeAttribute(spellModDifficult, school + '-spell__mod-difficult' + i, 'spell__mod-difficult', '+0')

        const spellCategory = document.createElement('div')
        setNodeAttribute(spellCategory, school + '-spell__category' + i, 'spell__category', schoolObj.spells[i].category)

        const spellDescription = document.createElement('div')
        setNodeAttribute(spellDescription, school + '-spell__description' + i, 'spell__description', schoolObj.spells[i].description)

        spellAttributeContainer.addEventListener('click', function () {
            spellClickEventListener(spellDescription)
        })

        spellContainer.appendChild(spellAttributeContainer)
        spellAttributeContainer.appendChild(spellName)
        spellAttributeContainer.appendChild(spellDifficult)
        spellAttributeContainer.appendChild(spellModDifficult)
        spellAttributeContainer.appendChild(spellCategory)
        spellContainer.appendChild(spellDescription)
        spellList.appendChild(spellContainer)
    }
}

function addButtonClickEventListener(schoolObj) {
    document.getElementById(schoolObj.schoolName).addEventListener('click', () => {
        stylingNodes(schoolObj.schoolName, 'lightblue', '0')
        for (let i = 0; i < schoolObj.alignedSchool.length; i++) {
            stylingNodes(schoolObj.alignedSchool[i], 'lightgreen', '2')
        }
        for (let i = 0; i < schoolObj.neutralSchool.length; i++) {
            stylingNodes(schoolObj.neutralSchool[i], 'khaki', '4')
        }
        stylingNodes(schoolObj.opposedSchool, 'tomato', '6')
    })
}

function stylingNodes(schoolName, color, difficult) {
    document.getElementById(schoolName).style.background = color
    document.getElementById(schoolName + '-block').style.background = color
    document.getElementById(schoolName + '-school__diff').textContent = '+' + difficult
    for (let element of document.querySelectorAll('#' + schoolName + '-spells > .spell')) {
        element.querySelector('.spell__mod-difficult').textContent = '+' + difficult
    }

}

function setNodeAttribute(node, idAttribute, classAttribute, nodeText = 'none') {
    node.setAttribute('id', idAttribute)
    node.setAttribute('class', classAttribute)
    if (nodeText != 'none') {
        node.textContent = nodeText
    }
}

function spellClickEventListener(element) {
    if (element.style.display === 'block') {
        element.style.display = 'none'
    } else {
        element.style.display = 'block'
    }
}




// let body = document.querySelector('body')

