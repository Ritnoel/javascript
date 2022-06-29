// Write a JavaScript program that accept two integers and display the larger.
// var num1, num2;
// num1 = window.prompt("Input the First integer", "0");
// num2 = window.prompt("Input the second integer", "0");
                                                 
// if(parseInt(num1, 10) > parseInt(num2, 10)) 
//   { 
//   console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
//   }   
// else
//   if(parseInt(num2, 10) > parseInt(num1, 10)) 
//   {
//   console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
//   }                  
// else
//   {
//    console.log("The values "+ num1+ " and "+num2+ " are equal.");
//   }


// Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched"

// Get a random integer from 1 to 10 inclusive
// const num = Math.ceil(Math.random() * 10);
// console.log(num);
//  const gnum = prompt('Guess the number between 1 and 10 inclusive');
//  if (gnum == num)
//    console.log('Matched');
//   else
//    console.log('Not matched, the number was '+gnum);
   

// Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.

// function sumTriple (x, y) {
//     if (x == y) {
//       return 3 * (x + y);
//       } 
//      else
//      {
//       return (x + y);
//      }
//    }
//   console.log(sumTriple(10, 20));
//   console.log(sumTriple(10, 10));


// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.

// Sample Output:
// "0 is even"
// "1 is odd"
// "2 is even"

// for (var x=0; x<=15; x++) {
//     if (x === 0) {
//             console.log(x +  " is even");
//     }
//     else if (x % 2 === 0) {
//             console.log(x + " is even");   
//     }
//     else {
//             console.log(x + " is odd");
//     }
// }



// Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

// for ( var i = 1; i <= 100; i++ )
// {
//   if ( i%3 === 0 && i%5 === 0 )
//   {
//     console.log( i + " FizzBuzz" );
//   }
//   else if ( i%3 === 0 ) 
//   {
//     console.log(i+ " Fizz" );
//   }
//   else if ( i%5 === 0 ) 
//   {
//     console.log(i+ " Buzz" );
//   }
//   else
//   {
//     console.log(i);
//   }
// }

// Write a simple JavaScript program to join all elements of the following array into a string.

// Expected Output:
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

// myColor = ["Red", "Green", "White", "Black"];
// console.log(myColor.toString());
// console.log(myColor.join());
// console.log(myColor.join('+'));

// Write a JavaScript function to filter false, null, 0 and blank values from an array.
// Data:
// console.log (filter_array_values([58, '', 'abcd', true, null, false, 0]));
// Expected Output:
// [58, "abcd", true]

// function filter_array_values(arr) {
//   arr = arr.filter(isEligible);
//   return arr;
// }

// function isEligible(value) {
//   if(value !== false || value !== null || value !== 0 || value !== "") {
//     return value;
//   }
// }

// console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));


// Write a JavaScript function to generate an array of specified length, filled with integer numbers, increase by one from starting position.
// Test Data :
// console.log(array_range(1, 4));
// [1, 2, 3, 4]
// console.log(array_range(-6, 4));
// [-6, -5, -4, -3]

// function array_range(start, len) 
//      {
// 		var arr = new Array(len);
// 		for (var i = 0; i < len; i++, start++) 
//         {
// 			arr[i] = start;
// 		}
//       		return arr;
// }


// console.log(array_range(1, 4));

// console.log(array_range(-6, 4));


// Write a JavaScript function to find the highest value in an array.

// console.log(max([12,34,56,1]));
// console.log(max([-12,-34,0,-56,-1]));
// 56
// 0

// function max(input) {
//   if (toString.call(input) !== "[object Array]")  
//     return false;
// return Math.max.apply(null, input);
// }

// console.log(max([12,34,56,1]));
// console.log(max([-12,-34,0,-56,-1]));


// Write a JavaScript function to find the area of a triangle where lengths of the three of its sides are 5, 6, 7

// var side1 = 5; 
// var side2 = 6; 
// var side3 = 7; 
// var s = (side1 + side2 + side3)/2;
// var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
// console.log(area);


// Write a JavaScript program to convert temperatures to and from celsius, fahrenheit

// function cToF(celsius) 
// {
//   var cTemp = celsius;
//   var cToFahr = cTemp * 9 / 5 + 32;
//   var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
//     console.log(message);
// }

// function fToC(fahrenheit) 
// {
//   var fTemp = fahrenheit;
//   var fToCel = (fTemp - 32) * 5 / 9;
//   var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
//     console.log(message);
// } 
// cToF(60);
// fToC(45);

// Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7.
// function test37(x) 
// {
//   if (x % 3 == 0 || x % 7 == 0) 
//   {
//     return true;
//   } 
//   else {
//     return false;
//   }
// }

// console.log(test37(12));
// console.log(test37(14));
// console.log(test37(10));
// console.log(test37(11));


// Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
// var sum = 0;
// for (var x = 0; x < 1000; x++)
// {
//     if (x % 3 === 0 || x % 5 === 0)
//     {
//        sum += x;
//     }
// }
// console.log(sum);


// Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50
// function test50(x, y) 
// {
//   return ((x == 50 || y == 50) || (x + y == 50));
// }
// console.log(test50(50, 50))
// console.log(test50(20, 50))
// console.log(test50(20, 20))
// console.log(test50(20, 30))


// Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade
// var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

// var Avgmarks = 0;

// for (var i=0; i < students.length; i++) {
//         Avgmarks += students[i][1];
//         var avg = (Avgmarks/students.length);
// }

// console.log("Average grade: " + (Avgmarks)/students.length);

//         if (avg < 60){
//           console.log("Grade : F");      
//           } 
//         else if (avg < 70) {
//                 console.log("Grade : D"); 
//                   } 
//         else if (avg < 80) 
//              {
//                 console.log("Grade : C"); 
//         } else if (avg < 90) {
//                 console.log("Grade : B"); 
//         } else if (avg < 100) {
//                 console.log("Grade : A"); 
// }


// var name = "joshua"
// console.log(name);


var name = "iman"
console.log(name)


var first_name = "iman"

var 3name = "iman"


#BODMAS
#PEMDAS
#P - PARENTHESIS   =  BRACKET
#E - EXPONENTIATION(RAISED TO THE POWER)
#M - MULTIPLICATION  = OFF 
#D - DIVISION = DIVISION
#A - ADDITION
#S - SUBTRACTION


2 + 2 * 3 -1

2**2 / 1 * 4 + 2

#MODULU

4 % 2
5 % 2