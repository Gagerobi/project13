//Creating two arrays holding 5 numbers each
const arr1 = [10, 100, 50, 95, 40];
const arr2 = [455, 900, 730, 150, 390];

//Using this function to find the sum of the two lowest numbers in the array
function sumTwoSmallestNumbers(arr) {  
    var min = Infinity;                     //assigning two variables to infinity, so they won't be low numbers
    var secondMin = Infinity; 
    var sum;
    
    //using a for loop to find the lowest numbers
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
          secondMin = min;                  //setting secondMin to the current min number if the newest number in the array is lower than min
          min = arr[i];                     //setting min to the new lowest number
      } else if (arr[i] < secondMin) {      //if the number in the array was not lower than min this will see if it is lower than secondMin
          secondMin = arr[i];               //if it is, secondMin is assigned to that number
      }
    }
    
    sum = min + secondMin;      
    
    return sum;
};

//calling the function for each console.log passing in each array we declared at the beginning
console.log("The sum of the two smallest numbers in array 1 is: ", sumTwoSmallestNumbers(arr1));
console.log("The sum of the two smallest numbers in array 2 is: ", sumTwoSmallestNumbers(arr2));