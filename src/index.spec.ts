import { machineProtocolInteface } from "./Serving/Machine/type";
import { Report, report } from "./Analytics/type";
import { run } from "./index";

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

it("That's a test!", function () {
  expect(1 + 1).toEqual(2);
});
/*
it("run should serve drink and update statistics", function () {
  const machineProtocoleMock: machineProtocolInteface = {
    makeDrink: jest.fn(),
    message: jest.fn()
  }

  run(machineProtocoleMock)

  const expected: Report = {
    ...initialReport,
    Coffee: {
      ...initialReport.Coffee,
      sold: 2,
      earned: {
        value: 120,
        unit: 'centimes'
      }
    },
    Chocolate : {
      ...initialReport.Coffee,
      sold: 1,
      earned: {
        value: 50,
        unit: 'centimes'
      }
    }
  }

    expect(report).toEqual(expected);
});*/