import { BaseOrder, Order } from "./OrderType";
import { createOrder } from "./order";

it("should return the command for a coffee", function () {
  const orderInput: BaseOrder = {
    drink: 'Coffee',
    sugar: 0,
    type: 'hot'
  }

  const expected: Order = {
    drink: 'Coffee',
    sugar: 0,
    stick: false,
    type: 'hot'
  }

  const actual = createOrder(orderInput)

  expect(actual).toEqual(expected);
});

it("should return the command for a coffee with sugar", function () {
  const orderInput: BaseOrder = {
    drink: 'Tea',
    sugar: 2,
    type: 'hot'
  }

  const expected: Order = {
    drink: 'Tea',
    sugar: 2,
    stick: true,
    type: 'hot'
  }

  const actual = createOrder(orderInput)

  expect(actual).toEqual(expected);
});

it("should return the command for an extra hot coffee ", function () {
  const orderInput: BaseOrder = {
    drink: 'Coffee',
    sugar: 0,
    type: 'extraHot'
  }

  const expected: Order = {
    drink: 'Coffee',
    sugar: 0,
    stick: false,
    type: 'extraHot'
  }

  const actual = createOrder(orderInput)

  expect(actual).toEqual(expected);
});