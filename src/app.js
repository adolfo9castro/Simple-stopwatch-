const app = document.getElementById('app')

const { InitTemplate, title } = config

let hours = 1,
    minutes = 1,
    secons = 1,
    milisecons = 1,
    id;
app.innerHTML = `<h3 class="display-4 text-center">${title}</h3>`
app.innerHTML += `
    <div class="row timeContainer">
    <span class="col timer hours">${hours === "00" ? 0 : "00"}</span>:
    <span class="col timer minutes">${minutes === "00" ? 0 : "00"}</span>:
    <span class="col timer secons">${secons === "00" ? 0 : "00"}</span>:
    <span class="col timer milisecons">${milisecons === "00" ? 0 : "00"}</span>
    </div>`
app.innerHTML += InitTemplate

const start = document.getElementById("start")
const pause = document.getElementById("pause")
const reset = document.getElementById("reset")

const startFunction = () => {
    id = setInterval(cronometro, 10)
}
const pauseFunction = () => {
    clearInterval(id)
}
const resetFunction = () => {
    clearInterval(id)
    hours = 1
    minutes = 1
    secons = 1
    milisecons = 1
    document.querySelector('.milisecons').innerHTML = '00'
    document.querySelector('.secons').innerHTML = '00'
    document.querySelector('.minutes').innerHTML = '00'
    document.querySelector('.hours').innerHTML = '00'
}
const cronometro = () => {
    document.querySelector('.milisecons').innerHTML = milisecons++
    if (milisecons > 99) {
        milisecons = 0
        document.querySelector('.secons').innerHTML = secons < 10 ? `0${secons++}` : secons++
        if (secons >= 59) {
            secons = 0
            document.querySelector('.minutes').innerHTML = minutes < 10 ? `0${minutes++}` : minutes++
            if (minutes >= 59) {
                minutes = 0
                document.querySelector('.hours').innerHTML = hours < 10 ? `0${hours++}` : hours++
            }
        }
    }

}

start.addEventListener('click', startFunction)
pause.addEventListener('click', pauseFunction)
reset.addEventListener('click', resetFunction)
