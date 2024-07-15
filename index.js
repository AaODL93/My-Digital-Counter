let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
let totalScore = 0
let score = document.getElementById("total-score")

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    totalScore += count
    count = 0
    countEl.textContent = count
    score.textContent = "Total score: " + totalScore
}