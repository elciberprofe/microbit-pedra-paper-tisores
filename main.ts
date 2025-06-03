let mà = 0
input.onGesture(Gesture.Shake, function () {
    mà = randint(1, 3)
    if (mà == 1) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (mà == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
