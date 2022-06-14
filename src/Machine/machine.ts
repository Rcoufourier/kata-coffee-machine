import { BaseOrder, Order } from "../order/OrderType";
import { MachineInput, machineProtocolInteface } from "./type";
import { createOrder } from "../order/order";
import { computeMachineCommand } from "../Command/command";
import { Curency } from "../Payment/type";
import { payment } from "../Payment/payment";

export const machine = (order: BaseOrder, amount: Curency, machineProtocole: machineProtocolInteface ): MachineInput =>{
  const balance = payment(order, amount)
  if (balance.value > 0){
    return machineProtocole.message(`please add ${balance.value} ${balance.unit}`)
  }

  const completeOrder: Order = createOrder(order) ;

  return machineProtocole.makeDrink(computeMachineCommand(completeOrder));
}