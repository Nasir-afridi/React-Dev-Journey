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

console.log(check(33));