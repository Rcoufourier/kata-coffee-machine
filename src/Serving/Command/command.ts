import { Order } from "../order/OrderType";
import { MachineInput } from "../Machine/type";
import { INSTRUCTION_LIST } from "./constant";

export const computeMachineCommand = (order: Order): MachineInput => {
  const drinkInstruction = INSTRUCTION_LIST[order.drink];
  const sugarInstruction = order.sugar > 0 ? order.sugar : ''
  const stickInstruction = order.stick ? '0' : ''
  const hotnessInstruction = order.type === 'extraHot' ? 'h' : ''
  return `${drinkInstruction}${hotnessInstruction}:${sugarInstruction}:${stickInstruction}`
}