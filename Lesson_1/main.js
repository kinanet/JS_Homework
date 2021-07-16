console.log('First option');
var a = 3, b = 21;
console.log('a = ' + a + ', b = ' + b);
var c = a;
a = b;
b = c;
console.log('a = ' + a + ', b = ' + b);
console.log('');

console.log('Second option');
console.log('a = ' + a + ', b = ' + b);
a += b;
b = a - b;
a -= b;
console.log('a = ' + a + ', b = ' + b);