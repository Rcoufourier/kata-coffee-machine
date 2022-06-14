export type DrinkType = 'Coffee' | 'Tea' | 'Chocolate' | 'Orange';

export type OrderWithSugar = {
  drink: DrinkType,
  sugar: 1 | 2,
  stick: true,
}

export type OrderWithoutSugar = {
  drink: DrinkType,
  sugar: 0,
  stick: false,
}

export type TemperatureHot = {
  type: 'hot' | 'extraHot'
}

export type TemperatureCold = {
  type: 'cold'
}

export type orderSugarHot = OrderWithSugar & TemperatureHot
export type orderSugarNotHot = OrderWithSugar & TemperatureCold
export type orderNoSugarHot = OrderWithoutSugar & TemperatureHot
export type orderNoSugarNotHot = OrderWithoutSugar & TemperatureCold


export type Order = orderSugarHot |
                    orderSugarNotHot |
                    orderNoSugarHot |
                    orderNoSugarNotHot

export type BaseOrder = {
  drink: DrinkType,
  sugar: 0 | 1 | 2,
  type: 'cold' | 'hot' | 'extraHot'
}