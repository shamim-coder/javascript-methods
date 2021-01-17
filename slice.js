// array.slice(start, end)
const FRUITS = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// output main array
console.log(FRUITS);

var citrus = FRUITS.slice(1, 3);
// citrus => [ 'Orange', 'Lemon' ]

// output with 1 index to until index 3.
console.log(citrus);

// Negative values slice in the opposite direction
var fromTheEnd = FRUITS.slice(-3, -1);
// fromTheEnd => [ 'Lemon', 'Apple' ]

console.log(fromTheEnd);