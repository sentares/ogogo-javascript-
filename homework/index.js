// 1 задание

const user = {
    name: 'john',
    age: 26
}

function type(sort) {
    return typeof sort
}

console.log(type (user.name));
console.log(type (user.age));



// 2 задание 

const numbers = {
    n1: 66,
    n2: 5
}

function evenOrNot(even) {
    if (even % 2 ===0) {
        console.log('even');
    } else {
        console.log('not even');
    }
}

console.log(evenOrNot (numbers.n1))
console.log(evenOrNot (numbers.n2))



// 3 и 4 задания

const person = {
    name: 'fred',
    bornDate: '18 november 2002'
}

function value(vl) {
    const valueOfPerson = Object.assign ({}, vl)
    return Object.values (valueOfPerson)
}

function keys(ke) {
    const keysOfPerson = Object.assign ({}, ke)
    return Object.keys (keysOfPerson)
}

console.log(value(person));
console.log(keys(person));


