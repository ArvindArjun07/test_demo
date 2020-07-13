/*var rect = {
	perimeter : (x,y) => (2*(x+y)),
	area : (x,y) => (x*y)
};
*/
//replacement to the upper part and use require module to import external file

/*
var rect = require('./rectangle');

function solveRect(l, b){
	console.log("length l = " + l + " and breadth b = " + b);

	if(l<=0 || b<=0){
		console.log("length and breadth should be greater than zero");
	}
	else{
		console.log("area of rectangle = " + rect.area(l, b));
		console.log("perimeter of rectangle = " + rect.perimeter(l, b));
	}
}

solveRect(4, 6);
solveRect(0, 4);
solveRect(6, 8);

*/

var rect = require('./rectangle');

function solveRect(l, b){
	//console.log("length l = " + l + " and breadth b = " + b);

	rect(l, b,(err, rectangle)=> {
		if(err){
			console.log("ERROR:" , err.message);
		}
		else{
			console.log("area of rectangle = " + rectangle.area());
			console.log("perimeter of rectangle = " +rectangle.perimeter());
		}
	});
	
}


solveRect(4, 6);
solveRect(0, 4);
solveRect(6, 8);
solveRect(0, 6);

