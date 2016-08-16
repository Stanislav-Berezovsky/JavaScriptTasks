console.log("Функция, которая возвращает десятичную часть числа");
function getDecimal(num) {
	var value = num - Math.floor(num);
	return value.toFixed(3);
}
console.log(getDecimal(12.235));


console.log("Резиловать формулу Бине Fn=ϕn/√5, где ϕ=(1+√5)/2");
function fibBinet(n) {
	var a = (1 + Math.sqrt(5)) / 2;
  	return Math.round(Math.pow(a, n) / Math.sqrt(5));
}
console.log(fibBinet(7));


console.log("Генерация случайного числа из промежутка min - max , включая значения min ,max");
function randomInteger(min, max) {
	var value = min + Math.random() * (max - min); 
	return Math.round(value);
}
console.log(randomInteger(4,17));


console.log("Функция, преобразующая первый символ строки в заглавный")
function ucFirst(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(ucFirst("hello"))


console.log("Фунция, которая выводит с ограничемнием в количество символов")
function truncate(str, maxlength) {
	var text = str;
	if (text.length > maxlength)
	{
		var text = text.slice(0, maxlength)+"...";
	}
	return text;
}
console.log(truncate("Hello",4));

console.log("Функция, которая проверяет есть ли свойства у объекта")
function isEmpty(obj) {
	for (var key in obj)
		return false;
	return true;
}
console.log(isEmpty({}))

console.log("Есть объект с зарплатами.Вывести сумму всез зарплат")
function getSallaries(salaries) {
	var sum = 0;
	for (var key in salaries) {
		sum = sum + salaries[key]
	}
	return sum;
}
var salariesObj = {
	"Вася" : 200,
	"Петя" : 300,
	"Даша" : 250
}
console.log(getSallaries(salariesObj))


console.log("Вывести имя человека с самой большой зарплатой")
function maxSalary(salaries) {
	var name = ""
	var max = 0;
	for (var key in salaries) {
		if (max < salaries[key]) {
			name = key;
			max = salaries[key]
		}
	}
	return name || "Нет сотрудников";
}
console.log(maxSalary(salariesObj));


console.log("Умноженает на 2 number свойства обьекта")
function numberPropertyMultiplication(obj) {
	for (var key in  obj) {
		if (isNumeric(obj[key]))
			obj[key] *= 2;
	}
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

var objectForMultiplication = {
	width: 400,
	height: 600,
	title: "My menu"
}
console.log(objectForMultiplication)
numberPropertyMultiplication(objectForMultiplication)
console.log(objectForMultiplication)