//1.Find the Largest of Three Numbers
// Write a function that takes three numbers as arguments and returns the largest.

// function largestNo(arr){
//     return Math.max(...arr);


// }let largest=largestNo([2,3,4]);
// console.log(largest);


// function largestNo(arr){
//     if(arr[0]>arr[1] &&arr[0]>arr[2]){
//         console.log(`largest No=${arr[0]}`);
//     }
//     else if(arr[1]>arr[0] && arr[1] > arr[2]){
//         console.log(`largest No=${arr[1]}`);
//     }
//     else{
//         console.log(`largest No=${arr[2]}`);
//     }

// }largestNo([5,6,7]);


// function largestNo(a,b,c){
//     if(a>b && a>c){
//         console.log(`largest No=${a}`);
//     }
//     else if(b>a && b>c){
//         console.log(`largest No=${b}`);
//     }
//     else{
//         console.log(`largest No=${c}`);
//     }

// }largestNo(5,68,7);



// 2.Check Even or Odd
// Write a JavaScript program to check if a number is even or odd.

// function evenOdd(no){
//     let num=(no%2==0)? "EvenNo" : "OddNo" ;

//     console.log(num);
// }evenOdd(22);


//3.Sum of an Array
// Given an array of numbers, write a function to calculate the sum.

// function arrAdd(arr,sum){
// for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i];
// }
// console.log(sum);

// }arrAdd([2,6,8],0)



//..................................SumOfNumbers............................................
// function SumOfNumbers(num,sum){
//     while(num>0){
//         let rem = num% 10;
//         sum=parseInt(sum+rem);
//          num=num/10;
//     }
//     console.log(sum);


// }SumOfNumbers(555,0);

//4.Reverse a String
// Write a function to reverse a given string.


// function revString(str){
// // console.log(Object.getPrototypeOf(str));

// for(let i=str.length;i>=0;i--){
//     console.log(str[i]);
// }

// }revString("Diksha");

//5.Palindrome Check
// Write a function to check if a string is a palindrome.

// function revString(str){
//     let reversedStr = str.split('').reverse().join('');

//     if(str===reversedStr){
//             console.log("palindrome");
//         }else{
//             console.log("not");
//         }
// }revString("mam");



// function palindrome(str){
//     let rev=1;
// while(str>0){
//     let rem=str%10;
//     rev=(rev*10)+rem;
//     str=str/10;

// }
// if(str==rev){
//     console.log("palindrome");
// }else{
//     console.log("not");
// }
// }palindrome("dpd");


//6.Find the Longest Word in a String
// Write a function that takes a string and returns the longest word.


// function longestWord(str){
//     let arr=str.split(" ");
//     // console.log(arr);

//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i].length<arr[j].length){
//                 let temp=arr[i];
//                 arr[i]=arr[j];
//                 arr[j]=temp;
//             }
//         }
//     }
//     console.log(arr[0]);

// }longestWord("hi hello good morning");



//7.Title Case a Sentence
// Write a function that capitalizes the first letter of each word in a string.


// function titleCase(str) {
//     let result = '';
//     let capitalizeNext = true;

//     for (let i = 0; i < str.length; i++) {
//       let currentChar = str[i];

//       if (capitalizeNext && currentChar >= 'a' && currentChar <= 'z') {
//         // Capitalize the first letter of the word
//         result =result + String.fromCharCode(currentChar.charCodeAt(0) - 32);
//         capitalizeNext = false;
//       } else {
//         result =result + currentChar;
//       }

//       if (currentChar === ' ' || currentChar === '\t' || currentChar === '\n') {
//         capitalizeNext = true; // Next character should be capitalized
//       }
//     }

//     console.log(result);
//   }

//   titleCase("hi hello good morning");








// function titleCase(str){
//     // console.log(Object.getPrototypeOf(str));
//     let aa=str.toUpperCase();
//     console.log(aa);


// }titleCase("hi hello good morning");



//8.Count the Number of Vowels
// Given a string, write a function to count the number of vowels.

// function vowels(str){
// let count=0;
//     for(let i=0;i<str.length;i++){
//         if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u')
//         {
//           count++;
//         }
//     }
//     console.log((count));
// }vowels("morning");


//9.Array Max and Min
// Write functions to find the maximum and minimum elements in an array.

// function arrSort(arr) {

// let res;
// for(let i=0;i<arr.length;i++){

//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]>arr[j])
//             {
//                 res=arr[i];
//                 arr[i]=arr[j];
//                 arr[j]=res;
//             }
//         }
//     }
//     console.log(arr);
//     console.log(`min=${arr[0]}`);
//     console.log(`max=${arr[arr.length-1]}`);


// } arrSort([21, 54, 6, 55, 78, 20, 41]);


//10.Factorial of a Number
// Write a function to find the factorial of a given positive integer.

// function factorial(number){
// let fact = 1;
// for (let i = 1; i <= number; i++) {

//     fact = fact * i;

// } console.log(fact);
// }factorial(5)















//----------------------------------------------------------- Intermediate Questions
//1. Fibonacci Sequence
// Write a function to generate the Fibonacci sequence up to a given number.

// function fibonacci(num){
//     f1=0,f2=1;
//     let f3;
//     for(i=0;i<num;i++){
//       f3=f1+f2;
//       console.log(f3);
//       f1=f2;
//       f2=f3;
//     }

// }fibonacci(5);



// Check Prime Number
// Write a function that checks if a number is prime.

