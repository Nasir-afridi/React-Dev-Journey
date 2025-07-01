function Hello() {
    return 'hello nasir'
}
console.log(Hello());




function squ(num) {
    return num * num;
}
let result = squ(22);
console.log(result);




function sum(a, b, c) {
    return a + b + c
}

console.log(sum(2,4,6));



const names = (name) => {
    return `Hello ${name}`
}

console.log(names('nasir'))

function evenOdd(num) {
     if(num % 2 === 0){
        console.log('even')
    }else{
        console.log('odd')
    }
}

evenOdd(3);