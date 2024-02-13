# ES6 Features
## let
```
let x = 100
for (let i = 0; i < 10; i){

}
```
## const
```
const pi = 3.14
```
## Array Destructuring
```
let nos = [10,20]
let [x,y] = nos
```
## Rest Operator (Array)
```
let nos = [10,20,30,40,50]
let [x,y,...z] = nos
```
## Spread Operator (Array)
```
let nos = [10,20,30,40,50]
let newNos = [...nos, 100, 200,300]
```
## Rest & Spread in function parameters
```
function add(...args){
    let result = 0;
    for (let i = 0; i <args.length; i++)
        result += args[i];
    return result
}

add(10)

add(10,20)

add(10,20,30,40,50)

let nos = [10,20,30,40,50]

add(...nos)
```
## Object Destructuring
```
let product = { id : 100, name : 'Pen', cost : 10, category : 'stationary' }

let {id, cost} = product

let { name : x, category : y } = product
```
## Rest Operator (objects)
```
let product = { id : 100, name : 'Pen', cost : 10, category : 'stationary' }

let { id, ...z } = product
```
## Spread Operator (objects)
```
let product = { id : 100, name : 'Pen', cost : 10, category : 'stationary' }

let updatedProduct = {...product, cost : 9, units : 100 }
```
## Object construction
```
let id = 100,
    name = 'pencil',
    cost = 5

let product = {id , name , cost}
```
## Default Arguments
```
function add(x=10,y=20){
    return x + y;
}
add()

add(100)

add(undefined, 200)

add(100,200)
```
## Arrow functions
```
/*
//function statement
function add(x,y){
    return x + y
}

//function expression
var add = function(x,y){
    return x + y;
}

//arrow function
var add = (x,y) => {
    return x + y;
}
*/
var add = (x,y) => x + y;
```
## Template Strings
```
let x = 100, y = 200
let s = `Sum of ${x} and ${y} is ${x+y}`
```
## Iterators (for...of)
```
let nos = [10,20,30,40,50]

for (let no of nos)
    console.log(no)
```
```
function add(...args){
    let result = 0;
    for (let no of args)
        result += no;
    return result
}
```
## Class
```
class Employee{
    //private instance variable
    #id = 0;

    //public instance variable
    name = '';
    salary = 0;

    //static member
    static ModelType = 'Employee';

    // accessor methods for 'id' attribute
    get id(){
        console.log('id getter triggered');
        return this.#id;
    }

    set id(val){
        //validate val
        console.log('id setter triggered');
        this.#id = val
    }

    // constructor method
    constructor(id, name, salary){
        this.#id = id;
        this.name = name;
        this.salary = salary;
    }

    // public method
    format(){
        return `id = ${this.id}, name = ${this.name}, salary = ${this.salary}`
    }

    // static method
    static IsEmployee(obj){
        return obj instanceof Employee
    }
}
```
## Class Inheritance
```
class FullTimeEmployee extends Employee {
    benefits = '';

    constructor(id, name, salary, benefits){
        super(id, name, salary);
        this.benefits = benefits;
    }

    // override base class method
    format(){
        return `${super.format()}, benefits = ${this.benefits}`
    }
}
```
## Reference
- https://es6-features.org