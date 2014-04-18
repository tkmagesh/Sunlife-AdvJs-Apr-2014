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