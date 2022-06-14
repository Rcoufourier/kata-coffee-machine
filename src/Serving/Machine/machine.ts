import { BaseOrder, Order } from "../order/OrderType";
import { MachineInput, machineProtocolInteface } from "./type";
import { createOrder } from "../order/order";
import { computeMachineCommand } from "../Command/command";
import { Curency } from "../Payment/type";
import { payment } from "../Payment/payment";
import { updateStatistics } from "../../Analytics/analytics";

export const machine = async (order: BaseOrder, amount: Curency, machineProtocole: machineProtocolInteface ): Promise<MachineInput> =>{
  const balance = payment(order, amount)
  if (balance.value > 0){
    return machineProtocole.message(`please add ${balance.value} ${balance.unit}`)
  }

  if (!(await machineProtocole.beverageQuantityChecker(order.drink))){
     await machineProtocole.notifyMissingDrink(order.drink)
    return
  }

  const completeOrder: Order = createOrder(order) ;

  const playedInstruction =  machineProtocole.makeDrink(computeMachineCommand(completeOrder));
  updateStatistics(order.drink);
  return playedInstruction;
}