function c1() {
    clearDiv();
    consoleLog("Вывести четные от 2 до 10 c помощью цикла for")
    for (var i = 2; i <= 10; i++) {
        if (i % 2 == 0)
            consoleLog(i)
    }

    consoleLog("Вывести четные от 2 до 10 c помощью цикла while")
    var i = 2
    while (i <= 10) {
        if (i % 2 == 0)
            consoleLog(i)
        i++;
    }


    consoleLog("Функции. Получить минимальное из 2 двух чисел")

    function getMinValue(a, b) {
        return (a < b) ? a : b;
    }
    consoleLog(getMinValue(4, 6))


    consoleLog("Написать функции возведения числа в степень")

    function pow(x, n) {
        var value = x;
        for (var i = 1; i < n; i++)
            value *= x;
        return value;
    }
    consoleLog(pow(2, 5))



    consoleLog("Рекурсивный вызов функции. Суммирование элементов от нуля до n")

    function sumTo(n) {
        return (n > 0) ? n + sumTo(n - 1) : 0
    }

    consoleLog(sumTo(5))
};