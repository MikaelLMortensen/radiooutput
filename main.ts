input.onButtonPressed(Button.A, function () {
    isInitialized = 1
    radio.sendValue("Knap", 1)
    basic.showString("A")
})
input.onButtonPressed(Button.AB, function () {
    isInitialized = 1
    radio.sendValue("Knap", 3)
    basic.showString("C")
})
input.onButtonPressed(Button.B, function () {
    isInitialized = 1
    radio.sendValue("Knap", 2)
    basic.showString("B")
})
radio.onReceivedValue(function (name, value) {
    isInitialized = 1
    if (name == "Knap" && value==1) {
        basic.showString("A")
    } else if (name == "Knap" && value==2) {
        basic.showString("B")
    } else if (name == "Knap" && value==3) {
        basic.showString("C")
    } else {
        basic.showString(name + ":" + (value))
    }
})
let isInitialized = 0
radio.setGroup(255)
basic.forever(function () {
    if (isInitialized == 0) {
        basic.showArrow(ArrowNames.West)
        basic.showArrow(ArrowNames.East)
    }
})
