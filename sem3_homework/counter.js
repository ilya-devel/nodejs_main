const fs = require('fs')
const path = require('path')

const fileCounter = path.join(__dirname, 'counter.json')

function loadCounter() {
    const counter = fs.readFileSync(fileCounter, {encoding: 'utf-8'})
    if (counter) {
        return JSON.parse(counter)
    } else {
        return {}
    }
}

function saveCounter(counter) {
    fs.writeFileSync(fileCounter, JSON.stringify(counter), { encoding: 'utf-8' })
}

function updateCounter(key) {
    const counter = loadCounter()
    counter[key] = counter[key] ? counter[key] + 1 : 1
    saveCounter(counter)
    return counter[key]
}

module.exports = { updateCounter }