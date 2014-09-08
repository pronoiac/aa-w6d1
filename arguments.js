var sum = function(){
	var args = Array.prototype.slice.call(arguments);
	var total = 0;
	for(var i = 0; i < args.length; i++){
		total += args[i];
	}
	
	return total;
};

// console.log(sum(1,2,3,4));
// console.log(sum(1,2,3,4,5));


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
setTimeout(curie.meow.myBind(curie), 1000);



