import { machineProtocolInteface } from "./Serving/Machine/type";
import { machine } from "./Serving/Machine/machine";
import { BaseOrder } from "./Serving/order/OrderType";
import { Curency } from "./Serving/Payment/type";

export const run = (machineProtocole: machineProtocolInteface) => {
  const chocolateCommand: BaseOrder = {
    drink: 'Chocolate',
    sugar: 2,
    type: "hot"
  }

  const firstCurency: Curency = {
    value: 50,
    unit: 'centimes'
  }

  const coffeeCommand: BaseOrder = {
    drink: 'Coffee',
    sugar: 2,
    type: "hot"
  }

  const secondCurency: Curency = {
    value: 60,
    unit: 'centimes'
  }

  machine(coffeeCommand, secondCurency, machineProtocole)
  machine(chocolateCommand, firstCurency, machineProtocole)
  machine(coffeeCommand, secondCurency, machineProtocole)
}