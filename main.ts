let rezultat = 0
input.onButtonPressed(Button.A, function () {
    rezultat = 10 * 100
    basic.showNumber(rezultat)
})
input.onButtonPressed(Button.B, function () {
    rezultat = 100 / 10
    basic.showNumber(rezultat)
})
basic.forever(function () {
	
})
