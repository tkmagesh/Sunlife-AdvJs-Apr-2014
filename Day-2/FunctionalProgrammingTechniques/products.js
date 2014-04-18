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