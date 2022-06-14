import { DrinkType } from "../Serving/order/OrderType";
import { DrinkStatistic, Report, report } from "./type";
import { PRICE_LIST } from "../Serving/Payment/constant";

export const updateStatistics = (drink: DrinkType): Report => {

  const drinkPrice = PRICE_LIST[drink]

  report[drink] = {
    sold: report[drink].sold + 1,
    earned: {
      value: report[drink].earned.value + drinkPrice.value,
      unit: 'centimes'
    }
  }

  return report
}

export const getStatistics = (): Report => {
  return report
}