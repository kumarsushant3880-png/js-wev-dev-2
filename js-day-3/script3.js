// push
// let fruits = ["apple ","banana"];
// let newlenght = fruits.push("cherry");
// console.log(newlenght);
// console.log(fruits);


//pop
// let fruits = ["apple", "banana","cherry"];
// let removed = fruits.pop();
// console.log(removed);
// console.log(fruits);


//shift
// let fruits = ["apple","banana","cherry"];
// let removed = fruits.shift();
// console.log(removed);
// console.log(fruits);



//Q1. reverse the array using push and pop method.
// let arr = [1, 2, 3, 4, 5];
// let reversed = [];
// while (arr.length > 0) {
//     reversed.push(arr.pop());
// }
// console.log(reversed); 


//Q2. remove all negative number from an array.
let arr = [5,-6,7,-11,-7,8]
let res= []

while(arr.length>0){
    let val = arr.shift();
    if(val>0){
        res.push(val);
    }
}
console.log(res);

//Q3. check if array is palindrome or not.