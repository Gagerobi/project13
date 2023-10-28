const arr1 = [10, 100, 50, 95, 40];
const arr2 = [455, 900, 730, 150, 390];

function sumTwoSmallestNumbers(arr) {  
    var min = Infinity, secondMin = Infinity; 
    var sum;
    
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
          secondMin = min;
          min = arr[i]; 
      } else if (arr[i]< secondMin) {
          secondMin = arr[i]; 
      }
    }
    
    sum = min + secondMin;
    
    return sum;
};

console.log("The sum of the two smallest numbers in array 1 is: ", sumTwoSmallestNumbers(arr1));
console.log("The sum of the two smallest numbers in array 2 is: ", sumTwoSmallestNumbers(arr2));