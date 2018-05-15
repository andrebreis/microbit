let lastSent = 0
input.onButtonPressed(Button.A, () => {
    radio.sendNumber(lastSent)
    lastSent += 1
    basic.showLeds(`
        # # # # #
        # # . # #
        # . # . #
        # . . . #
        # # # # #
        `)
})
input.onButtonPressed(Button.AB, () => {
    lastSent = 0
    radio.sendNumber(-1)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showString("RESET")
})
radio.setGroup(0)
radio.setTransmitPower(7)
lastSent = 0
