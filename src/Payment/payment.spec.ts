import { Order } from "../order/OrderType";
import { payment } from "./payment";
import { Curency } from "./type";


it("should return a negative number", function () {
  const givenCommand: Order = {
    drink: 'Chocolate',
    sugar: 2,
    stick: true
  }

  const givenCurency: Curency = {
    value: 100,
    unit: 'centimes'
  }

  const actual = payment(givenCommand, givenCurency)

  const expected: Curency = {
    value: -50,
    unit: 'centimes'
  }

  expect(actual).toEqual(expected);
});

it("should return a positive number with null amount", function () {
  const givenCommand: Order = {
    drink: 'Chocolate',
    sugar: 2,
    stick: true
  }

  const givenCurency: Curency = {
    value: 0,
    unit: 'centimes'
  }

  const actual = payment(givenCommand, givenCurency)

  const expected: Curency = {
    value: 50,
    unit: 'centimes'
  }

  expect(actual).toEqual(expected);
});

it("should return a positive number with not null amount", function () {
  const givenCommand: Order = {
    drink: 'Chocolate',
    sugar: 2,
    stick: true
  }

  const givenCurency: Curency = {
    value: 30,
    unit: 'centimes'
  }

  const actual = payment(givenCommand, givenCurency)

  const expected: Curency = {
    value: 20,
    unit: 'centimes'
  }

  expect(actual).toEqual(expected);
});
