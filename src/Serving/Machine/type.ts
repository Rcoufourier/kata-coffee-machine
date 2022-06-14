import { DrinkType } from "../order/OrderType";

export interface machineProtocolInteface {
  makeDrink: (command: MachineInput) => MachineInput,
  message: (message: string) => MachineInput
  beverageQuantityChecker:(drink: DrinkType) => Promise<boolean>;
  notifyMissingDrink: (drink: DrinkType) => Promise<void>;
}


export type MachineInput = MachineInputWithSugar |  MachineInputWithoutSugar | MachineInputMessage

export type MachineInputWithSugar = `${string}:${number}:${number}`
export type MachineInputWithoutSugar = `${string}:${''}:${''}`
export type MachineInputMessage = `${string}:${string}`