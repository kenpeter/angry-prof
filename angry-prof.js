
function angryProfessor(k, a) {
	var minStudentNum = k;
	var timeArr = a;
	timeArr.sort(function(a, b){
		return a-b;
	});

	var onTimeCount = 0;
	for(var i=0; i<timeArr.length; i++) {
		var item = timeArr[i];
		//console.log(item);
		if(item <= 0) {
			onTimeCount++;
		} else {

		}		
	}
	
	if(onTimeCount < k) { 
		return 'YES';
	} else {
		return 'NO';
	}
}


/*
var k = 2;
var a = [ 0, -1, 2, 1 ];
*/

var k = 3;
var a = [ -1, -3, 4, 2 ]; 
var out = angryProfessor(k, a);
console.log(out);
