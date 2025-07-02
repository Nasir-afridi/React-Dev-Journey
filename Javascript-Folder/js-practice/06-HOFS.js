let arr = [1, 2, 3];
arr.forEach(function(num) {
  console.log(num);
});

let nums = [2, 4, 6];
let doubled = nums.map(function(num) {
  return num * 2;
});
console.log(doubled);


let names = ['Ali', 'Nasir', 'Mo'];
let result = names.filter(function(name) {
  return name.length > 3;
});
console.log(result); // ['Ali', 'Nasir']
