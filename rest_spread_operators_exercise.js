function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
        return num % 2 === 0
    });
}

//refactor it to use the rest operator & an arrow function:

const filterOutOdds = (...arg) => arg.filter(num => num %2 === 0)

//write a function called findMin that accepts a variable number of arguments and returns the smallest argument
//make sure to do this using the rest and spread operator

const findMin = (...nums) => Math.min(...nums)

//write a function called mergeObjects that accepts two objs and returns a new obj which contains all keys and vals
//of the first and second objs

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

//write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments.
//the function should return a new array w/ the original array values and all additional arguments doubled

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(num => num * 2)]

//remove a random element in the items array
//and return a new array w/o that item

const removeRandom = items => {
    let index = Math.floor(Math.random() * items.length);
    return [...items.slice(0,index), ...items.slice(index + 1)];
}

//return a new array with every item in array1 and array2

const newArr = (array1, array2) => {
    return [...array1, ... array2];
}

//return a new obj w/ all keys and vals
//from obj and a new key/val pair

const newKeyVal = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}

//return a new obj w/ a key removed

const removeKey = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key]
    return newObj;
}

//combine two objs and retun a new obj

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2 };
}

//return a new obj w/ modified key and value

const mod = (obj, key, value) => {
    let modObj = {...obj}
    modObj[key] = value;
    return modObj;
}