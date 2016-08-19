function c3() {
    clearDiv();
    consoleLog("Функция, которая возвращает десятичную часть числа");

    function getDecimal(num) {
        var value = num - Math.floor(num);
        return value.toFixed(3);
    }
    consoleLog(getDecimal(12.235));


    consoleLog("Резиловать формулу Бине Fn=ϕn/√5, где ϕ=(1+√5)/2");

    function fibBinet(n) {
        var a = (1 + Math.sqrt(5)) / 2;
        return Math.round(Math.pow(a, n) / Math.sqrt(5));
    }
    consoleLog(fibBinet(7));


    consoleLog("Генерация случайного числа из промежутка min - max , включая значения min ,max");

    function randomInteger(min, max) {
        var value = min + Math.random() * (max - min);
        return Math.round(value);
    }
    consoleLog(randomInteger(4, 17));


    consoleLog("Функция, преобразующая первый символ строки в заглавный")

    function ucFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    consoleLog(ucFirst("hello"))


    consoleLog("Фунция, которая выводит с ограничемнием в количество символов")

    function truncate(str, maxlength) {
        var text = str;
        if (text.length > maxlength) {
            var text = text.slice(0, maxlength) + "...";
        }
        return text;
    }
    consoleLog(truncate("Hello", 4));

    consoleLog("Функция, которая проверяет есть ли свойства у объекта")

    function isEmpty(obj) {
        for (var key in obj)
            return false;
        return true;
    }
    consoleLog(isEmpty({}))

    consoleLog("Есть объект с зарплатами.Вывести сумму всез зарплат")

    function getSallaries(salaries) {
        var sum = 0;
        for (var key in salaries) {
            sum = sum + salaries[key]
        }
        return sum;
    }
    var salariesObj = {
        "Вася": 200,
        "Петя": 300,
        "Даша": 250
    }
    consoleLog(getSallaries(salariesObj))


    consoleLog("Вывести имя человека с самой большой зарплатой")

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
    consoleLog(maxSalary(salariesObj));


    consoleLog("Умноженает на 2 number свойства обьекта")

    function numberPropertyMultiplication(obj) {
        for (var key in obj) {
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
    consoleLog(objectForMultiplication)
    numberPropertyMultiplication(objectForMultiplication)
    consoleLog(objectForMultiplication)


    var array = ["first", "second", "third", "fourth"]

    consoleLog("Фунция получения последнего элемента массива")

    function getLastElementFromArray(ar) {
        return ar[ar.length - 1];
    }
    consoleLog(getLastElementFromArray(array));


    consoleLog("Функция добавления элемента в конец массива")

    function AddElement(element) {
        array[array.length] = element;
    }
    AddElement("fifth")
    consoleLog(array)

    consoleLog("Операции добавления удаления элементов у массива")
    var genre = ["джаз", "блюз"];
    genre[genre.length] = "рок-н-ролл";
    genre[genre.length - 2] = "классика";
    consoleLog(genre.shift());
    genre.unshift("рэп", "рэгги");
    consoleLog(genre);

    consoleLog("получение случайного элемента массива")
    var rand = Math.floor(Math.random() * genre.length);
    consoleLog(genre[rand])


    consoleLog("Функия нахождения инекса элемента,если нет -1.Элементы поиска : классика,поп")

    function find(ar, element) {
        for (var i = 0; i < ar.length; i++) {
            if (ar[i] == element)
                return i;
        }
        return -1;
    }
    consoleLog(find(genre, "классика"))
    consoleLog(find(genre, "поп"))


    function filterRange(arr, a, b) {
        var items = [];
        for (var i = a; i <= b; i++) {
            items.length++;
            items[items.length - 1] = arr[i];
        }
        return items;
    }
    consoleLog(filterRange(genre, 1, 3))


    consoleLog("найти непрерывный подмассив arr, сумма элементов которого максимальна.возвращать только сумму") //подумать
    function getMaxSubSum(ar) {
        var maxSum = 0;
        var sumElements = 0;
        for (var i = 0; i < ar.length; i++) {
            sumElements = sumElements + ar[i];
            maxSum = Math.max(maxSum, sumElements);
            if (ar[i] > ar[i + 1]) {
                sumElements = 0;
            }
        }
        return maxSum;
    }
    var sumArray = [6, 2, 3, 4];
    consoleLog(getMaxSubSum(sumArray))


    consoleLog("Функция, которая добавляет в свойство объекта строку , если таковой подстроки нету у свой нету")

    function addClass(obj, cls) {
        var list = obj.className.split(" ");
        for (var i = 0; i < list.length; i++) {
            if (!(cls.localeCompare(list[i])))
                return;
        }
        list.push(cls);
        obj.className = list.join(" ");
    }
    var testObject = {
        className: "menu"
    }
    addClass(testObject, "was");
    addClass(testObject, "opened");
    consoleLog(testObject.className)



    consoleLog("Функция, преобразующая строку ида «my-short-string» в «myShortString».")

    function camelize(str) {
        var ar = str.split("-");
        for (var i = 0; i < ar.length; i++) {
            ar[i] = ar[i].charAt(0).toUpperCase() + ar[i].slice(1);
        }
        return ar.join("");
    }
    var s = "list-style-image";
    consoleLog(s)
    consoleLog(camelize(s));


    consoleLog("Скопировать и отсортировать массив")

    function copyAndSortArray(ar) {
        var myArray = ar.concat();
        return myArray.sort();
    }
    consoleLog(genre);
    consoleLog(copyAndSortArray(genre))


    consoleLog("Сортировка объектов в массиве по возрасту")

    function comparePeopleByAge(first, second) {
        return first.age > second.age ? 1 : -1;
    }

    function outputPeople(ar) {
        for (var i = 0; i < ar.length; i++) {
            consoleLog(ar[i].name + " " + ar[i].age);
        }
    }
    var vasya = { name: "Вася", age: 23 };
    var masha = { name: "Маша", age: 18 };
    var vovochka = { name: "Вовочка", age: 6 };
    var people = [vasya, masha, vovochka];
    consoleLog(outputPeople(people));
    consoleLog(outputPeople(people.sort(comparePeopleByAge)))





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

    consoleLog("Вывод односвязного списка")

    function printList(list) {
        var element = list;
        while (element) {
            consoleLog(element.value);
            element = element.next;
        }
    }
    printList(list);

    consoleLog("Вывод односвязного списка при помощи рекурсии")

    function printListRecursion(list) {
        var element = list;
        consoleLog(element.value);
        if (element.next)
            printList(element.next);
    }
    printListRecursion(list);

    consoleLog("Вывод односвязного списка c конца при помощи рекурсии")

    function printReverseListRecursion(list) {
        var element = list;
        if (element.next)
            printReverseListRecursion(element.next);
        consoleLog(element.value);
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
    consoleLog(aclean(arr));


    consoleLog("Фунция ,возвращающа массив частичных сумм(Каждый элемент сумма предыдущих")

    function getSums(arr) {
        var items = [];
        var totalSum = arr.reduce(function(sum, item) {
            items.push(sum);
            return sum + item;
        });
        items.push(totalSum);
        return totalSum;
    }
    consoleLog(getSums([1, 2, 3, 4, 5]));


    consoleLog("Функция, которая выводит текущий день недели в коротком формате „пн“, „вт“, … „вс“.")

    function getWeekDay(date) {
        return date.toLocaleString('ru', { weekday: 'short' });
    }
    var date = new Date(2012, 0, 3);
    consoleLog(getWeekDay(date));


    consoleLog("Функцию,  которая возвращает день недели для  date в европейской нумерации")

    function getLocalDay(date) {
        var day = date.getDay();
        return (day == 0) ? day = 7 : day;
    }
    consoleLog(getLocalDay(date));


    consoleLog("Фунция возвращает день прошедший n-ое количество дней назад")

    function getDateAgo(date, days) {
        date.setDate(date.getDate() - days);
        return date.getDate();
    }
    consoleLog(getDateAgo(date, 1));
    consoleLog(getDateAgo(date, 2));
    consoleLog(getDateAgo(date, 365));
};
