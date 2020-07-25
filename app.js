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

        let tempNode = document.getElementById(schoolObj.schoolName)
        tempNode.style.background = 'lightblue'
        tempNode = document.getElementById(schoolObj.schoolName + '-block')
        tempNode.style.background = 'lightblue'
        document.getElementById(schoolObj.schoolName + '-school__diff').textContent = '+0'

        for (let i = 0; i < schoolObj.alignedSchool.length; i++) {
            tempNode = document.getElementById(schoolObj.alignedSchool[i])
            tempNode.style.background = 'lightgreen'
            tempNode = document.getElementById(schoolObj.alignedSchool[i] + '-block')
            tempNode.style.background = 'lightgreen'
            document.getElementById(schoolObj.alignedSchool[i] + '-school__diff').textContent = '+2'
            // tempNode.firstChild.textContent = ' +2'
            // tempNode.textContent = tempNode.textContent + ' +2'
        }
        for (let i = 0; i < schoolObj.neutralSchool.length; i++) {
            tempNode = document.getElementById(schoolObj.neutralSchool[i])
            tempNode.style.background = 'khaki'
            tempNode = document.getElementById(schoolObj.neutralSchool[i] + '-block')
            tempNode.style.background = 'khaki'
            document.getElementById(schoolObj.neutralSchool[i] + '-school__diff').textContent = '+4'
            // tempNode.textContent = tempNode.textContent + ' +4'
            // tempNode.firstChild.textContent = ' +4'
        }
        tempNode = document.getElementById(schoolObj.opposedSchool)
        tempNode.style.background = 'tomato'
        tempNode = document.getElementById(schoolObj.opposedSchool + '-block')
        tempNode.style.background = 'tomato'
        document.getElementById(schoolObj.opposedSchool + '-school__diff').textContent = '+6'

        // console.log('ololo ', document.getElementsByClassName('spell__difficult'))
        // tempNode.textContent = tempNode.textContent + ' +6'
        // tempNode.firstChild.textContent = ' +6'
    })
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


let body = document.querySelector('body')

