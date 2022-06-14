import { DrinkType } from "../Serving/order/OrderType";
import { Curency } from "../Serving/Payment/type";

export type DrinkStatistic = {
  sold: number,
  earned: Curency,
}

export type Report = Record<DrinkType, DrinkStatistic>;

export var report: Report = {
    Chocolate: {
      sold: 0,
      earned: {
        value: 0,
        unit: 'centimes'
      }
    },
    Coffee: {
      sold: 0,
      earned: {
        value: 0,
        unit: 'centimes'
      }
    },
    Tea: {
      sold: 0,
      earned: {
        value: 0,
        unit: 'centimes'
      }
    },
    Orange: {
      sold: 0,
      earned: {
        value: 0,
        unit: 'centimes'
      }
    }
};