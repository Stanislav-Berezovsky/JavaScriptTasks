console.log("Вывести четные от 2 до 10 c помощью цикла for")
for (var i = 2; i <= 10; i++) {
	if (i % 2 == 0)
		console.log(i)
}

console.log("Вывести четные от 2 до 10 c помощью цикла while")
var i = 2
while (i <= 10 ) {
	if (i % 2 == 0)
		console.log(i)
	i++;
}


console.log("Функции. Получить минимальное из 2 двух чисел")
function getMinValue(a,b) {
	return (a < b) ? a : b;
}
console.log(getMinValue(4,6))


console.log("Написать функции возведения числа в степень")
function pow(x, n) {
  var value = x;
  for (var i = 1; i < n; i++) 
    value *= x;
  return value;
}
console.log(pow(2,5))



console.log("Рекурсивный вызов функции. Суммирование элементов от нуля до n")
function sumTo(n) {
	return (n > 0) ? n + sumTo(n-1) : 0		
}

console.log(sumTo(5))


