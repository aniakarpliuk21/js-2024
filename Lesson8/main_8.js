// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
class User{
    constructor(id,name,surname,email,phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}
let user1 = new User(1,'ivan','Shevchenko','shevaivan@gmail.com','+38096-443-22-94');
let user2 = new User(2,'vasul','Moroz','moroz@gmail.com','+38096-444-12-54');
let user3 = new User(3,'petro','Kogut','kogutp@gmail.com','+38096-483-28-24');
let user4 = new User(4,'andrii','Andrijko','andrijkoa@gmail.com','+38096-143-22-94');
let user5 = new User(5,'ania','Veluchko','aniav@gmail.com','+38096-443-62-94');
let user6 = new User(6,'vika','Semenko','vikasemenko@gmail.com','+38096-553-22-94');
let user7 = new User(7,'oksana','Dziob','oksanadz@gmail.com','+38096-443-11-94');
let user8 = new User(8,'iryna','Oliynuk','irunaol@gmail.com','+38096-233-22-94');
let user9 = new User(9,'ostap','Kin','kinostap@gmail.com','+38096-456-22-94');
let user10 = new User(10,'veniamin','Pavelko','pavelkov@gmail.com','+38097-443-22-94');
let users = [user1,user2,user3,user4,user5,user6,user7,user8,user9,user10];
console.log(users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filterUsers = users.filter(value=>value.id%2===0);
console.log(filterUsers);
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sort = filterUsers.sort((a,b)=>{
    return a.id-b.id;
});
console.log(sort)
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client{
    constructor(id,name,surname,email,phone,order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let client1 = new Client(1,'ivan','Shevchenko','shevaivan@gmail.com','+38096-443-22-94',['apple','peach']);
let client2 = new Client(2,'vasul','Moroz','moroz@gmail.com','+38096-444-12-54',['tomato','banana']);
let client3 = new Client(3,'petro','Kogut','kogutp@gmail.com','+38096-483-28-24',['apple','peach','tomato','banana']);
let client4 = new Client(4,'andrii','Andrijko','andrijkoa@gmail.com','+38096-143-22-94',['pineapple','peach']);
let client5 = new Client(5,'ania','Veluchko','aniav@gmail.com','+38096-443-62-94',['apple','peach','banana']);
let client6 = new Client(6,'vika','Semenko','vikasemenko@gmail.com','+38096-553-22-94',['juice','peach']);
let client7 = new Client(7,'oksana','Dziob','oksanadz@gmail.com','+38096-443-11-94',['carrot','tomato juice','bread','butter','peach']);
let client8 = new Client(8,'iryna','Oliynuk','irunaol@gmail.com','+38096-233-22-94',['butter','peach']);
let client9 = new Client(9,'ostap','Kin','kinostap@gmail.com','+38096-456-22-94',['apple','bread']);
let client10 = new Client(10,'veniamin','Pavelko','pavelkov@gmail.com','+38097-443-22-94',['tomato juice','peach']);
let clients = [client1,client2,client3,client4,client5,client6,client7,client8,client9,client10];
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortClients = clients.sort((a,b)=>{
    return a.order.length-b.order.length
});
console.log(sortClients);
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в
// поточний об'єкт car
function Car (model,producer,year,maxSpeed,engine){
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
    this.drive = function (){
        return `їдемо зі швидкістю ${maxSpeed} на годину`
    }
    this.info = function (){
        return `
        Модель -  ${model}
        Виробник - ${producer}
        Рік випуску - ${year}
        Максимальна швидкість - ${maxSpeed}
        Об'єм двигуна - ${engine}
        `
    }
    this.increaseMaxSpeed = function (newSpeed){
        return newSpeed+maxSpeed;
    }
    this.changeYear = function (newValue){
        return this.year = newValue;
    }
    this.addDriver = function (driver){
         this.driver = driver;
    }
}

let car1 = new Car('RAV4','Toyota',2016,280,'2.5 Hybrid',{name:'Karpl'});
console.log(car1);
console.log(car1.drive());
console.log(car1.info());
console.log(car1.increaseMaxSpeed(30));
console.log(car1.changeYear(2019));
console.log(car1);
car1.addDriver({name:'Violla',surname: 'Kadkalo'})
console.log(car1.driver);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна.
class Cary{
    constructor(model,producer,year,maxSpeed,engine) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }
    // додати в об'єкт функції:
    // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

    drive(){
        return `їдемо зі швидкістю ${this.maxSpeed} на годину`
    }
    // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    info(){
        return `
        Модель -  ${this.model}
        Виробник - ${this.producer}
        Рік випуску - ${this.year}
        Максимальна швидкість - ${this.maxSpeed}
        Об'єм двигуна - ${this.engine}
        `
    }
    // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    increaseMaxSpeed (newSpeed){
        return newSpeed+this.maxSpeed;
    }
    // -- changeYear (newValue) - змінює рік випуску на значення newValue
    changeYear (newValue){
        return this.year = newValue;
    }
    // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    addDriver(driver){
        this.driver = driver;
    }
}


let car2 = new Cary('Camry','Toyota',2014,230,'3.0');
console.log(car2);
console.log(car2.drive());
console.log(car2.info());
console.log(car2.increaseMaxSpeed(15));
console.log(car2.changeYear(2011));
console.log(car2);
car2.addDriver({name:'Andrii',surname:'Karpl'});
console.log(car2);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Cinderella{
    constructor(name,age,footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let cind1 = new Cinderella('Alisa',28,36);
let cind2 = new Cinderella('Ania',37,37);
let cind3 = new Cinderella('Natalia',21,38);
let cind4 = new Cinderella('Veronika',23,39);
let cind5 = new Cinderella('Iryna',22,40);
let cind6 = new Cinderella('Natalia',29,35);
let cind7 = new Cinderella('Julia',28,34);
let cind8 = new Cinderella('Svitlana',22,33);
let cind9 = new Cinderella('Ruslana',33,32);
let cind10 = new Cinderella('Violetta',32,41);
let cinderellas = [
    cind1,cind2,cind3,cind4,cind5,
    cind6,cind7,cind8,cind9,cind10
]
class Prince{
    constructor(name,age,shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}
let prince1 = new Prince('Andrij',37,32);
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let filterShoeCind = cinderellas.filter(value=>
    value.footSize === prince1.shoe);
console.log(filterShoeCind);
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку.
let find = cinderellas.find(value=> value.footSize === prince1.shoe)
console.log(find);