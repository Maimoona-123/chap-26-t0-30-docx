//  ROUNDIG NUMBER

// Q- 1


var number = 4.7
var roundedNumber = Math.round (number);
console.log (roundedNumber);



// Q-2

var originNumber = 4.7;
var roundedNumber = Math.ceil (originNumber);

console.log ("Original Number : " , originNumber );
console.log ("Rounded Number : " , roundedNumber  );


// Q_3

var roundValue = Math.floor( 0.5 );
console.log ("Round value : ", roundValue );



// RANDOM NUMBERS

// Q_1

var randomNumber = Math.floor( Math.random () * 50) + 1;
console.log (randomNumber);


// Q_2

var randomNumber = Math.random();
console.log (randomNumber);


// Q-3

var rolled = Math.floor ( Math.random() * 6 ) +1;
console.log (rolled);


// Q-4

var toss = Math.floor ( Math.random () * 2 ) === 0;
"Heads" , "Tails";

console.log ("Toss result : ", toss  );



// CONVERTING STRINGS

// Q-1

var str = "123";
var num1 = parseInt (str);
var num2 = Number(str);
var num3 = +str;

console.log ( num1, num2, num3 );


// Q-2

var str = "123"
var num = parseInt (str);
console.log (num);


// Q-3

var str = "123.45"

if ( (Number (str)) ){
    console.log (Number (str));


}else {
    console.log ("Invalid number");
}


// Q-4 

var num = 123;

var str = num.toString();
console.log (str);


// Q_5

var num = 42;
console.log (num.toString());


// Q-6

var num = "3.14";

var num = parseInt (str);
console.log (num);


// COONTROLLING THE LENGTH OF DECIMALS

// Q-1

var num = Math.random ();
var newNum = num.toFixed(4);

console.log (newNum);



// Q-2


var num = Math.random ();
var newNum = num.toFixed(2);

console.log (newNum);


// Q-3

var num = Math.random();

if (num.toFixed(2).length > 4 ){
    console.log ("Number has more tha4 characters");


} else{
    console.log ("Number has 4 or less character")
}















