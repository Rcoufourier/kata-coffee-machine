import { Order } from "../order/OrderType";
import { computeMachineCommand } from "./command";

it("should return the command for a coffee", function () {
  const givenCommand: Order = {
    drink: 'Coffee',
    sugar: 0,
    stick: false,
    type: 'hot'
  }

  const actual = computeMachineCommand(givenCommand)

  expect(actual).toEqual('C::');
});

it("should return the command for a Tea", function () {
  const givenCommand: Order = {
    drink: 'Tea',
    sugar: 0,
    stick: false,
    type: 'hot'
  }

  const actual = computeMachineCommand(givenCommand)

  expect(actual).toEqual('T::');
});

it("should return the command for a Chocolate", function () {
  const givenCommand: Order = {
    drink: 'Chocolate',
    sugar: 0,
    stick: false,
    type: 'hot'
  }

  const actual = computeMachineCommand(givenCommand)

  expect(actual).toEqual('H::');
});

it("should return the command for a Chocolate with sugar", function () {
  const givenCommand: Order = {
    drink: 'Chocolate',
    sugar: 2,
    stick: true,
    type: 'hot'
  }

  const actual = computeMachineCommand(givenCommand)

  expect(actual).toEqual('H:2:0');
});

it("should Drink maker will make one orange juice", function () {
  const givenCommand: Order = {
    drink: 'Orange',
    sugar: 0,
    stick: false,
    type: 'cold'
  }

  const actual = computeMachineCommand(givenCommand)

  expect(actual).toEqual('O::');
});

it("should return the command for a extraHot coffee", function () {
  const givenCommand: Order = {
    drink: 'Coffee',
    sugar: 0,
    stick: false,
    type: 'extraHot'
  }

  const actual = computeMachineCommand(givenCommand)

  expect(actual).toEqual('Ch::');
});

it("should return the command for a extraHot chocolate with sugar", function () {
  const givenCommand: Order = {
    drink: 'Chocolate',
    sugar: 1,
    stick: true,
    type: 'extraHot'
  }

  const actual = computeMachineCommand(givenCommand)

  expect(actual).toEqual("Hh:1:0");
});

it("should return the command for a extraHot tea with sugar", function () {
  const givenCommand: Order = {
    drink: 'Tea',
    sugar: 1,
    stick: true,
    type: 'extraHot'
  }

  const actual = computeMachineCommand(givenCommand)

  expect(actual).toEqual("Th:1:0");
});
