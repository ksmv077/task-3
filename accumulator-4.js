let arr = ['murad', 'imran', 'mohmad', 'adam', 'amir', 'mansur']
let accumulator = [];
for(let i = 0; i < arr.length; i++){
    if(arr[i].startsWith('a'))
    accumulator.push(arr[i])
}
console.log(accumulator)