const readlineSync = require('readline-sync');
 
// let countOfValue = readlineSync.question('Введите размер числа: ');
// let countOfTry = readlineSync.question('Введите количество попыток(Неограниченно = 0):')

function checkWin(valueRobot, valueHuman, countOfValue) {
    let countOfCow = 0 // Цифры совпадают и на своих местах
    let countOfBulls = 0 // Такая цифра есть в числе, но не на своем месте
    for(let i = 0; i < countOfValue; i++) {
        if(valueRobot.toString()[i] == valueHuman.toString()[i]) {
            countOfCow++
        }
        else {
            let valueRobot1 = valueRobot.toString()
            valueRobot1[i] = "*"
            if(valueRobot1.includes(valueHuman.toString()[i]))
            {
                countOfBulls++
            }
        }
    }
    console.log(countOfCow)
    console.log(countOfBulls)
}

checkWin(44443, 33334, 5)
