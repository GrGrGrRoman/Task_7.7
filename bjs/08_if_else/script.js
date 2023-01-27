let minValue = parseInt(prompt('Минимальное значение числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное значение числа для игры','100'));
if (isNaN(minValue) || isNaN(maxValue)) { //если введено не число, то значения устанавливаются по умолчанию
    minValue = 0;
    maxValue = 100;
    //console.log(minValue);
    //console.log(maxValue);
}
if (minValue <= -1000) { //если число меньше допустимого, то устанавливается нижняя граница
    minValue = -999;
}
if (maxValue >= 1000) { //если число больше допустимого, то устанавливается верхняя граница
    maxValue = 999;
}
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;


const orderNumberField = document.querySelector('#orderNumberField');
const answerField = document.querySelector('#answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.querySelector('#btnRetry').addEventListener('click', function () {
    //minValue = 0;
    //maxValue = 100;
    minValue = parseInt(prompt('Минимальное значение числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное значение числа для игры','100'));
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    orderNumber = null + 1;
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
    gameRun = true;
})

document.querySelector('#btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random(1) * 3);
            if (phraseRandom === 1) {
                let answerPhrase = `Значит, больше чем\n ${answerNumber} \u{1F914} ?`;
                answerField.innerText = answerPhrase; 
            } 
            if (phraseRandom === 2){
                let answerPhrase = `Пусть будет ...\n ${answerNumber} \u{1F928}`;
                answerField.innerText = answerPhrase;
            } 
            if (phraseRandom === 3){
                let answerPhrase = `Ещё больше\n ${answerNumber} \u{1F914} ?`;
                answerField.innerText = answerPhrase;
            }
        }
    }
})

document.querySelector('#btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random(1) * 5);
            if (phraseRandom === 1) {
                let answerPhrase = `Значит, меньше чем\n ${answerNumber} \u{1F914}`;
                answerField.innerText = answerPhrase; 
            } 
            if (phraseRandom === 2) {
                let answerPhrase = `Пусть будет ...\n ${answerNumber} \u{1F928}`;
                answerField.innerText = answerPhrase;
            } 
            if (phraseRandom === 3) {
                let answerPhrase = `Тогда так ...\n ${answerNumber} \u{1F914}`;
                answerField.innerText = answerPhrase;
            } 
            if (phraseRandom === 4) {
                let answerPhrase = `А может быть\n ${answerNumber} \u{1F928} ?`;
                answerField.innerText = answerPhrase;
            } 
            if (phraseRandom === 5) {
                let answerPhrase = `Еще меньше\n ${answerNumber} \u{1F914} ?`;
                answerField.innerText = answerPhrase;
            }
        }
    }
})

document.querySelector('#btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round(Math.random(1) * 3);
        if (phraseRandom ===1) {
            let answerPhrase = `Как всегда угадал\n\u{1F601}`
            answerField.innerText = answerPhrase;
        }
        if (phraseRandom ===2) {
            let answerPhrase = `Я тебя сделал\n\u{1F61D} !`
            answerField.innerText = answerPhrase;
        }
        if (phraseRandom ===3) {
            let answerPhrase = `Я всегда угадываю\n\u{1F60E}`
            answerField.innerText = answerPhrase;
        }
        gameRun = false;
    }
})

