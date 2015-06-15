
Function.prototype.extends = function(baseObj) {
	this.prototype = Object.create(baseObj.prototype);
	this.prototype.constructor = this;
};

Function.prototype.implements = function(baseObj) {
	this.prototype = baseObj;
};

//
/////// Peelable - non instantiable, questionable value

Peelable = {
	peel : function() {
		console.log("consider this peeled");
	}
};

//
/////// Fruit

Fruit = function(colour) {
	this.setColour(colour);
};
Fruit.implements(Peelable);

Fruit.prototype.setColour = function(colour) {
	this.colour = colour;
};

/////// Orange

Orange = function() {
	Fruit.call(this, "orange");
};
Orange.extends(Fruit);

Orange.prototype.makeOrangeSquash = function() {
	console.log("made orange squash");
};


// Add to fruit

Fruit.prototype.getColour = function() {
	return this.colour;
};

// Exports
exports.Fruit = Fruit;
exports.Orange = Orange;
exports.Peelable = Peelable;
