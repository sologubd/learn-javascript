'use strict';

/*
 * Constants
  */
const PROGRAMMING_LANGUAGE = 'javascript';
console.info({ PROGRAMMING_LANGUAGE });
console.assert(PROGRAMMING_LANGUAGE === 'javascript');

/*
 * Variables
  */

// String
const firstName = 'John';
console.info({ firstName });
console.assert(firstName === 'John');

const lastName = 'Doe';
console.info({ lastName });
console.assert(lastName === 'Doe');

// Number
const age = 40;
console.info({ age });
console.assert(age === 40);

// Boolean
const isAnimal = false;
console.info({ isAnimal });
console.assert(!isAnimal);

const isHuman = true;
console.info({ isHuman });
console.assert(isHuman);

// Undefined
let address;
console.info({ address });
console.info('Type of `address`: ', typeof address);
console.assert(address === undefined);

// Null
const salary = null;
console.info({ salary });
console.info('Type of `salary`: ', typeof salary);
console.assert(salary === null);

// NaN, Infinity
const nanExample = salary / lastName;
console.info({ nanExample });
console.assert(isNaN(nanExample));

const infinityExample = age / 0;
console.info({ infinityExample });
console.assert(!isFinite(infinityExample));

// Object
const person = {
  name: firstName + ' ' + lastName,
  age,
  address,
};
console.info({ person });
console.assert(person.name === `${firstName} ${lastName}`);
console.assert(person.age === 40);
console.assert(person.address === undefined);

// Set (contains unique values only)
const pets = new Set();
pets.add('dog');
pets.add('dog');
pets.add('cat');
console.info({ pets });
console.info(`Type of 'pets': ${typeof pets}`);
console.assert(pets.size === 2);

person.pets = pets;
console.info({ person });

// Map
const anthropometry = new Map();
anthropometry.set('height', '180cm');
console.info({ anthropometry });
console.assert(anthropometry.get('height') === '180cm');
console.assert(isNaN(anthropometry.get('weigh')));

