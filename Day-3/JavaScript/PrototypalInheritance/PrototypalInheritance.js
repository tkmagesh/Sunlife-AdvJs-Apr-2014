var baseObj = {
  id : 101,
  display : function(){
    console.log(this.id, this.name, this.salary);
  }
}

function Employee(name,salary){
  this.name = name;
  this.salary = salary;
}

Employee.prototype = baseObj;

var e1 = new Employee("Magesh",10000);

e1.display()

var e2 = new Employee("Suresh",20000);

e2.display()

baseObj.id = 201

/* e1.id will be 201
	e2.id will be 201
*/

e1.id = 301

/* e2.id will still be 201 */


// To be avoided 

function SalaryCalculator(basic,hra,da,tax){
	this.basic = basic;
	this.hra = hra;
	this.da = da;
	this.tax = tax;
	this.calculate = function(){
		var gross = this.basic + this.hra + this.da;
		this.salary = gross * ((100 - tax)/100);
	}
}

//Preferred
function SalaryCalculator(basic,hra,da,tax){
	this.basic = basic;
	this.hra = hra;
	this.da = da;
	this.tax = tax;
}
SalaryCalculator.prototype.calculate = function(){
		var gross = this.basic + this.hra + this.da;
		this.salary = gross * ((100 - tax)/100);
	}

var calc1 = new SalaryCalculator();
calc1.calculate();

