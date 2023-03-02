input.onButtonPressed(Button.A, function () {
    basic.showNumber(tempmin)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(tempmax)
})
let tempmin = 0
let tempmax = 0
let température = input.temperature()
tempmax = température
tempmin = température
basic.forever(function () {
    basic.showString(".")
    température = input.temperature()
    if (température < tempmin) {
        tempmin = température
    }
    if (température > tempmax) {
        tempmax = température
    }
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
})
