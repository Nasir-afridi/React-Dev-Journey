let names = 'muhammad nasir';

let result = names.split(' ').map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}).join(' ');

console.log(result);