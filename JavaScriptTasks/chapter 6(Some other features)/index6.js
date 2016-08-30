function c6() {

    clearDiv();
  

    consoleLog("Преобразование объекта в JSON и обратно в объект")
    var leader = {
        name: "Василий Иванович",
        age: 35
    };

    var lead = JSON.stringify(leader);
    consoleLog(lead);
    leader = JSON.parse(lead);
    consoleLog(leader);


    consoleLog("Вывод чисел с помощью setInterval и рекурсивного setTimeout n раз")
    function printNumbersInterval(number) {
        var count = 1;
        var timerId =  setInterval(function(){
            consoleLog(count);
            if (count == number){
                clearInterval(timerId);
            }
            count++;
        },100)
    }
    printNumbersInterval(20);

    function printNumbersIntervalRecursive(number) {
        var count = 1;
        var timerId =  setTimeout(function run(){
            consoleLog(count);
            if (count < number){
                setTimeout(run, 100);
            }
            count++;
        },100)
    }
    printNumbersIntervalRecursive(20);
};


