radio.onReceivedString(function (receivedString) {
    wind_direction = receivedString.substr(3, 3)
    serial.writeLine("dir:" + receivedString.substr(3, 3))
})
radio.onReceivedValue(function (name, value) {
    if (name == "tmp") {
        temperature = Math.round(value)
        serial.writeValue("tmp", value)
    } else if (name == "prs") {
        pressure = value
        serial.writeValue("prs", value)
    } else if (name == "hum") {
        humidity = value
        serial.writeValue("hum", value)
    } else if (name == "ran") {
        rain = value
        serial.writeValue("ran", value)
    } else if (name == "spd") {
        wind_speed = Math.round(value)
        serial.writeValue("spd", value)
    }
})
let rain = 0
let humidity = 0
let pressure = 0
let wind_direction = ""
let wind_speed = 0
let temperature = 0
serial.redirectToUSB()
radio.setGroup(86)
makerbit.connectLcd(39)
makerbit.showStringOnLcd1602("Test", makerbit.position1602(LcdPosition1602.Pos1), 16)
while (true) {
    basic.showString("Temp")
    basic.showNumber(temperature)
    basic.showString("Wind")
    basic.showString("" + wind_speed + wind_direction)
}
