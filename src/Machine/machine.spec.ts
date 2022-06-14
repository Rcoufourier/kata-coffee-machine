import { BaseOrder } from "../order/OrderType";
import { Curency } from "../index";
import { machine } from "./machine";
import { machineProtocolInteface } from "./type";

it("should return a not enougth money message code", function () {
  const givenCommand: BaseOrder = {
    drink: 'Chocolate',
    sugar: 2,
  }

  const givenCurency: Curency = {
    value: 50,
    unit: 'centimes'
  }

  const machineProtocoleMock: machineProtocolInteface = {
    makeDrink: jest.fn(),
    message: jest.fn()
  }

  const actual = machine(givenCommand, givenCurency, machineProtocoleMock)

  expect(machineProtocoleMock.makeDrink).toHaveBeenCalledWith("H:2:0")
});

it("should return a ok machine code", function () {
  const givenCommand: BaseOrder = {
    drink: 'Chocolate',
    sugar: 2,
  }

  const givenCurency: Curency = {
    value: 20,
    unit: 'centimes'
  }

  const machineProtocoleMock: machineProtocolInteface = {
    makeDrink: jest.fn(),
    message: jest.fn()
  }

  const actual = machine(givenCommand, givenCurency, machineProtocoleMock)

  expect(machineProtocoleMock.message).toHaveBeenCalledWith("please add 30 centimes")
});

it("should return a not enougth money message code", function () {
  const givenCommand: BaseOrder = {
    drink: 'Chocolate',
    sugar: 2,
  }

  const givenCurency: Curency = {
    value: 50,
    unit: 'centimes'
  }

  const machineProtocoleMock: machineProtocolInteface = {
    makeDrink: jest.fn(),
    message: jest.fn()
  }

  const actual = machine(givenCommand, givenCurency, machineProtocoleMock)

  expect(machineProtocoleMock.makeDrink).toHaveBeenCalledWith("H:2:0")
});
