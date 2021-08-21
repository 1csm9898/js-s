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
