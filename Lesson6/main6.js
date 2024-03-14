// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
function leng (a){
    console.log(a.length);
}
leng('hello world');
leng('lorem ipsum');
leng('javascript is cool');
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let appercase = b=>
    console.log(b.toUpperCase());

appercase('hello world');
appercase('lorem ipsum');
appercase('javascript is cool');

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let lowercase = c=>console.log(c.toLowerCase());
lowercase('HELLO WORLD');
lowercase('LOREM IPSUM');
lowercase('JAVASCRIPT IS COOL');

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   ';
console.log(str.trim(2,3));

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
function stringToarray(str){
    let split = str.split();
    console.log(split);
}
stringToarray('Ревуть воли як ясла повні');


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let numberMass = [10,8,-7,55,987,-1011,0,1050,0];
let mapedNumberMass= numberMass.map(function (value){
    return value+'';
});
console.log(mapedNumberMass);
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11,21,3];
function sortNums(arr,direction) {
    if (direction === 'ascending') {
        arr.sort(function (a, b) {
            if (a > b) {
                return 1;
            } else {
                return -1;
            }
        });
        console.log(arr);
    }if (direction ==='descending'){
        arr.sort(function (a, b) {
            if (a>b) {
                return -1;
            } else {
                return 1;
            }
        });
        console.log(arr);}
}
    sortNums(nums,'ascending');
    sortNums(nums,'descending');

// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sortMonthDuration = coursesAndDurationArray.sort( (a,b)=>
{
    if (a.monthDuration > b.monthDuration) {
        return 1;
    }
    if (a.monthDuration < b.monthDuration) {
        return -1;
    }
    if(a.monthDuration === b.monthDuration) {
        return 0;
    }
});
console.log(sortMonthDuration);
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log('-------------------');
let filterMonthDuration=coursesAndDurationArray.filter(value=>value.monthDuration>5);
console.log(filterMonthDuration);
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
console.log('-------------------');
let mapedArray = coursesAndDurationArray.map(function (value,index){
    return{
        id:index+1,
        title:value.title,
        monthDuration:value.monthDuration
    }
});
console.log(mapedArray);
console.log('-------------------');
//     описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let cards = [
    {cardSuit:'spade',value:'6',color:'black'},
    {cardSuit:'spade',value:'7',color:'black'},
    {cardSuit:'spade',value:'8',color:'black'},
    {cardSuit:'spade',value:'9',color:'black'},
    {cardSuit:'spade',value:'10',color:'black'},
    {cardSuit:'spade',value:'jack',color:'black'},
    {cardSuit:'spade',value:'queen',color:'black'},
    {cardSuit:'spade',value:'king',color:'black'},
    {cardSuit:'spade',value:'ace',color:'black'},
    {cardSuit:'diamond',value:'6',color:'red'},
    {cardSuit:'diamond',value:'7',color:'red'},
    {cardSuit:'diamond',value:'8',color:'red'},
    {cardSuit:'diamond',value:'9',color:'red'},
    {cardSuit:'diamond',value:'10',color:'red'},
    {cardSuit:'diamond',value:'jack',color:'red'},
    {cardSuit:'diamond',value:'queen',color:'red'},
    {cardSuit:'diamond',value:'king',color:'red'},
    {cardSuit:'diamond',value:'ace',color:'red'},
    {cardSuit:'clubs',value:'6',color:'black'},
    {cardSuit:'clubs',value:'7',color:'black'},
    {cardSuit:'clubs',value:'8',color:'black'},
    {cardSuit:'clubs',value:'9',color:'black'},
    {cardSuit:'clubs',value:'10',color:'black'},
    {cardSuit:'clubs',value:'jack',color:'black'},
    {cardSuit:'clubs',value:'queen',color:'black'},
    {cardSuit:'clubs',value:'king',color:'black'},
    {cardSuit:'clubs',value:'ace',color:'black'},
    {cardSuit:'heart',value:'6',color:'red'},
    {cardSuit:'heart',value:'7',color:'red'},
    {cardSuit:'heart',value:'8',color:'red'},
    {cardSuit:'heart',value:'9',color:'red'},
    {cardSuit:'heart',value:'10',color:'red'},
    {cardSuit:'heart',value:'jack',color:'red'},
    {cardSuit:'heart',value:'queen',color:'red'},
    {cardSuit:'heart',value:'king',color:'red'},
    {cardSuit:'heart',value:'ace',color:'red'}
];
// - знайти піковий туз
let find = cards.find(card=>card.cardSuit==='spade' && card.value==='ace');
console.log(find);
console.log('-------------------');

// - всі шістки
let filterSix= cards.filter(card=>card.value==='6');
console.log(filterSix);
console.log('-------------------');

// - всі червоні карти
let filterRed =cards.filter(value =>value.color==='red');
console.log(filterRed);
console.log('-------------------');

// - всі буби
let filterDiamonds =cards.filter(value =>value.cardSuit==='diamond');
console.log(filterDiamonds);
console.log('-------------------');

// - всі трефи від 9 та більше
let filterSpide =cards.filter(card=>card.cardSuit==='spade');
let filterSpideTwo = filterSpide.slice(3);
console.log(filterSpideTwo);
console.log('-------------------');
// =========================

//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
console.log(cards.reduce((accumulator, card) => {
    if (card.cardSuit==='spade') {
        accumulator.statT.push(card);
    }if (card.cardSuit==='diamond'){
            accumulator.statN.push(card);
    }if (card.cardSuit==='heart'){
            accumulator.statH.push(card);
    }if(card.cardSuit==='clubs'){
        accumulator.statF.push(card);
    }
    return accumulator;
}, {statT: [],statN:[],statH:[], statF: []}));

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
console.log('-------------------');
// --написати пошук всіх об'єктів, в який в modules є sass
let filterModSass = coursesArray.filter(value=>
    value.modules.includes('sass'))
console.log(filterModSass);
console.log('-------------------');
// --написати пошук всіх об'єктів, в який в modules є docker
let filterModDocker = coursesArray.filter(value=>
value.modules.includes('docker'))
console.log(filterModDocker);
