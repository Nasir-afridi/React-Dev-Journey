// 1.
function check(n) {
  if(n > 0){
    console.log("positive");
  } else if(n < 0) {
    console.log("negative");
  } else if(n === 0) {
    console.log("zero");
  }
  return n;
}
check(33);



// 2.
function findMax(a, b, c) {
  if(a > b && a > c) {
    return a;
  }else if (b > a && b > c){
    return b;
  }else {
    return c
  }}

console.log(findMax(3, 4777777, 5));