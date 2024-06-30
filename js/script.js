// Task 1
// Создайте функцию которая возводит переданное число в куб, 
// необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

const getDegreeCube = (x) => x ** 3;
console.log(`Result degree 2 in 3: ${getDegreeCube(2)}`);
console.log(`Result degree 3 in 3: ${getDegreeCube(3)}`);

// Task 2
// Пользователь вводит с клавиатуры число, если ввёл текст,
// необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и 
// выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

let inputSalary = +prompt("Enter salary: ", 28000);

const salaryMinusTax = (salary) => {
    if(salary === toString(salary)){
        console.log("Invalid value. Try again later");
    }
    return console.log(`The amount of wages, net of taxes, is equal ${salary * 0.87}`);
}

salaryMinusTax(inputSalary);

// Task 3
// Пользователь с клавиатуры вводит 3 числа,
// необходимо создать функцию, которая определяет максимальное значение среди этих чисел

let firstValue = +prompt("Enter first value: ", 1);
let secondValue = +prompt("Enter second value: ", 2);
let thirdValue = +prompt("Enter third value: ", 3);

const maxValue = (num1, num2, num3) => Math.max(num1, num2, num3);

console.log(`Maximum value from 3 number: ${maxValue(firstValue, secondValue, thirdValue)}`);

// Task 4
// Необходимо реализовать четыре функции, каждая функция должна 
// принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, 
// например выражение console.log(sum(2, 6)); должно вывести число 8 
// в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). 
// Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, 
// функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. 
// Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

let firstNumber = +prompt("Enter first number: ", 1);
let secondNumber = +prompt("Enter second number: ", 2);

const summaNumbers = (num1, num2) => num1 + num2;
const differenceNumbers = (num1, num2) => (num2 > num1) ? num2 - num1 : num1 -num2;
const multiplicationsNumbers = (num1, num2) => num1 * num2;
const divisionNumbers = (num1, num2) => (num2 > num1) ? num2 / num1 : num1 / num2;

console.log(`Summa: ${summaNumbers(firstNumber, secondNumber)}`);
console.log(`Difference: ${differenceNumbers(firstNumber, secondNumber)}`);
console.log(`Multiplication: ${multiplicationsNumbers(firstNumber, secondNumber)}`);
console.log(`Division: ${divisionNumbers(firstNumber, secondNumber)}`);