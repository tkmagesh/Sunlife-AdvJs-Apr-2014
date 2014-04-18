var products = [
	{id :1, name:"pen", cost:90, units:10, category:1},
	{id :6, name:"ten", cost:40, units:70, category:2},
	{id :3, name:"den", cost:80, units:20, category:1},
	{id :8, name:"len", cost:90, units:50, category:2},
	{id :9, name:"ken", cost:30, units:90, category:2},
	{id :4, name:"zen", cost:20, units:30, category:1}
]

function sort(list){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++){
			var left = list[i], right=list[j];
			if (left.id > right.id){
				list[i] = list[j];
				list[j] = left;
			}
		}
}

function sort(list,attrName){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++){
			var left = list[i], right=list[j];
			if (left[attrName] > right[attrName]){
				list[i] = list[j];
				list[j] = left;
			}
		}
}


function sort(list,comparerFn){
	for(var i=0;i<list.length-1;i++)
		for(var j=i+1;j<list.length;j++){
			var left = list[i], right=list[j];
			var compareResult = comparerFn(left,right);
			if (compareResult > 0){
				list[i] = list[j];
				list[j] = left;
			}
		}
}

function productComparerByValue(p1,p2){
	var p1Value = p1.units * p1.cost,
		p2Value = p2.units * p2.cost;
	if (p1Value > p2Value) return 1;
	if (p1Value === p2Value) return 0;
	return -1;	
}

sort(products,productComparerByValue)
