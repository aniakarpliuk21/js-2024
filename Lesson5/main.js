// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let calcRectangle =(a,b)=>a*b;
console.log(calcRectangle(5,7));
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let calcCircle = (r)=>3.14*(r**2);
console.log(calcCircle(3));
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let calcCylinder = (h,r)=>2*3.14*h*r;
console.log(calcCylinder(3,5));
// - створити функцію яка приймає масив та виводить кожен його елемент   !!!!!
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
let massUsers = (array)=> {
    for (const arrayElement of array) {
        console.log(arrayElement);
    }
};
massUsers(users);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let paraf = (text)=>{
    document.write(`<p>${text}</p>`);

}
paraf('Hello!!!');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let ulli = (text)=>{
    document.write(`<ul>
                            <li>${text}</li>
                            <li>${text}</li>
                            <li>${text}</li>
                        </ul>`);
}
ulli('Uniq');
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім
// однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let ulliTwo=(text,num)=>{
    document.write(`<ul>`)
    for (let i=0;i<num;i++){
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
};
ulliTwo('Okidoki',3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let fnOne= (arrays)=> {
    document.write(`<ul>`)
    for (const element of arrays) {
        document.write(`<li>${element}</li> `)
    }
    document.write(`</ul>`)
};
let mass = [1,3,true, 'go',false,-10];
fnOne(mass);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх
// в документ. Для кожного об'єкту окремий блок.
let bigObject = (objects)=>{
    for (const object of objects) {
        document.write(`<div class="boxing">${object.id} ${object.name} ${object.age}</div>
         `)
    }
}
let nameMass = [
    {id:1, name:'petro',age:33},
    {id:2, name:'ivan',age:31},
    {id:3, name:'vasyl',age:35},
    {id:4, name:'kolia',age:28}
];
bigObject(nameMass);
// - створити функцію яка повертає найменьше число з масиву
let minNumber = (arguments)=>{
    let min = arguments[0];
    for (const item of arguments) {
        if (item<min){
            min=item}
    }
    console.log('min', min);
    return min;
}
massNumb= [2,4,5,8,-20,104,-122,-4,0];
minNumber(massNumb);
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
let sum=(arrs)=>{
    let sum = 0
    for (let i = 0; i < arrs.length; i++) {
        sum += arrs[i];
    }
    console.log(sum);
    return sum;
};
massNumb= [2,4,5,8,-20,104,-122,-4,0];
sum(massNumb);
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap=(arrs,index1,index2)=>{
    let numOne = arrs[index1];
    let numTwo = arrs[index2];
    arrs[1]=numOne;
    arrs[0]=numTwo;
}
numbers = [11, 22, 33, 44];
swap(numbers, 0, 1);
console.log(numbers);
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let valut =[
    {currency:'USD',value:40},
    {currency:'EUR',value:42},
    {currency:'PLZ',value:9},
    {currency:'GBP',value:45}
];
let exchange =(sumUAH,currencyValues,exchangeCurrency)=>{
    for (const currencyValue of currencyValues) {
        if(currencyValue['currency']===exchangeCurrency){
            let res = sumUAH/currencyValue['value']
            console.log(res);
        }
    }
};
exchange(10000,valut,'USD');