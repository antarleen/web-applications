const highScore = document.querySelector('#highScore')
const p1Button = document.querySelector('#IncP1Point')
const p2Button = document.querySelector('#IncP2Point')
const buttons = document.querySelectorAll('button')


highScore.addEventListener('change', function () {
    for (button of buttons) {
        button.addEventListener('click', incScoreandReset)
        button.addEventListener('click', disableButtons)
        // button.addEventListener('click', colorFinalScore)
    }
})

function incScoreandReset() {
    let p1Point = parseInt(document.querySelector('#p1Score').innerText)
    let p2Point = parseInt(document.querySelector('#p2Score').innerText)
    if (this.id === 'IncP1Point') {
        p1Point++
        document.querySelector('#p1Score').innerText = p1Point
    }
    else if (this.id === 'IncP2Point') {
        p2Point++
        document.querySelector('#p2Score').innerText = p2Point
    }
    else if (this.id === 'Reset') {
        p1Score = document.querySelector('#p1Score')
        p2Score = document.querySelector('#p2Score')
        p1Score.innerText = '0'
        p2Score.innerText = '0'
        for (button of buttons) {
            button.disabled = false;
        }
        highScore.disabled = false;
        p1Score.classList.remove('has-text-success', 'has-text-danger')
        p2Score.classList.remove('has-text-success', 'has-text-danger')

    }
}

function disableButtons() {
    let p1Point = parseInt(document.querySelector('#p1Score').innerText)
    let p2Point = parseInt(document.querySelector('#p2Score').innerText)
    const maxPoints = parseInt(highScore.value)
    if (maxPoints === p1Point || maxPoints === p2Point) {
        for (button of [p1Button, p2Button]) {
            button.disabled = true;
        }
        highScore.disabled = true;
        colorFinalScore(p1Point, p2Point)
    }
}

function colorFinalScore(p1, p2) {
    console.log('Hi !')
    const maxPoints = parseInt(highScore.value)
    if (p1 === maxPoints) {
        document.querySelector('#p1Score').classList.add('has-text-success')
        document.querySelector('#p2Score').classList.add('has-text-danger')
    }
    else if (p2 === maxPoints) {
        document.querySelector('#p1Score').classList.add('has-text-danger')
        document.querySelector('#p2Score').classList.add('has-text-success')
    }
}