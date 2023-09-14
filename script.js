// 1. Создание массива из 20 случайных чисел от 0 до 20
let array = [];
for (let i = 0; i < 20; i++) {
    array.push(Math.floor(Math.random() * 21));
}
console.log(array);

// 2. Фильтрация чисел от 5 до 12 с использованием цикла forEach
let filteredArray = [];
array.forEach(function (number) {
    if (number >= 5 && number <= 12) {
        filteredArray.push(number);
    }
});
console.log(filteredArray);


// 2. Фильтрация чисел от 5 до 12 с использованием функции filter:
let filteredArray = array.filter(function (number) {
    return (number >= 5 && number <= 12);
});
console.log(filteredArray);


// 3. Сортировка массива по возрастанию и убыванию:
let sortedArrayAsc = array.slice().sort(function (a, b) {
    return a - b;
});
console.log(sortedArrayAsc);

let sortedArrayDesc = array.slice().sort(function (a, b) {
    return b - a;
});
console.log(sortedArrayDesc);


// 4. Удвоение всех чисел в массиве с использованием цикла и функции map:
let doubledArray1 = [];
for (let i = 0; i < array.length; i++) {
    doubledArray1.push(array[i] * 2);
}
console.log(doubledArray1);

let doubledArray2 = array.map(function (number) {
    return number * 2;
});
console.log(doubledArray2);


// 5. Нахождение суммы чисел с использованием цикла и функции reduce:
let sum1 = 0;
for (let i = 0; i < array.length; i++) {
    sum1 += array[i];
}
console.log(sum1);

let sum2 = array.reduce(function (acc, number) {
    return acc + number;
}, 0);
console.log(sum2);