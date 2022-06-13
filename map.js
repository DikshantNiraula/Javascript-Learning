// we will use Map to get square root of numbers in arrayPopDataList

let arrayToBeMapped = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let square = (number) => number * number; //arrow function, single line

let squaredArray = arrayToBeMapped.map(square); //Map takes a function and perform that function in each value in array

export default squaredArray;