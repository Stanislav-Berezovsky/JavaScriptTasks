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


var array  = ["first","second","third","fourth"]

console.log("Фунция получения последнего элемента массива")
function getLastElementFromArray(ar) {
	return ar[ar.length - 1];
}
console.log(getLastElementFromArray(array));


console.log("Функция добавления элемента в конец массива")
function AddElement(element){
	array[array.length] = element;
}
AddElement("fifth")
console.log(array)

console.log("Операции добавления удаления элементов у массива")
var genre= ["джаз","блюз"];
genre[genre.length] = "рок-н-ролл";
genre[genre.length - 2] = "классика";
console.log(genre.shift());
genre.unshift("рэп","рэгги");
console.log(genre);

console.log("получение случайного элемента массива")
var rand = Math.floor(Math.random() * genre.length);
console.log(genre[rand])


console.log("Функия нахождения инекса элемента,если нет -1.Элементы поиска : классика,поп")
function find(ar,element) {
	for (var i = 0; i < ar.length ; i++) {
		if (ar[i] == element) 
			return i;
	}
	return -1;
}
console.log(find(genre,"классика"))
console.log(find(genre,"поп"))


function filterRange(arr, a, b) {
	var items = [];
	for (var i = a; i <= b; i++) {
		items.length++;
		items[items.length-1] = arr[i];
	}
	return items;
}
console.log(filterRange(genre,1,3))


console.log("найти непрерывный подмассив arr, сумма элементов которого максимальна.возвращать только сумму")//подумать
function getMaxSubSum(ar) {
	var maxSum = 0;
	var sumElements = 0;
	for (var i = 0; i < ar.length ; i++) {
		sumElements = sumElements + ar[i];
		maxSum = Math.max(maxSum, sumElements);
		if (ar[i] > ar[i+1] ){
			sumElements = 0;
		}
	}
	return maxSum;
}
var sumArray =  [6, 2, 3, 4];
console.log(getMaxSubSum(sumArray))


console.log("Функция, которая добавляет в свойство объекта строку , если таковой подстроки нету у свой нету")
function addClass(obj, cls) {
	var list =  obj.className.split(" ");
	for (var i = 0; i < list.length; i++) {
		if (!(cls.localeCompare(list[i])))
			return;
	}
	list.push(cls);
	obj.className = list.join(" ");
}
var testObject = {
	className : "menu"
}
addClass(testObject,"was");
addClass(testObject,"opened");
console.log(testObject.className)



console.log("Функция, преобразующая строку ида «my-short-string» в «myShortString».")
function camelize(str) {
	var ar = str.split("-");
	for (var i = 0; i < ar.length; i++) {
		ar[i] = ar[i].charAt(0).toUpperCase()+ar[i].slice(1);
	}
	return ar.join("");
}
var s = "list-style-image";
console.log(s)
console.log(camelize(s));


console.log("Скопировать и отсортировать массив")
function copyAndSortArray(ar){
	var myArray = ar.concat();
	return myArray.sort();
}
console.log(genre);
console.log(copyAndSortArray(genre))


console.log("Сортировка объектов в массиве по возрасту")
function comparePeopleByAge(first,second){
	return first.age > second.age ? 1 : -1;
}
function outputPeople(ar) {
	for (var i = 0; i < ar.length; i++) {
		console.log(ar[i].name + " " + ar[i].age);
	}
}
var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };
var people = [ vasya , masha , vovochka ];
console.log(outputPeople(people));
console.log(outputPeople(people.sort(comparePeopleByAge)))





var list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

console.log("Вывод односвязного списка")
function printList(list) {
  var element = list;
  while (element) {
    console.log( element.value );
    element = element.next;
  }
}
printList(list);

console.log("Вывод односвязного списка при помощи рекурсии")
function printListRecursion(list) {
	var element = list;
	console.log(element.value);
	if (element.next) 
		printList(element.next); 
}
printListRecursion(list);

console.log("Вывод односвязного списка c конца при помощи рекурсии")
function printReverseListRecursion(list) {
	var element = list;
	if (element.next) 
		printReverseListRecursion(element.next);
	console.log(element.value );
}
printReverseListRecursion(list);




function aclean(arr) {
	var myDictionary = {};
	for (var i = 0; i < arr.length; i++) {
		var sortedByLetterElement = arr[i].toLowerCase().split('').sort().join(''); 
		myDictionary[sortedByLetterElement] = arr[i]; 
	}
	var items = [];
	for (var key in myDictionary) 
		items.push(myDictionary[key]);
	return items;
}
var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];
console.log(aclean(arr));


console.log("Фунция ,возвращающа массив частичных сумм(Каждый элемент сумма предыдущих")
function getSums(arr) {
	var items = [];
	var totalSum = arr.reduce(function(sum, item) {
		items.push(sum);
		return sum + item;
	});
	items.push(totalSum);
	return totalSum;
}
console.log(getSums([1,2,3,4,5]));


console.log("Функция, которая выводит текущий день недели в коротком формате „пн“, „вт“, … „вс“.")
function getWeekDay(date) {
	return date.toLocaleString('ru', {weekday: 'short'});
}
var date = new Date(2012,0,3);
console.log(getWeekDay(date));


console.log("Функцию,  которая возвращает день недели для  date в европейской нумерации") 
function getLocalDay(date) {
	var day = date.getDay();
	return (day == 0) ?	day = 7 : day;
}
console.log(getLocalDay(date));


console.log("Фунция возвращает день прошедший n-ое количество дней назад")
function getDateAgo(date, days) {
  date.setDate(date.getDate() - days);
  return date.getDate();
}
console.log(getDateAgo(date, 1) ); 
console.log(getDateAgo(date, 2) ); 
console.log(getDateAgo(date, 365)); 