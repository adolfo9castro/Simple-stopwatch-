/** Script that creates a stopwatch with its buttons
 * @author Adolfo Castro <github.com/adolfo9castro/>
 */

/** Get the app DOM
* @constant
*/
const app = document.getElementById('app')

/** Get config and title
* @constant
*/
const { InitTemplate, title } = config

/** Initialiced variables
* @variation
*/
let hours = 1,
    minutes = 1,
    secons = 1,
    milisecons = 1,
    id;

// Draw the init HTML tags in the dom
app.innerHTML = `<h3 class="display-4 text-center">${title}</h3>`
app.innerHTML += `
    <div class="row timeContainer">
    <span class="col timer hours">00</span>:
    <span class="col timer minutes">00</span>:
    <span class="col timer secons">00</span>:
    <span class="col timer milisecons">00</span>
    </div>`
app.innerHTML += InitTemplate

/** Create a buttons functionality 
 * @constant
*/
const start = document.getElementById("start")
const pause = document.getElementById("pause")
const reset = document.getElementById("reset")

/** Start counting
 *  @function 
 *  @returns {undefined}
 */
const startFunction = () => {
    id = setInterval(init, 10)
    start.removeEventListener("click", startFunction)
}

/** Pause the count
 *  @function 
 *  @returns {undefined}
 */
const pauseFunction = () => {
    clearInterval(id)
    start.addEventListener('click', startFunction)
}

/** Reset and finish the count
 *  @function 
 *  @returns {undefined}
 */
const resetFunction = () => {
    clearInterval(id)
    start.addEventListener('click', startFunction)
    hours = 1
    minutes = 1
    secons = 1
    milisecons = 1
    document.querySelector('.milisecons').innerHTML = '00'
    document.querySelector('.secons').innerHTML = '00'
    document.querySelector('.minutes').innerHTML = '00'
    document.querySelector('.hours').innerHTML = '00'
}

/** Initialize the stopwhatch
 *  @function 
 *  @returns {undefined}
 */
const init = () => {
    document.querySelector('.milisecons').innerHTML = milisecons < 10 ? `0${milisecons++}` : milisecons++
    if (milisecons > 100) {
        milisecons = 0
        document.querySelector('.milisecons').innerHTML = milisecons < 10 ? `0${milisecons++}` : milisecons++
        document.querySelector('.secons').innerHTML = secons < 10 ? `0${secons++}` : secons++
    }
    if (secons > 60) {
        secons = 0
        document.querySelector('.secons').innerHTML = secons < 10 ? `0${secons++}` : secons++
        document.querySelector('.minutes').innerHTML = minutes < 10 ? `0${minutes++}` : minutes++
    }
    if (minutes > 60) {
        minutes = 0
        document.querySelector('.minutes').innerHTML = minutes < 10 ? `0${minutes++}` : minutes++
        document.querySelector('.hours').innerHTML = hours < 10 ? `0${hours++}` : hours++
    }
    if (hours > 60) {
        hours = 0
        document.querySelector('.hours').innerHTML = hours < 10 ? `0${hours++}` : hours++
    }
}

// Add the event click to buttons to start the stopwhatch
start.addEventListener('click', startFunction)
pause.addEventListener('click', pauseFunction)
reset.addEventListener('click', resetFunction)
