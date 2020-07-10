var rect = {
	perimeter : (x,y) => (2*(x+y)),
	area : (x,y) => (x*y)
};

function solveRect(l, b){
	console.log("length l = " + l + " and breadth b = " + b);

	if(l<=0 || b<=0){
		console.log("length and breadthshould not be zero l= " + l + " b = " + b);
	}
	else{
		console.log("area of rectangle = " + rect.area(l, b));
		console.log("perimeter of rectangle = " + rect.perimeter(l, b));
	}
}

solveRect(4, 6);
solveRect(0, 4);
solveRect(4, 0);