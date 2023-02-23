//! 7

//7. Запросіть у користувача суму покупки та виведіть суму до
//сплати зі знижкою: від 200 до 300 – знижка 3%, від 300 до
//500 – 5%, від 500 і вище – 7%.




//let isCount: boolean = true

//while (isCount) {

//	const userPurchase: number | null = +prompt("Enter cost of your purchase")
//	if (userPurchase < 200 || isNaN(userPurchase)) {
//		alert("Something went wrong. Try again")
//	} else if (userPurchase >= 200 && userPurchase < 300) {
//		alert("Your amount with discount " + (userPurchase - (userPurchase * .03)))
//		isCount = false
//	} else if (userPurchase >= 300 && userPurchase < 500) {
//		alert("Your amount with discount " + (userPurchase - (userPurchase * .05)))
//		isCount = false
//	} else if (userPurchase >= 500) {
//		alert("Your amount with discount " + (userPurchase - (userPurchase * .07)))
//		isCount = false
//	}
//}

//! 8

//8. Запросіть у користувача довжину кола та периметр ква-
//драта. Визначте чи може таке коло поміститися у зазначе-
//ний квадрат.



//let side: number
//let isRunning: boolean = true
//while (isRunning) {
//	const perimeterOfTheSquare: number | null = +prompt("Enter the perimeter of the square")

//	if (isNaN(perimeterOfTheSquare) || perimeterOfTheSquare <= 0) {
//		alert("Something went wrong. Try again.")
//	} else {
//		side = sideOfSquare(perimeterOfTheSquare)
//		console.log(side);

//		isRunning = false
//	}
//}

//let diameter: number
//let isTrying: boolean = true
//while (isTrying) {
//	const lengthOfTheCircle: number | null = +prompt("Enter the length of the circle")
//	if (isNaN(lengthOfTheCircle) || lengthOfTheCircle <= 0) {
//		alert("Something went wrong. Try again.")
//	} else {
//		diameter = diameterOfCircle(lengthOfTheCircle)

//		console.log(diameter);
//		isTrying = false
//	}
//}


//if (diameter <= side) {
//	alert("This circle is placed in this square")

//} else {
//	alert("This circle is not placed in this square")
//}


//function sideOfSquare(perimeterOfTheSquare) {

//	return perimeterOfTheSquare / 4
//}


//function diameterOfCircle(lengthOfTheCircle) {

//	return lengthOfTheCircle / 3.14
//}

//! 9

//9. Задайте користувачеві 3 питання, у кожному питанні по 3
//варіанти відповіді. За кожну правильну відповідь нарахо-
//вується 2 бали. Після запитань виведіть користувачеві
//кількість набраних балів.

//let score: number = 0
//let isRunning: boolean = true

//while (isRunning) {
//	const firstQuestion: number | null = +prompt("Ask the question: 2+2=4 1)right 2)wrong 3)I don't know")

//	if (firstQuestion < 1 || firstQuestion > 3 || isNaN(firstQuestion)) {
//		alert("Something went wrong. Try again.")
//	} else if (firstQuestion === 1) {
//		score += 2
//		isRunning = false
//	} else {
//		score = score
//		isRunning = false
//	}

//}

//let isTrying: boolean = true

//while (isTrying) {
//	const secondQuestion: number | null = +prompt("Ask the question: 6*5=29 1)right 2)wrong 3)I don't know")

//	if (secondQuestion < 1 || secondQuestion > 3 || isNaN(secondQuestion)) {
//		alert("Something went wrong. Try again.")
//	} else if (secondQuestion === 2) {
//		score += 2
//		isTrying = false
//	} else {
//		score = score
//		isTrying = false
//	}

//}

//let isCount: boolean = true

//while (isCount) {
//	const thirdQuestion: number | null = +prompt("Ask the question: 6/2=3 1)right 2)wrong 3)I don't know")

//	if (thirdQuestion < 1 || thirdQuestion > 3 || isNaN(thirdQuestion)) {
//		alert("Something went wrong. Try again.")
//	} else if (thirdQuestion === 1) {
//		score += 2
//		isCount = false
//	} else {
//		score = score
//		isCount = false
//	}

//}

//alert("Your score is: " + score)

//! 9

//10. Запросіть дату (день, місяць, рік) і виведіть наступну дату.
//Врахуйте можливість переходу на наступний місяць, рік,
//а також високосний рік.



let day: number
let month: number
let year: number
let isUserDate: boolean = true
while (isUserDate) {
	const userDate: string | null = prompt("Enter your date: dd.mm.yyyy")

	day = +userDate.slice(0, 2)
	month = +userDate.slice(3, 5)
	year = +userDate.slice(6, 10)


	if (userDate[2] !== "." && userDate[5] !== ".") {
		alert("Something went wrong. Try again.")
	} else if (isNaN(day) || isNaN(month) || isNaN(year)) {
		alert("Something went wrong. Try again.")
	} else if (day < 1 || month < 1 || year < 1) {
		alert("Something went wrong. Try again.")
	} else if (month > 12) {
		alert("Something went wrong. Try again.")
	} else if (month == 1 && day > 31) {
		alert("Something went wrong. Try again.")
	} else if (month == 2 && day > 29 && year % 4 == 0) {
		alert("Something went wrong. Try again.")
	} else if (month == 2 && day > 28 && year % 4 !== 0) {
		alert("Something went wrong. Try again.")
	} else if (month == 3 && day > 31) {
		alert("Something went wrong. Try again.")
	} else if (month == 4 && day > 30) {
		alert("Something went wrong. Try again.")
	} else if (month == 5 && day > 31) {
		alert("Something went wrong. Try again.")
	} else if (month == 6 && day > 30) {
		alert("Something went wrong. Try again.")
	} else if (month == 7 && day > 31) {
		alert("Something went wrong. Try again.")
	} else if (month == 8 && day > 31) {
		alert("Something went wrong. Try again.")
	} else if (month == 9 && day > 30) {
		alert("Something went wrong. Try again.")
	} else if (month == 10 && day > 31) {
		alert("Something went wrong. Try again.")
	} else if (month == 11 && day > 30) {
		alert("Something went wrong. Try again.")
	} else if (month == 12 && day > 31) {
		alert("Something went wrong. Try again.")
	} else {

		isUserDate = false
	}


}


switch (day) {
	case 28:
		if (month == 2) {
			day = 1
			month += 1
		}
		break
	case 29:
		if (month == 2) {
			day = 1
			month += 1
		}
		break
	case 30:
		if (month == 4 || month == 6 || month == 9 || month == 11) {
			day = 1
			month += 1
		}

		break;
	case 31:
		if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10) {
			day = 1
			month += 1
		} else if (month == 12) {
			day = 1
			month = 1
			year += 1
		}
		break;

	default:
		day += 1
		break;
}

function tomorrowDate(day, month, year) {
	if (day < 10 && month < 10) {
		alert("Tomorrow " + "0" + day + "." + "0" + month + "." + year)
	} else if (day >= 10 && month < 10) {
		alert("Tomorrow " + day + "." + "0" + month + "." + year)
	} else if (day >= 10 && month >= 10) {
		alert("Tomorrow " + day + "." + month + "." + year)
	}
}
tomorrowDate(day, month, year);


