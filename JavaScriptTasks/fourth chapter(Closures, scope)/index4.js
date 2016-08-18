console.log("Сумма через замыкание")
function sum(a) {
	return function(b){
		return a+b;
	}
}
console.log(sum(4)(6))

console.log("Создать строковый буффер.Функциональность : добавить элемент, вывести все, удаление всех элементов буффера");
function makeBuffer() {
	 var value = "";
	 function buffer(text) {
	 	value += text;
	 }

	 buffer.ouput = function() {
	 	return value;
	 }

	 buffer.clear = function() {
	 	value = "";
	 }
	 return buffer;
}
var newBuffer = makeBuffer();
newBuffer('Замыкания');
newBuffer(' Использовать');
newBuffer(' Нужно!');
console.log(newBuffer.ouput());
newBuffer.clear();
console.log("После вызова clear():"+ newBuffer.ouput());




console.log("Сортировка по нужному полю")
var users = [{
  name: "Вася",
  surname: 'Иванов',
  age: 20
}, {
  name: "Петя",
  surname: 'Чапаев',
  age: 25
}, {
  name: "Маша",
  surname: 'Медведева',
  age: 18
}];

function byField(field) {
	return function(a,b) {
		return a[field] > b[field] ? 1 : -1;
	}
}
function getUsers(){
	for (var i = 0 ; i < users.length ; i++) {
		console.log(users[i].name + " " + users[i].surname + " "+ users[i].age);
	}
}
getUsers();
users.sort(byField("name"))
console.log("После сортировки по имени");
getUsers();
users.sort(byField("surname"))
console.log("После сортировки по фамилии");
getUsers();
users.sort(byField("age"))
console.log("После сортировки по возрасту");
getUsers();


var arr = [1, 2, 3, 4, 5, 6, 7];
console.log("Фильтрация массива")
console.log(arr);
function filter(arr, func) {
	var array = [];
	for (var i = 0 ; i < arr.length ; i++) {
		var item = arr[i]
		if (func(item))
			array.push(item)
	}
	return array;
}

console.log("a[i] % 2 == 0 :" + filter(arr, function(a) {
  return a % 2 == 0
}))

function inBetween(a,b) {
	return function(item) {
		return (a <= item) && (item <=b);
 	}
}
console.log("в заданном промежутке :"+filter(arr, inBetween(3, 6)));

function inArray(newArray) {
	return function(item) {
		for (var i = 0 ; i < newArray.length ; i++) {
			if (item == newArray[i])
				return true;
		}
		return false;
	}
}
console.log("на соответствие: :"+filter(arr, inArray([1, 2, 10])));
