Function.prototype.inherits = function (SuperClass) {
	function Surrogate () {}
	// console.log("dbg surrogate");

	// console.log("superclass, then prototype: " + superClass);

	// console.log(superClass.prototype);
	Surrogate.prototype = SuperClass.prototype;
	
	// console.log("Surrogate prototype: ");
	// console.log(Surrogate.prototype);
	console.log(this)
	this.prototype = new Surrogate();
	
	// console.log("this.prototype: ");
	// console.log(this.prototype);
};

function MovingObject() {};



// Testing inheritance


var Ship = function () {};

Ship.inherits(MovingObject);
console.log(Ship)

MovingObject.prototype.flying = function () {
	console.log("I'm flying");
};

Ship.prototype.dive = function () {
	console.log("I'm diving");
};



function Asteroid () {};
// Asteroid.inherits(MovingObject);

// Ship.prototype.shooting = function () {
// 	console.log("I'm shooting");
// };
//
// Asteroid.prototype.crashing = function () {
// 	console.log("I'm crashing");
// };

// console.log("prototype lists: MovingObject, Ship, Asteroid. ")
// console.log(MovingObject.prototype);
// console.log(Ship.prototype);
// console.log(Asteroid.prototype);
var s = new Ship();
s.flying();