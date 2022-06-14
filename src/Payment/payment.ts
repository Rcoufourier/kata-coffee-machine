import { BaseOrder } from "../order/OrderType";
import { Curency } from "./type";
import { PRICE_LIST } from "./constant";


export const payment = (order: BaseOrder, amount: Curency): Curency => {
  const price = PRICE_LIST[order.drink]

  return {
    value: price.value - amount.value,
    unit: "centimes"
  }
}