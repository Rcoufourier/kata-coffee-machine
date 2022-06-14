import { DrinkType } from "../order/OrderType";

export type Curency = {
  value: number,
  unit: 'centimes'
}

export type PriceRecort = Record<DrinkType, Curency>
