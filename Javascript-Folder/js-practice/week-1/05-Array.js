let colors = ['red', 'blue', 'green'];
console.log(colors[0]);
colors.push('black'); // ['red', 'blue', 'green', 'black']
colors.pop(); // removes 'black'
colors.unshift('yellow'); // ['yellow', 'red', 'blue', 'green']
colors.shift(); // removes 'yellow'
console.log(colors.includes('blue')); // true
console.log(colors.indexOf('red')); // 0
colors.reverse(); // reverses order
console.log(colors.join('-')); // red-blue-green
