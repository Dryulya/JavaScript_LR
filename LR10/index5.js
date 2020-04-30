var array = [1, 6, 3, 9, 8, 2, 3, 4, 7, 2, 3, 8, 9];
var mapped = array.map(function (element) {
    return element * 10;
});

console.log('mapped', mapped);
console.log('array', array);
document.write('<hr><br>Task 5<br>mapped: ' + mapped.join(', '));
document.write('<br>array: ' + array.join(', '));
