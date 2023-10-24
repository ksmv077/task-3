let arr = [1, 3, 4, 5, -3, -7, 9, -10]
let accumulator = [];
let a = 0;
let i = 0;
while (i < arr.length) {
    if (arr[i] > a) {
    accumulator.push(arr[i])
    }
    i++
}
console.log(accumulator)