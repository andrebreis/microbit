let lastReceived = 0
radio.onDataPacketReceived( ({ receivedNumber }) =>  {
    if (receivedNumber == -1) {
        if (receivedNumber != 0) {
            lastReceived = receivedNumber
            radio.sendNumber(receivedNumber)
        }
    } else {
        if (receivedNumber > lastReceived) {
            music.playTone(988, music.beat(BeatFraction.Whole))
            music.playTone(988, music.beat(BeatFraction.Whole))
	        music.playTone(988, music.beat(BeatFraction.Whole))
            radio.sendNumber(receivedNumber)
                lastReceived = receivedNumber
                basic.showLeds(`
                    . # # # .
                    # . # . #
                    # . # # #
                    # . . . #
                    . # # # .
                    `)
            }
    }
})
input.onButtonPressed(Button.AB, () => {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.A, () => {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, () => {
    basic.showIcon(IconNames.Happy)
})
lastReceived = -1
radio.setGroup(0)
radio.setTransmitPower(7)