// function primeNo(num){
//     let i;
//     for( i=2;i<=num;i++){
//         if(num%i==0){
//             break;
//         }
//     }
//     if(i==num){
//         console.log("It is prime no");
//     }
//     else{
//         console.log("Not a prime no");
//     }

// }primeNo(25);

// Remove Duplicates from an Array
// Write a function to remove duplicates from an array.

// function duplicates(arr){
//     let isDuplicate=false;
//     let arr2=[];
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]==arr[j]){
//                 isDuplicate=true;
//                 break;
//             }

//         }

//     if(!isDuplicate){
//         arr2.push(arr[i]);

//     }
// }
//    return arr2;


// }let res=duplicates([10,20,12,31,12,10,44,20]);
// console.log(res);

//..................................................................................................
// function removeDuplicates(arr) {
//     let uniqueArray = [];

//     for (let i = 0; i < arr.length; i++) {
//       let isDuplicate = false;

//       for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] === arr[j]) {
//           isDuplicate = true;
//           break;
//         }
//       }

//       if (!isDuplicate) {
//         uniqueArray.push(arr[i]);
//       }
//     }

//     return uniqueArray;
//   }

//  
//   let originalArray = [10, 20, 12, 31, 12, 10, 44, 20];
//   let newArray = removeDuplicates(originalArray);

//   console.log(newArray);

// Find the Missing Number in an Array
// Given an array of integers where each integer is between 1 and n and one is missing, find the missing integer.


// function missingNumber(arr) {
//     const n = arr.length + 1; // Because one number is missing

//     // Calculate the expected sum of consecutive integers from 1 to n
//     let expectedSum = 0;
//     for (let i = 1; i <= n; i++) {
//       expectedSum += i;
//     }

//     // Calculate the actual sum of the array elements
//     let actualSum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       actualSum += arr[i];
//     }

//     // Calculate the missing number
//     const missingNumber = expectedSum - actualSum;

//     return missingNumber;
//   }

//   const result = missingNumber([1, 2, 3, 4, 6, 7]);
//   console.log(result); 



// function missingNumber(arr){
//     for(let i=0;i<arr.length;i++){

//     }

// }missingNumber([1,2,3,4,6,7]);
// Merge Two Sorted Arrays
// Write a function that merges two sorted arrays into one sorted array.
// function mergeArray(arr1,arr2,arr3){
//     arr3=[...arr1,...arr2];
//     console.log(arr3);


// }mergeArray([1,2,3,4],[5,6,7,8],[]);

// Count Characters in a String
// Write a function that counts the number of occurrences of each character in a string.
// function countCharacters(str) {
//     const charCount = {};

//     for (let i = 0; i < str.length; i++) {
//       const currentChar = str[i];


//       if (charCount[currentChar]) {
//         charCount[currentChar]++;
//       } else {
//         charCount[currentChar] = 1;
//       }
//     }

//     for (let char in charCount) {
//       console.log(`${char}: ${charCount[char]}`);
//     }
//   }

//   countCharacters("hello world");


// Flatten an Array
// Write a function that flattens an array. The array can have multiple levels of nesting.

// function flattenArray(arr) {
//     return arr.flat(Infinity);
//   }

//   const nestedArray = [1, [2, [3, 4], 5], 6, [7, [8, 9]]];
//   const flattenedArray = flattenArray(nestedArray);
//   console.log(flattenedArray);



// Rotate an Array
// Write a function that rotates an array to the right by k steps.

// function rotateArray(arr, k) {
//     const n = arr.length;
//     k = k % n;

//     // Helper function to rotate a single element to the right
//     const rotateSingle = (index) => {
//       let temp = arr[index];
//       let nextIndex = (index + k) % n;

//       while (nextIndex !== index) {
//         let temp2 = arr[nextIndex];
//         arr[nextIndex] = temp;
//         temp = temp2;
//         nextIndex = (nextIndex + k) % n;
//       }

//       arr[index] = temp;
//     };

//     // Rotate each element in the array
//     for (let i = 0; i < n; i++) {
//       rotateSingle(i);
//     }

//     return arr;
//   }

//   const inputArray = [1, 2, 3, 4, 5];
//   const stepsToRotate = 2;

//   const rotatedArray = rotateArray(inputArray, stepsToRotate);
//   console.log(rotatedArray); 


// First Unique Character in a String
// Write a function that finds the first non-repeating character in a string and returns its index.

// function firstUniqueChar(str) {
//     const charCount = [];


//     for (let i = 0; i < str.length; i++) {
//       const currentChar = str[i];
//       charCount[currentChar] = (charCount[currentChar] || 0) + 1;
//     }


//     for (let i = 0; i < str.length; i++) {
//       if (charCount[str[i]] === 1) {
//         return i;
//       }
//     }

//     return -1; 
//   }

//   const inputString = "leetcode";
//   const resultIndex = firstUniqueChar(inputString);
//   console.log(resultIndex); 

// Convert Roman Numerals to Integers
// Write a function that converts a Roman numeral to an integer.





// Find the Duplicate in an Array of Numbers
// Write a function that finds the first duplicate number in an array. If there are no duplicates, return -1.


function duplicateArray(arr, arr2) {

  let flag = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i = 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        arr2[i] = arr[i];
        flag++;

      }

    }
  }
  return -1;

} duplicateArray([1, 5, 4, 3, 2, 5, 4, 1, 6, 8], []);