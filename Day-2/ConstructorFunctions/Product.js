function Product(id,name,cost,units){
	this.id = id;
	this.name = name;
	this.cost = cost;
	this.units = units;
}

/*
Rewrite the above function so that it implements the following:

1. After the object is created
	"id" cannot be reassigned 
	"name" cannot be assigned to an emptry string
	"cost" cannot be assigned a value less than the current value
	"units" cannot be less than 0

clue : hide data members and implement accessor functions
*/

function Product(id,name,units,cost){
	var _id = id,
		_name = name,
		_cost = cost,
		_units = units;

	this.id = function(){
		return _id;
	};

	this.name = function(val){
		if (typeof val === "undefined") return _name;
		if (val !== "") _name = val;
	};

	this.cost = function(val){
		if (typeof val === "undefined") return _cost;
		if(val > _cost) _cost = val;
	};

	this.units = function(val){
		if (typeof val === "undefined") return _units;
		if (val > 0) _units = val;
	}

}