// slice - иммутабельный

// массив.slice(откуда резать, [докуда резать]);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let sub = arr.slice(1, 3) //3-й не включительно

// console.log('arr: ', arr);
// console.log('sub: ', sub);

// 2)
// let arr = ['a', 'b', 'c', 'd', 'e'];
// let sub = arr.slice(2)

// console.log('arr: ', arr); //  ['a', 'b', 'c', 'd', 'e']
// console.log('sub: ', sub); //  ['c', 'd', 'e']

// 3)

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let sub = arr.slice(1, -1)

// console.log('arr: ', arr);
// console.log('sub: ', sub);  // sub:  (3) ['b', 'c', 'd']

// splice() - мутабельный
// массив.splice(откуда удаляем, сколько удаляем, [вставить], [вставить]...);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let res = arr.splice(1, 3);

// console.log('arr: ', arr); // ['a', 'e']
// console.log('res: ', res); // ['b', 'c', 'd']

// 2)


// let arr = ['a', 'b', 'c', 'd', 'e'];
// let res = arr.splice(1, 0, 'test1', 'test2', 'test3');

// console.log('arr: ', arr); // ['a', 'e']
// console.log('res: ', res); // ['b', 'c', 'd']

// 3)

// let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.splice(1, 2, 'test1', 'test2')

// console.log('arr: ', arr); // ['a', 'test1', 'test2', 'd', 'e']


// toSplice() - иммутабельный

// const months = ['Jan', 'Mar', 'Apr', 'May'];
// const res = months.toSpliced(1, 0, 'February')

// console.log('months: ', months);
// console.log('res: ', res);

// reduce()

// arr.reduce((acc, item, index) => {}) //arr[0]
// arr.reduce((acc, item, index) => {}, 0)


// sum

// let a = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
// 	sum = sum + array[i]
// }

// reduce

// let a = [1, 2, 3, 4, 5];
// let res = a.reduce((acc, el) => {
// 	console.log('acc', acc);
// 	return acc + el
// }, 0)

// console.log('res: ', res);


// const fruits = [
// 	{ name: 'apple', quantity: 2 },
// 	{ name: 'banana', quantity: 3 },
// 	{ name: 'orange', quantity: 1 },
// ];

// const res = fruits.reduce((acc, el) => {
// 	console.log('acc:', acc);
// 	console.log('el:', el);
// 	return acc + el.quantity
// }, 0)

// console.log('res:', res);


// 3 MaxNumbers

// let a = [1, 2, 3, 4, 5];
// let res = a.reduce((acc, current) => {
// 	console.log('current: ', current);
// 	console.log('acc:', acc);
// 	return current > acc ? current : acc;
// })//не указываем через запятую, т.к. по дефолту это a[0]

// console.log('res', res);

// 4

// const people = [
// 	{ name: 'Alice', age: 25 },
// 	{ name: 'Bob', age: 30 },
// 	{ name: 'Charlie', age: 22 },
// ];

// const res = people.reduce((acc, person) => {
// 	console.log('person: ', person);

// 	acc.totalNames.push(person.name);
// 	acc.totalAges += person.age

// 	return acc;

// }, { totalNames: [], totalAges: 0 })

// console.log('res:', res);

// 5

// const people = [
// 	{ name: 'Alice', age: 25 },
// 	{ name: 'Bob', age: 30 },
// 	{ name: 'Charlie', age: 22 },
// ];

// const res = people.reduce((acc, person, index) => {
// 	console.log('person: ', person);

// 	acc.totalNames.push(person.name);
// 	acc.totalAges += person.age
// 	acc.index++

// 	return acc;

// }, { totalNames: [], totalAges: 0, index: 0 })

// console.log('res:', res);

// 6

// const people = [
// 	{ name: 'Alice', age: 25 },
// 	{ name: 'Bob', age: 30 },
// 	{ name: 'Charlie', age: 22 },
// ];

// const mappedInfo = people.map((person) => ({
// 	name: person.name,
// 	age: person.age,
// }))

// console.log('mappedInfo:', mappedInfo);

// const combinedInfoMap = {
// 	totalNames: mappedInfo.map((person) => person.name),
// 	totalAges: mappedInfo.reduce((acc, el) => acc + el.age, 0),

// }

// console.log('combinedInfoMap:', combinedInfoMap);

// 7

// const peoples = [
// 	{ name: 'Vika', age: 25, budget: 4500 },
// 	{ name: 'Nikita', age: 45, budget: 35000 },
// 	{ name: 'Igor', age: 55, budget: 340 },
// 	{ name: 'Insaf', age: 65, budget: 50000 },
// 	{ name: 'Alyona', age: 75, budget: 20 },
// ];

// 1: подсчитать бюджет например: 1234

// const res = peoples.reduce((acc, current) => {
// 	return acc + current.budget
// }, 0)


// const res = peoples.reduce((acc, current) => {
// 	acc.totalAges += current.age;
// 	acc.totalNames.push(current.name)
// 	return acc
// }, { totalAges: 0, totalNames: [] })

// console.log('res:', res);


// const words = ['Hello', ' ', 'world', '!'];

// const res = words.reduce((acc, el) => {
// 	return acc += el
// }, '');

// console.log(res);


const people = [
	{ name: 'Alice', age: 25 },
	{ name: 'Bob', age: 30 },
	{ name: 'Charlie', age: 22 },
];// []

const res = people.reduce((acc, el) => {
	acc.totalAges += el.age;
	acc.totalNames.push(el.name)
	return acc
}, { totalNames: [], totalAges: 0 })

console.log('res: ', res);