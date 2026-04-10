//constructor method...
class student
{
  constructor(name,age){
    this.name=name
    this.age=age
  }
}
let s1 = new student("taani",20)
console.log(s1.name)
console.log(s1.age)

//instance method...
class studentss
{
  static count=0
  constructor(name,age){
    this.name=name
    this.age=age
    studentss.increment_count()

  }
  greet(){
    console.log("helloo...." + this.name)
    console.log("age:" + this.age)
  }
  static increment_count(){
    studentss.count++
  }
  static get count(){
    return studentss.count
  }
}
let s2 = new studentss("taani",20)
s2.greet()
let s3 = new studentss("taani",20)
let s4 = new studentss("taani",20)
let s5 = new studentss("taani",20)
let s6 = new studentss("taani",20)
let s7 = new studentss("taani",20)
console.log("==================")
console.log("total number of students created so far...:"+ studentss.count)


//static method...
class calculate
{
  static square(num){
    return num*num
  }
}
console.log(calculate.square(5))

//getter method...
class get_details{
  constructor(name){
    this._name = name
  }
  get name()
  {
    return this._name
  }
}
let t1 = new get_details("taani")
console.log(t1.name)

//setter method...
class set_detailss{
  constructor(age){
    this._age = age
  }
  set age(new_age)
  {
    this._age=new_age
  }
  get age(){
    return this._age
  }

}
let t2 = new set_detailss(20)
t2.age=22
console.log(t2.age)

//objects methods...
let students={
  name:"taani",
  greet : function(){
        console.log("helloo..."+ this.name)
  }
}
students.greet()

//prototype methods...
function Animal(nick_name){
  this.nick_name=nick_name
}
Animal.prototype.speak = function(){
  console.log(this.nick_name + " " + "makes sound....")
}
let a1 = new Animal("puchuu")
a1.speak()


//built-in methods of objectss..
//keys,values,entries,assign
let all_details ={
  contact : 233444,
  full_name : "tanishka verma"

}
console.log(Object.keys(all_details))
console.log(Object.values(all_details))
console.log(Object.entries(all_details))

let data ={
  course : "bca",
  college : "sacred heart"
}
let dataa = {
  stream : "computer science"
}
console.log(Object.assign({},data,dataa))

let num=22
console.log(num)
console.log(typeof num)
console.log(s1 instanceof studentss)
console.log(s1 instanceof student)
MediaStreamAudioDestinationNode