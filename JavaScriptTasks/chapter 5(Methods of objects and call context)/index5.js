function c5() {
    clearDiv();
    consoleLog("Объект калькулятор , у которого есть три метода : read,sum,mul")
    var calculator = {
        read: function(a, b) {
            this.a = a;
            this.b = b;
        },
        sum: function() {
            return this.a + this.b;
        },
        mul: function() {
            return this.a * this.b;
        }
    }
    calculator.read(5, 6);
    consoleLog("Сумма: " + calculator.sum());
    consoleLog("Произведение: " + calculator.mul());


    consoleLog("Преобразовать обэект ladder так , чтобы можно было вызвать у него цепочку методов")
    var ladder = {
        step: 0,
        up: function() {
            this.step++;
            return this;
        },
        down: function() {
            this.step--;
            return this;
        },
        showStep: function() {
            consoleLog(this.step);
            return this;
        }
    };
    ladder.up().up().up().showStep().up().showStep().down().down().down().showStep();

    consoleLog("Конструктор калькулятор , у которого есть три метода : read,sum,mul ")

    function Calculator() {
        this.read = function(a, b) {
            this.a = a;
            this.b = b;
        }

        this.sum = function() {
            return this.a + this.b;
        }

        this.mul = function() {
            return this.a * this.b;
        }
    }
    var calc = new Calculator();
    calc.read(4, 8);
    consoleLog("Произведение: " + calc.mul());
    consoleLog("Сумма: " + calc.sum());


    consoleLog("Конструктор, объекты которого должны хранить текущую сумму и прибавлять к ней с помощью свойсва read")

    function Accumulator(startingValue) {
        this.value = startingValue;
        this.read = function(newValue) {
            this.value = this.value + newValue;
        }
        this.get = function() {
            return this.value;
        }
    }
    var accum = new Accumulator(3);
    accum.read(5);
    consoleLog(accum.get());

    function User(fullName) {
        this.fullName = fullName;
        Object.defineProperties(this, {
            firstName: {
                get: function() {
                    return this.fullName;
                },
                set: function(newFirstName) {
                    return this.fullName.split(' ')[0];
                }
            },

            surname: {
                get: function() {
                    return this.fullName;
                },
                set: function(newLastName) {
                    return this.fullName.split(' ')[1];
                }
            }
        });
    }
    var vasya = new User("John Lennon");
    consoleLog(vasya.firstName + vasya.surname + vasya.fullName);
};
