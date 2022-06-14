import {
  BaseOrder,
  Order, orderNoSugarHot, orderNoSugarNotHot,
  orderSugarHot, orderSugarNotHot,
} from "./OrderType";

export const createOrder = (inputOrder: BaseOrder): Order => {
  if (inputOrder.sugar > 0) {
    return <orderSugarHot | orderNoSugarHot>{
      drink: inputOrder.drink,
      sugar: inputOrder.sugar,
      stick: true,
      type: inputOrder.type
    }
  }
  return <orderSugarNotHot| orderNoSugarNotHot>{
    drink: inputOrder.drink,
    sugar: inputOrder.sugar,
    stick: false,
    type: inputOrder.type
  }
}