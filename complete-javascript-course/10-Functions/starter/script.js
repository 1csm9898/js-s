'use strict';
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //   es5;
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2);
createBooking('LH123', undefined, 800);

const flight = 'LH234';
const Jonas = {
  name: 'Jonas Sche',
  passport: 234566,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 234566) {
    alert('Check in');
  } else {
    alert('wrong passport');
  }
};
checkIn(flight, Jonas);
console.log(flight);
console.log(Jonas);

//클로저
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('hey');
greeterHey('Jonas');
greet('hello')('sunmin');

const greet1 = greeting => name => {
  console.log(`${greeting} ${name}`);
  console.log(4);
};

//arrow fun에서 몸체가 한줄이면 안쓴다
const greet2 = greeting => name => console.log(`${greeting} ${name}`);
greet2('hello')('sun');

const luft = {
  airline: 'luft',
  iata: 'LH',
  booking: [],
  //es6이전
  //book:function() {}
  book(flightNum, name) {
    console.log(`${name} booked a seat on ${this.airline} ${flightNum}`);
  },
};
