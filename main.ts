input.onButtonPressed(Button.A, function () {
    radio.sendValue("Knap", 1)
    basic.showString("A")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("Knap", 3)
    basic.showString("C")
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("Knap", 2)
    basic.showString("B")
})
radio.setGroup(255)
basic.forever(function () {
	
})
