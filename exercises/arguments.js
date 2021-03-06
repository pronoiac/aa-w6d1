// === Sum
var sum = function(){
	var args = Array.prototype.slice.call(arguments);
	var total = 0;
	for(var i = 0; i < args.length; i++){
		total += args[i];
	}
	
	return total;
};

// ==== test
// console.log(sum(1,2,3,4));
// console.log(sum(1,2,3,4,5));



// === myBind
Function.prototype.myBind = function(context){
	var fn = this;
	var args = Array.prototype.slice.call(arguments, 1);

	return function(){
		// console.log(args);
		// console.log(args2);
		return fn.apply(context, args);
	};
};

// test, from w5d5 solutions
var Cat = function (name) {
  this.name = name;
};

Cat.prototype.meow = function (arg1, arg2) {
  console.log(this.name + " says meow!");
};

var curie = new Cat("Curie");
// setTimeout(curie.meow.myBind(curie), 1000);



// === curried sum
var curriedSum = function(numArgs){
	var numbers = [];
	var _curriedSum = function(num){
		numbers.push (num);
		if (numbers.length === numArgs){
			var sum = 0;
			for (i = 0; i < numbers.length; i++){
				sum += numbers[i];
			}
			return sum;
		}
		return _curriedSum;
	}
	return _curriedSum;
}

// ==== test
var sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56


// === curry
Function.prototype.curry = function(numArgs){
	var items = [];
	var that = this;
	
	var _curried = function(item){
		items.push(item);
		if (items.length === numArgs){
			return that.apply({}, items);
		} 
		else {
			// not enough items yet
			return _curried;
		}
	}
	// keep going
	return _curried;
}

// test for curry 
function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

// console.log(sumThree.apply({},[4, 20, 6]));// == 30

// you'll write `Function#curry`!
var f1 = sumThree.curry(3);
var f2 = f1(4);
var f3 = f2(20);
var result = f3(6); // = 30
console.log(result);

// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30