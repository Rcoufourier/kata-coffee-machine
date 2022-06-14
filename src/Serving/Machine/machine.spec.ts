import { BaseOrder, DrinkType } from "../order/OrderType";
import { machine } from "./machine";
import { machineProtocolInteface } from "./type";
import { Curency } from "../Payment/type";

it("should makeDrink be called with \"H:2:0\"", async function () {
  const givenCommand: BaseOrder = {
    drink: 'Chocolate',
    sugar: 2,
    type: "hot"
  }

  const givenCurency: Curency = {
    value: 50,
    unit: 'centimes'
  }

  const machineProtocoleMock: machineProtocolInteface = {
    makeDrink: jest.fn(),
    message: jest.fn(),
    beverageQuantityChecker:jest.fn().mockResolvedValue(true),
    notifyMissingDrink:  jest.fn(),
  }

  await machine(givenCommand, givenCurency, machineProtocoleMock)

  expect(machineProtocoleMock.makeDrink).toHaveBeenCalledWith("H:2:0")
});

it("should return a ok machine code", async function () {
  const givenCommand: BaseOrder = {
    drink: 'Chocolate',
    sugar: 2,
    type: "hot"
  }

  const givenCurency: Curency = {
    value: 20,
    unit: 'centimes'
  }

  const machineProtocoleMock: machineProtocolInteface = {
    makeDrink: jest.fn(),
    message: jest.fn(),
    beverageQuantityChecker: jest.fn().mockResolvedValueOnce(true),
    notifyMissingDrink: jest.fn()
  }

  await machine(givenCommand, givenCurency, machineProtocoleMock)

  expect(machineProtocoleMock.message).toHaveBeenCalledWith("please add 30 centimes")
});

it("should call notifyMissingDrink with chocolate", async function () {
  const givenCommand: BaseOrder = {
    drink: 'Chocolate',
    sugar: 2,
    type: "hot"
  }

  const givenCurency: Curency = {
    value: 100,
    unit: 'centimes'
  }

  const machineProtocoleMock: machineProtocolInteface = {
    makeDrink: jest.fn(),
    message: jest.fn(),
    beverageQuantityChecker:jest.fn().mockResolvedValueOnce(false),
    notifyMissingDrink: jest.fn()
  }

  await machine(givenCommand, givenCurency, machineProtocoleMock)

  expect(machineProtocoleMock.notifyMissingDrink).toHaveBeenCalledWith('Chocolate')
});
