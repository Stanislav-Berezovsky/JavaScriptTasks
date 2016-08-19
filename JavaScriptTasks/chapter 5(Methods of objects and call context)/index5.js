var name = "Петя";

var user = {
	name: 'Василий',
	sayHi: function() {
		console.log(this.name)
	}
};

var a1 = user.sayHi();
a1


var arr = ["a", "b","c"];

arr.push(function() {
  console.log( this );
})

arr[3]()



console.log("Объект калькулятор у которого есть три метода : read,sum,mul")
var calculator = {
	read: function(a,b) {
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
calculator.read(5,6);
console.log("Сумма: " + calculator.sum());
console.log("Произведение: " + calculator.mul());


console.log("Преобразовать обэект ladder так , чтобы можно было вызвать у него цепочку методов")
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
    console.log(this.step);
    return this;
  }
};
ladder.up().up().up().showStep().up().showStep().down().down().down().showStep();

function sum(a) {
	var mySum = a;
	return function(b) {
		mySum = mySum + b;		 
	}
	//return sumTwoElements
}
console.log()