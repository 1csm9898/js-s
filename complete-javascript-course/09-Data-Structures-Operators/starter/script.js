'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHour = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //객체안에 함수가 정의된 경우 다음과 같이 바꿀수도
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function (obj) {
    console.log(obj);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is your delicious pasta with ${ing1},${ing2},${ing3}.`);
  },

  //es6 enhenced object literals
  //값이 객체이고, 키의 이름과 값의 이름이 같을때
  openingHour,
};
console.log(restaurant);
restaurant.orderDelivery({
  time: '22:30',
  address: '2-1번지',
  Index: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//startMenu가 객체에 없을땐, 빈 배열을 할당해라
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
// const arr = [2, 3, 4];
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);
// const [first, , second] = restaurant.categories;
// console.log(first, second);
// console.log(restaurant.order(2, 0));

//destructuring assignment
let a = 111;
let u = 999;
const obj = { a: 23, b: 7, u: 14 };
({ a, u } = obj);
console.log(a, u);

const {
  fri: { open: o, close: c, time: t = [] },
} = openingHour;
console.log(o, c, t);
//...스프레드 연산자는 얕은 복사이다=>배열만들때, 함수에 값을 전달할때
//스프레드 연산자는 iterable에서 동작한다. iterable=>기본 내장 데이터구조인 배열, 문자열, 맵, 집합을 포함하지만, 여기에 객체는 속하지않는다.
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr];
console.log(newArr);
console.log(...newArr);
//console.log(`${...str}`);  이건 작동하지않는다.
const mainMenuCopy = [...restaurant.mainMenu];

//작은 따옴표 사이 let's들어가면 백슬래시==>prettier 가 큰따옴표로 변환
// const ing = [
//   prompt("let's make pasta ingredient 1?"),
//   prompt("let's make pasta ingredient 2?"),
//   prompt("let's make pasta ingredient 3?"),
// ];

//...ing는 ing[0],ing[1],ing[2]를 대체
//restaurant.orderPasta(...ing);

const a1 = [1, 2, 3];
const a2 = [4, a1[0], a1[1]];
a2[1] = 5;
console.log(a1); //a1바뀌지 않는다.

const newRestaurant = { ...restaurant, founder: 'abcde' };
newRestaurant.name = 'dd';
console.log(restaurant);
console.log(newRestaurant);

// 배열참조
// var ar1 = ['철수', '영희'];
// var ar2 = ar1;
// ar2.push('바둑');
// console.log(ar1);

//배열복사 slice, map
// var ar1 = ['철수', '영희'];
// var ar2 = ar1.slice();
// var ar2 = ar1.map(item => item);
// ar2.push('바둑');
// console.log(ar2);
// console.log(ar1);

//배열안에 객체는 스프레드 연산자 쓰면 원본참조된다.
// var ar1 = [{ name: '철수', age: 10 }];
// var ar2 = [...ar1];
// ar2[0].name = '영희';
// console.log(ar1);

//rest
const [q, w, ...others] = [1, 2, 3, 4, 5];
console.log(q, w, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//const { sat, ...weekdays } = restaurant.openingHour;
console.log(weekdays);

//rest par=>함수의 파람으로 오는걸 배열로 전달받을수 있다.
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(5, 3, 2, 4);
