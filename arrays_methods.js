// let items = ["apple","banana","mango"]
// items.push("pineapple")
// console.log(items)

// items.unshift("litchi")
// console.log(items)

// items.pop()
// console.log(items)

// items.shift()
// console.log(items)

// console.log(items.indexOf("banana"))

// console.log(items.includes("banana"))

// console.log(items.slice(1,3))

// console.log(items.splice(1,1))

// items.push("pineapple")

// console.log(items.join("-"))

// let numbers = [2,3,4,5,6,1]
// console.log(numbers.map(num=>num*2))

// console.log(numbers.filter(num=>num>4))

// console.log(numbers.reduce((total,num)=>total+num,0))

// console.log(numbers.sort())

// console.log(numbers.reverse())

// let a = 12

// console.log(a)
// console.log(typeof a)

// a=String(a)
// console.log(a)
// console.log(typeof a)

// a = ""+12
// console.log(a)
// console.log(typeof a)

// let num = new Number(12)
// console.log(num)
// console.log(typeof num)

let numbers = [10, 20, 30, 40];
let result = numbers.every(num => num > 5);
console.log(result); 

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let result2 = arr1.concat(arr2);
console.log(result2);

let numberss = [10,20,30,20,40];
console.log(numberss.lastIndexOf(20));

let number = [1,2,3,4];
number.forEach(num => {
  console.log(num);
});

let arr = [1,2,[3,4],[5,6]];
let res = arr.flat();
console.log(res);

let fruits = ["apple","banana","mango"];
console.log(fruits.toString());

let fruit = ["apple","banana","mango"];
console.log(fruit.join(" - "));

let num= [5,8,12,3];
let ress = num.some(num => num > 10);
console.log(ress);

let numm = [5,10,15,20];
let rst = numbers.find(numm => numm > 10);
console.log(rst);

let nummm = [5,10,15,20];
let rstt = nummm.findIndex(num => num > 10);
console.log(rstt);


