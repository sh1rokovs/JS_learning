const readlineSync = require('readline-sync');
 
let countOfValue = +readlineSync.question('Введите размер числа: ');
let countOfTry = +readlineSync.question('Введите количество попыток(Неограниченно = 0): ')

function checkWin(valueRobot, valueHuman, countOfValue) { //return countOfCow, countOfBulls
    let valuesCow = []
    let valuesBulls = []
    let countOfCow = 0 // Цифры совпадают и на своих местах
    let countOfBulls = 0 // Такая цифра есть в числе, но не на своем месте
    for(let i = 0; i < countOfValue; i++) {
        if(valueRobot.toString()[i] == valueHuman.toString()[i]) {
            countOfCow++
            valuesCow.push(valueHuman.toString()[i])
        }
        else {
            let valueRobot1 = valueRobot.toString()
            valueRobot1[i] = "*"
            if(valueRobot1.includes(valueHuman.toString()[i]))
            {
                countOfBulls++
                valuesBulls.push(valueHuman.toString()[i])
            }
        }
    }
    return countOfCow, countOfBulls, valuesCow, valuesBulls
}

function getValueRobot(countOfValue) { //return valueRobot
    let valueRobot = ""
    for(let i = 0; i < countOfValue; i++) {
        valueRobot += Math.floor((Math.random() * 10) + 1).toString()
    }
    return valueRobot
}

if(countOfTry < 0) {
    countOfTry = 0
}
else if(countOfTry == 0){
    countOfTry = true
}

let valueRobot = getValueRobot(5)
while(countOfTry) {
    if(countOfTry != true){
        countOfTry--
    }

    let valueHuman = +readlineSync.question('Введите число: ')

    checkWin(valueRobot, valueHuman, countOfValue)
}

// checkWin(44443, 33334, 5)
// getValueRobot(5)

