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

//Arrow functions  Exaples

// Traditional anonymous function
(function (a, b) {
  return a + b + 100;
});

// Arrow function
(a, b) => a + b + 100;

const a = 4;
const b = 2;

// Traditional anonymous function (no parameters)
(function () {
  return a + b + 100;
});

// Arrow function (no parameters)
() => a + b + 100;


//The braces can only be omitted if the function directly returns an expression. If the body has additional lines of processing, the braces are required — and so is the return keyword. Arrow functions cannot guess what or when you want to return.

// Traditional anonymous function
(function (a, b) {
  const chuck = 42;
  return a + b + chuck;
});

// Arrow function
(a, b) => {
  const chuck = 42;
  return a + b + chuck;
};



```