let marks = [85, 90, 78, 92, 88];

let result = marks.reduce(function(a, b) {
    return a + b;
})
let average = result / marks.length;

console.log(average);