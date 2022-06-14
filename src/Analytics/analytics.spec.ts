import { DrinkType, Order } from "../Serving/order/OrderType";
import { computeMachineCommand } from "../Serving/Command/command";
import { getStatistics, updateStatistics } from "./analytics";
import { DrinkStatistic, report, Report } from "./type";

const initialReport: Report = {
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

it("should return the corect updated report", function () {

  updateStatistics('Coffee')
  updateStatistics('Tea')
  updateStatistics('Coffee')


  const expected: Report = {
    ...initialReport,
    Coffee : {
      ...initialReport.Coffee,
      sold: 2,
      earned: {
        value: 120,
        unit: 'centimes'
      }
    },
    Tea : {
      ...initialReport.Coffee,
      sold: 1,
      earned: {
        value: 40,
        unit: 'centimes'
      }
    }
  }

  expect(getStatistics()).toEqual(expected);
});
