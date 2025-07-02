let arr = [2,4,6];

let result = arr.map(function(num) {
    return num *2
})

console.log(result)


let arrs = ['he','nasir', 'ali', 'bilal', 'asif']
let res = arrs.filter(function(str) {
    return str.length > 3
})
console.log(res);