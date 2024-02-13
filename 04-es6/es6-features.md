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
