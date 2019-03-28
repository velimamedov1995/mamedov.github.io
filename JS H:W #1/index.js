/*
//Task 2 - Reverse String 
function reverseString(str) {
let newStr = '';
 
for (i = str.length -1; i >=0; i--) {
newStr += str.charAt(i);

}

 return newStr;

}
//alert (reverseString('abc'));


//Task 3

function printStairs(n) { 
let a = '';

 }

//console.log('#\n##\n###');



// Taks 4 ( First method )

function sumRange(start, end) { 
 let sum = 0 ;
for (var i = 2; i <= 4; i++) {
	sum += i;
}
return sum;
}
 
//alert(sumRange(2, 4));



function sumRange(start, end) { 
 let sum = 0 ;
for (var i = -1; i <= 3; i++) {
	sum += i;
}
return sum;
}
 
//alert(sumRange(-1, 3));



//Task 4 (Second method)

function sumTo(n) {
  var sum = 0;
  for (var i = 2; i <= n; i++) {
    sum += i;
  }
  return sum;
}

//alert( sumTo(4) );

// Task 5 Write a function which returns the smallest of three numbers

function min(a, b, c) { 

 if (a < b && a < c) {
     return  a;
 }
    else if(b < a && b < c) {
        return b;
    }
     else {
         return c;
     }

}
//console.log(min(10, 5, 11))
//console.log(min(3, 8, 4))

// Task 6 A function which prints the pyramid picture of size n

function printStairs(n) { 
    for(let i = 1; i <= n; i++) {
 
    let str = ' '.repeat(n - i);

    let str2 = '#'.repeat(i*2 - 1 );
 
    console.log(str + str2 + str);
  }
}

printStairs(3);



// Task 7  A function which transforms first and last letter to uppercase (use built in string’s method).

function firstAndLastToUpper(str) { 
	
	console.log(str[0].toUpperCase()+ 'b' + str[2].toUpperCase());

 }

firstAndLastToUpper('abc')



//Task 8 A function which returns true if string contains ironman or cursor or ostap otherwise returns false. The function must be case-insensitive. 
function cursorCheck(str) { 
 
 let n = str.includes('OstaP' || 'cursor');
 console.log(n);
 
 let check1 = str.includes('OstaP' && 'cursor');
 console.log(check1);

let check2 = str.includes('Superman');
 console.log(check2);

}
cursorCheck('Hello I am OstaP'); // true
cursorCheck('Superman is here') // false



//Task 9 A function which returns a string with all letters in uppercase (without built in string’s method). The function supports only english alphabet.
function toUppercase(str) {

console.log(str.toUpperCase());

}
toUppercase('abc') // 'ABC'



function removeDuplicationLetters(str) { 
 let unique = ''; 

 for (let i = 0; i < str.length; i++)  {
 	if (str.lastIndexOf(str[i]) == str.indexOf(str[i])) {
      unique += str[i];
 }
 return unique;
}
}
console.log(removeDuplicationLetters('Hello I am Iron Man')); // 'Helo I am rn '




function removeDuplicationLetters(str) {

  let result = ' '; 
    for (let i = 0; i < str.length; i++) {
      if (str[i] === ' ' || !result.includes(str[i])){
            result += str[i];

      }

    }

  return result;
}



alert(removeDuplicationLetters('Hello I am Iron Man'));

*/







