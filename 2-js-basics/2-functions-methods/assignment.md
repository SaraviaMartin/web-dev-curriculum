# Fun with Functions

## Instructions

Create different functions, both functions that return something and functions that don't return anything.

See if you can create a function that has a mix of parameters and parameters with default values.

## Rubric

| Criteria | Exemplary                                                                              | Adequate                                                         | Needs Improvement |
| -------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------- | ----------------- |
|          | Solution is offered with two or more well-performing functions with diverse parameters | Working solution is offered with one function and few parameters | Solution has bugs |


```javascript
//Normal Function

function helloWorld(){
    console.log("Hello, World!")
}

//Passing information to a Function

function helloWorld(name, surname){
    const messaje = `Hello, ${name}, ${surname}`
    console.log(messaje)
}

//Default Values

function helloWorld(name, surname="Martin"){
    const messaje = `Hello, ${name} ${surname}`
    console.log(messaje)
}

//Return Values

function salutationName (name) {
  const message = `Hello, ${name}`;
  return message;
}
```