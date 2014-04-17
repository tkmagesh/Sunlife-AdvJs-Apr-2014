function sum(x,y){
	function parseArg(n){
		if (typeof n === "function") return parseArg(n());
		if (Array.isArray(n)) return sum.apply(this,n);
		if (isNaN(n)) return 0;
		return parseInt(n);
	}
	return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + sum([].slice.call(arguments,1));
}