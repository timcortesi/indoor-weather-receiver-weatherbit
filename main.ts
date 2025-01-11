radio.onReceivedString(function (receivedString) {
    wind_direction = receivedString.substr(3, 1)
})
radio.onReceivedValue(function (name, value) {
    if (name == "tmp") {
        temperature = Math.round(value / 100 * (9 / 5) + 32)
    } else if (name == "prs") {
        pressure = value
    } else if (name == "hum") {
        humidity = value
    } else if (name == "alt") {
        humidity = value
    } else if (name == "ran") {
        rain = value
    } else if (name == "spd") {
        wind_speed = Math.round(value)
    }
})
let rain = 0
let humidity = 0
let pressure = 0
let wind_direction = ""
let wind_speed = 0
let temperature = 0
radio.setGroup(86)
makerbit.connectLcd(39)
makerbit.showStringOnLcd1602("Test", makerbit.position1602(LcdPosition1602.Pos1), 16)
while (true) {
    basic.showString("Temp")
    basic.showNumber(temperature)
    basic.showString("Wind")
    basic.showString("" + (wind_speed))
    basic.showString(wind_direction)
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(5000)
}
