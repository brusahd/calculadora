let Simbolo = 0
let N1 = 0
let N2 = 0
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Simbolo += 1
    if (Simbolo == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (Simbolo == 3) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (Simbolo == 4) {
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            `)
    } else if (Simbolo == 5) {
        Simbolo = 0
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.A, function () {
    N1 += 1
    if (N1 == 10) {
        N1 = 1
    }
    basic.showNumber(N1)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    Simbolo = 0
    N1 = 0
    N2 = 0
})
input.onButtonPressed(Button.AB, function () {
    if (Simbolo == 1) {
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.pause(1000)
        basic.showNumber(N1 + N2)
    } else if (Simbolo == 3) {
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.pause(1000)
        basic.showNumber(N1 * N2)
    } else if (Simbolo == 4) {
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.pause(1000)
        basic.showNumber(N1 / N2)
    } else {
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
        basic.pause(1500)
        basic.showNumber(N1 - N2)
    }
})
input.onButtonPressed(Button.B, function () {
    N2 += 1
    if (N2 == 10) {
        N2 = 1
    }
    basic.showNumber(N2)
})
