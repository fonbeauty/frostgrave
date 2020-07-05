// let chronomancer = []
//
// let spell = [Раскрошить - Crumble,]

const request1 = new XMLHttpRequest()

request1.open('GET', 'https://fonbeauty.github.io/frostgrave/json/chronomancer_spells.json')
request1.responseType = 'json'
request1.send()
request1.onload = function () {
    const chronomancerSpells = request1.response
    console.log(chronomancerSpells);
}

const request2 = new XMLHttpRequest()

request2.open('GET', 'https://fonbeauty.github.io/frostgrave/json/elementalist_spells.json')
request2.responseType = 'json'
request2.send()
request2.onload = function () {
    const elementalist = request2.response
    console.log(elementalist);
}



