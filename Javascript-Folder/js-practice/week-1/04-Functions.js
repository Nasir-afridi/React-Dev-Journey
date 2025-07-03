// basic function declaration and call it.
function greet() {
  console.log("Hello Nasir!");
}
greet();


// function with parameters
function add(a, b) {
  return a + b;
}
console.log(add(2, 3));



// function with return.
function square(num) {
  return num * num;
}
let result = square(4);


// Arrow function to greet name.
const greet = (name) => {
  return `Hello, ${name}!`;
};
console.log(greet("Nasir"));
