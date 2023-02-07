function digitToText(num) {
    let numeral = ''
    let numArr = num.split([]);
    let revNumArr = numArr.reverse();
    if (revNumArr.includes('-')) numeral = 'минус ';

    if ((revNumArr.includes('-'))&&(numArr.length == 3)&&(numArr[1] == 1)&&(numArr[0] == 1))
        {numeral += 'одиннадцать';}
    if ((revNumArr.includes('-'))&&(numArr.length == 3)&&(numArr[1] == 1)&&(numArr[0] == 2))
        {numeral += 'двенадцать';}
    if ((revNumArr.includes('-'))&&(numArr.length == 3)&&(numArr[1] == 1)&&(numArr[0] == 3))
        {numeral += 'тринадцать';}
    if ((revNumArr.includes('-'))&&(numArr.length == 3)&&(numArr[1] == 1)&&(numArr[0] == 4))
        {numeral += 'черырнадцать';}
    if ((revNumArr.includes('-'))&&(numArr.length == 3)&&(numArr[1] == 1)&&(numArr[0] == 5))
        {numeral += 'пятнадцать';}
    if ((revNumArr.includes('-'))&&(numArr.length == 3)&&(numArr[1] == 1)&&(numArr[0] == 6))
        {numeral += 'шестнадцать';}
    if ((revNumArr.includes('-'))&&(numArr.length == 3)&&(numArr[1] == 1)&&(numArr[0] == 7))
        {numeral += 'семнадцать';}
    if ((revNumArr.includes('-'))&&(numArr.length == 3)&&(numArr[1] == 1)&&(numArr[0] == 8))
        {numeral += 'восемнадцать';}
    if ((revNumArr.includes('-'))&&(numArr.length == 3)&&(numArr[1] == 1)&&(numArr[0] == 9))
        {numeral += 'девятнадцать';}

    if ((revNumArr.includes('-'))&&(numArr[2])&&(numArr.length == 4)&&(numArr[1] == 1)) {
        switch (numArr[0]) {
            case '1': numeral += 'сто одиннадцать'; break;
            case '2': numeral += 'сто двеннадцать'; break;
            case '3': numeral += 'сто транадцать'; break;
            case '4': numeral += 'сто четырнадцать'; break;
            case '5': numeral += 'сто пятнадцать'; break;
            case '6': numeral += 'сто шестнадцать'; break;
            case '7': numeral += 'сто семнадцать'; break;
            case '8': numeral += 'сто восемнадцать'; break;
            case '9': numeral += 'сто девятнадцать'; break;
        }
    }
    
    if ((revNumArr.includes('-'))&&(numArr[2])&&(numArr.length >= 4)) {
        switch (numArr[2]) {
            case '1': numeral += 'сто '; break;
            case '2': numeral += 'двести '; break;
            case '3': numeral += 'триста '; break;
            case '4': numeral += 'четыреста '; break;
            case '5': numeral += 'пятьсот '; break;
            case '6': numeral += 'шестьсот '; break;
            case '7': numeral += 'семьсот '; break;
            case '8': numeral += 'восемьсот '; break;
            case '9': numeral += 'девятьсот '; break;
        }
    }
    if ((revNumArr.includes('-'))&&(numArr[1])&&(numArr.length >= 4)) {
        switch (numArr[1]) {
            case '1': numeral += 'десять '; break;
            case '2': numeral += 'двадцать '; break;
            case '3': numeral += 'тридцать '; break;
            case '4': numeral += 'сорок '; break;
            case '5': numeral += 'пятьдесят '; break;
            case '6': numeral += 'шестьдесят '; break;
            case '7': numeral += 'семьдесят '; break;
            case '8': numeral += 'восемьдесят '; break;
            case '9': numeral += 'девяносто '; break;
        }
    }
    if ((revNumArr.includes('-'))&&(numArr[0])&&(numArr.length >= 4)) {
        switch (numArr[0]) {
            case '1': numeral += 'один '; break;
            case '2': numeral += 'два '; break;
            case '3': numeral += 'три '; break;
            case '4': numeral += 'четыре '; break;
            case '5': numeral += 'пять '; break;
            case '6': numeral += 'шесть '; break;
            case '7': numeral += 'семь '; break;
            case '8': numeral += 'восемь '; break;
            case '9': numeral += 'девять '; break;
        }
    }

    console.log(numArr.length)
    console.log(numArr);
    console.log(numeral);
}
digitToText('-115')