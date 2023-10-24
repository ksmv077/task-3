let arr = [5,5,5,5,5,5,5,5,5,5]
let accumulator = []
let b = 0; 
for(let i = 0; i < arr.length; i++)
 b += arr[i]
accumulator.push(b)
console.log(accumulator)
