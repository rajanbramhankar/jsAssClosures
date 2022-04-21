console.log("working");

//1.
 function counter(){
    var counter = 0;

    function IncreaseCounter() {
        return counter += 1;
    };

    return IncreaseCounter;
}

var counter = Counter();//Not defined
alert(counter());
alert(counter());
alert(counter());
alert(counter());


//2.
let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged? - 1
  }
  console.log(count); // What is logged? - 0
})();


//3.
for (var i = 0; i < 3; i++) {
  setTimeout(function log() {
    console.log(i); // What is logged? -3
  }, 1000);
}


//4.
//Write a code to calculate area of a rectangle using inner function. In this case outer function should accept parameter length and inner function should accept parameter breadth.

let width = 200 ;
function Area() {
    let length = 400;
    return function name(params) {
        return  `Area of rectangle is ${width * length} `
    }
}
let rect = Area();
        
console.log(rect());//Area of rectangle is 80000.

//5.
//Take a variable in outer function and create an inner function to increase the counter every time it is called

let everyCount = function() {
    let out = 5;
    return function() {
        out++;
        console.log(out);
        
    }
    
}

let increase = everyCount();

increase();//6
increase();//7
increase();//8
increase();//9




//6.
//Print Output

var a = 12;
(function () {
  alert(a); //12
})();

//7.
var a = 10;
var x = (function () {
  var a = 12;
  return function () {
    alert(a); //12
  };
})();
x();

//8.

var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';
    
    (function innerFunc(innerArg) {
    var innerVar = 'b';
    
    console.log(
        "outerArg = " + outerArg + "\n" + //123
        "innerArg = " + innerArg + "\n" +//456
        "outerVar = " + outerVar + "\n" +//a
        "innerVar = " + innerVar + "\n" +//b
        "globalVar = " + globalVar);//xyz
    
    })(456);
})(123);