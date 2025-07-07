// Sum, Average, Max/Min Calculations

let a = 2;
let b = 3;

console.log(a + b);
console.log(a + b / 2);
console.log(Math.max(a, b));
console.log(Math.min(a, b));


//  ✔ Even/Odd, Prime Check

const even = (num) => {

  if (num % 2 === 0) {
    return "Even";
  }
  return "Odd";

}
console.log(even(5));


const prime = (num) => {
  if (num <= 1) {
    console.log('Not Prime');
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    console.log(i);
    if (num % i === 0) {
      return "not prime";
    }
  } return "prime";
}
console.log(prime(9));



//  ✔ Factorial (iterative)

const Factorial = (num) => {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    console.log(i);
    result = result * i;

  }
  return result;


}

console.log(Factorial(5));


//  ✔ Multiplication Tables

const multiplyTable = (num, length) => {

  for (let i = 1; i <= length; i++) {
    // console.log(i);
    let product = num * i;
    console.log(`${num} * ${i} = ${product}`);
  }
}
multiplyTable(2, 10)


//  ✔ Number Reversal, Palindrome Check (numbers)
const checkPalindrom = (num) => {

  let Palindrome = Number(num.toString().split('').reverse().join(''));
  console.log(Palindrome);
  if (Palindrome === num) {
    console.log(`${num} is Palindrom`);
  }
  else {
    console.log(`${num} is not Palindrom`);

  }
}
checkPalindrom(121)




const isPalindrome = (num) => {
  let originalNum = num;
  let reversed = 0;

  while (num > 0) {
    let digit = num % 10;           // Get last digit
    reversed = reversed * 10 + digit; // Add digit to reversed number
    num = Math.floor(num / 10);     // Remove last digit
  }

  if (reversed === originalNum) {
    console.log(`${originalNum} is a palindrome`);
  } else {
    console.log(`${originalNum} is not a palindrome`);
  }
};

isPalindrome(121); // ✅
isPalindrome(123); // ❌
isPalindrome(12321); // ✅
