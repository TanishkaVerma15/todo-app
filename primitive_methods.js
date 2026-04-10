//primitive data types methods..
//String 
console.log("string methods.....") 
let string = "Be strong, be fearless, be beautiful."
console.log(string.length)
console.log(string.toUpperCase())
console.log(string.toLowerCase())
console.log(string.includes("strong"))
console.log(string.includes("straw"))
console.log(string.indexOf("s"))
console.log(string.slice(3,22).toLowerCase())
console.log(string.replace("strong","powerful"))
console.log(string.split(":"))
//replaceAll

console.log("NUMBER METHODS....")
let num = 242.7876
let num2 = 234
let num3 = "2345"
let num4 = "23.56"
console.log(num.toFixed(2))
let str = num2.toString()
console.log(typeof str)
console.log(parseInt(num3))
console.log(parseFloat(num4))
console.log(isNaN(num2))

console.log("BOOLEAN METHODS...")
let isLoggedIn = true
let output = isLoggedIn.toString()
console.log( typeof output)

console.log("UNDEFINED...")
let name 
console.log(typeof name)

console.log("NULL...")
let age = null
console.log(age)
console.log(typeof age)

console.log("SYMBOL...")
let id1 = Symbol("1")
let id2 = Symbol("1")
console.log(id1 === id2)

console.log("BIG INT....")
let big = 9007199254740991n
console.log(big)
console.log(typeof big)





