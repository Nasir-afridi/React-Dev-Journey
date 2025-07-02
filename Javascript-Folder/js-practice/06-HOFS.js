let arr = [1, 2, 3];
arr.forEach(function(num) {
  console.log(num);
});

let nums = [2, 4, 6];
let doubled = nums.map(function(num) {
  return num * 2;
});
console.log(doubled);
