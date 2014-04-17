describe("A calculator",function(){
	it("Should be able to add two numbers",function(){
		//arrange
		var number1 = 10,
			number2 = 20,
			expectedResult = 30;

		//act
		var result = sum(number1,number2);

		//assert
		expect(result).toBe(expectedResult);
	});

	it("Should be able to add two numbers in string format",function(){
		//arrange
		var number1 = "10",
			number2 = "20",
			expectedResult = 30;

		//act
		var result = sum(number1,number2);

		//assert
		expect(result).toBe(expectedResult);
	});

	it("Should be able to add non numeric strings",function(){
		//arrange
		var number1 = "abc",
			number2 = "xyz",
			expectedResult = 0;

		//act
		var result = sum(number1,number2);

		//assert
		expect(result).toBe(expectedResult);
	});

	it("Should be able to add functions returning numbers",function(){
		//arrange
		var f1 = function(){ return 10;},
			f2 = function(){ return 20;},
			expectedResult = 30;
		

		//act
		var result = sum(f1,f2);

		//assert
		expect(result).toBe(expectedResult);
	});

	it("Should be able to add functions returning numbers and non numeric strings",function(){
		//arrange
		var f1 = function(){ return 10;},
			f2 = function(){ return "abc";},
			expectedResult = 10;
		

		//act
		var result = sum(f1,f2);

		//assert
		expect(result).toBe(expectedResult);
	});

	it("Should be able to add functions returning functions returing numbers",function(){
		//arrange
		var f1 = function(){ return function(){ return 10;}},
			f2 = function(){ return function(){ return 20;}},
			expectedResult = 30;
		

		//act
		var result = sum(f1,f2);

		//assert
		expect(result).toBe(expectedResult);
	});

	it("Should be able to add only one number",function(){
		//arrange
		var number1 = 10,
			expectedResult = 10;
		

		//act
		var result = sum(number1);

		//assert
		expect(result).toBe(expectedResult);
	});

	it("Should be able to add variable length arguments",function(){
		//arrange
		var number1 = 10,
			number2 = 20,
			number3 = 30,
			number4 = 40,
			expectedResult = 100;
		

		//act
		var result = sum(number1,number2,number3,number4);

		//assert
		expect(result).toBe(expectedResult);
	});

	it("Should be able to add an array of numbers",function(){
		//arrange
		var numbers = [10,20,30,40],
			expectedResult = 100;
		

		//act
		var result = sum(numbers);

		//assert
		expect(result).toBe(expectedResult);
	});

	it("Should be able to add a nested array of numbers",function(){
		//arrange
		var numbers = [10,[20,[30,[40]]]],
			expectedResult = 100;
		

		//act
		var result = sum(numbers);

		//assert
		expect(result).toBe(expectedResult);
	});

	it("Should be able to add an array of functions returing an array of numbers",function(){
		//arrange
		var f1 = function(){ return [10,20];},
			f2 = function(){ return [30,40];},
			expectedResult = 100;
		
		

		//act
		var result = sum([f1,f2]);

		//assert
		expect(result).toBe(expectedResult);
	});
});