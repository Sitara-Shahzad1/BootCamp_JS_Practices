const largest = (arr) => {

  let max = arr[0]; // start by assuming first number is largest

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
};

console.log(largest([1, 2, 3, 4, 75, 5, 7, 8, 9])); 


// checking smallest 

const smallest =(arr) =>{


  let min = arr[0];
  
   for (let i = 1; i < arr.length; i++) {
   
    if(arr[i] < min ){
        min = arr[i]
    }
   }
   return min
}
console.log(smallest([1, 2, 3, 4, 75, 0, 7, 8, 9])); 