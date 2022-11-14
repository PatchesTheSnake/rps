input.onButtonPressed(Button.A, function () {
    if (test == 1) {
        freq += 1
        messageing.connect(freq)
    } else if (test == 0) {
        messageing.sendString("con")
    } else if (test == -1) {
        if (rps == 3) {
            rps = 0
        }
        rps += 1
        if (rps == 1) {
            basic.showIcon(IconNames.Square)
        }
        if (rps == 2) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
        }
        if (rps == 3) {
            basic.showIcon(IconNames.Scissors)
        }
    }
})
function win (pl1: number, pl2: number) {
    if (pl1 > pl2) {
        if (pl1 == 3 && pl2 == 1) {
            return "you won"
        } else {
            return "opponent won"
        }
    } else if (pl1 < pl2) {
        if (pl2 == 3 && pl1 == 1) {
            return "opponent won"
        } else {
            return "you won"
        }
    }
    return "tie"
}
messageing.onReceivedString(function (receivedString) {
    if (receivedString == "con") {
        if (test == 1) {
            messageing.sendString("ok")
            // basic.showString("connected")
            test = -1
            basic.clearScreen()
            basic.showIcon(IconNames.Square)
        }
    } else if (receivedString == "ok") {
        // basic.showString("connected")
        basic.clearScreen()
        basic.showIcon(IconNames.Square)
        test = -1
    } else if (receivedString.substr(0, 2) == "12") {
        rpsr = parseFloat(receivedString.substr(2))
        if (sum == 1 && rpsr != 0) {
            basic.showString("" + (win(rps, rpsr)))
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    // if (rpsr == 1) {
    // basic.showIcon(IconNames.Square)
    // }
    // if (rpsr == 2) {
    // basic.showIcon(IconNames.SmallSquare)
    // }
    // if (rpsr == 3) {
    // basic.showIcon(IconNames.Scissors)
    // }
    if (test == 1) {
        test = 0
        messageing.connect(freq)
        messageing.sendString("con")
    } else if (test == -1) {
        test = -2
        messageing.sendString("12" + ("" + rps))
        sum = 1
        if (sum == 1 && rpsr != 0) {
            basic.showString("" + (win(rps, rpsr)))
        }
    } else if (test == -2) {
        basic.showString("" + (win(rps, rpsr)))
    }
})
input.onButtonPressed(Button.B, function () {
    if (test == 1) {
        freq += -1
        messageing.connect(freq)
    } else if (test == 0) {
        test = 1
    } else if (test == -1) {
        if (rps == 1) {
            rps = 4
        }
        rps += -1
        if (rps == 1) {
            basic.showIcon(IconNames.Square)
        }
        if (rps == 2) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
        }
        if (rps == 3) {
            basic.showIcon(IconNames.Scissors)
        }
    }
})
let test = 0
let rpsr = 0
let freq = 0
let rps = 0
let sum = 0
sum = 0
rps = 1
basic.showNumber(0)
radio.sendNumber(0)
freq = 10
rpsr = 0
test = 1
messageing.connect(freq)

        if (sum == 1 && rpsr != 0) {
            basic.showString("" + (win(rps, rpsr)))
        }
    

