"use strict";
//7. Запросіть у користувача суму покупки та виведіть суму до
//сплати зі знижкою: від 200 до 300 – знижка 3%, від 300 до
//500 – 5%, від 500 і вище – 7%.
//8. Запросіть у користувача довжину кола та периметр ква-
//драта. Визначте чи може таке коло поміститися у зазначе-
//ний квадрат.
//9. Задайте користувачеві 3 питання, у кожному питанні по 3
//варіанти відповіді. За кожну правильну відповідь нарахо-
//вується 2 бали. Після запитань виведіть користувачеві
//кількість набраних балів.
//10. Запросіть дату (день, місяць, рік) і виведіть наступну дату.
//Врахуйте можливість переходу на наступний місяць, рік,
//а також високосний рік.
//! 7
let isCount = true;
while (isCount) {
    const userPurchase = +prompt("Enter cost of your purchase");
    if (userPurchase < 200 || isNaN(userPurchase)) {
        alert("Somethin went wrong. Try again");
    }
    else if (userPurchase >= 200 && userPurchase < 300) {
        alert("Your amount with discount " + (userPurchase - (userPurchase * .03)));
        isCount = false;
    }
    else if (userPurchase >= 300 && userPurchase < 500) {
        alert("Your amount with discount " + (userPurchase - (userPurchase * .05)));
        isCount = false;
    }
    else if (userPurchase >= 500) {
        alert("Your amount with discount " + (userPurchase - (userPurchase * .07)));
        isCount = false;
    }
}
