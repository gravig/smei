import smei from "../src/smei";

describe("Interpreter", () => {
  const cases = [
    ["3*1/3", 1],
    ["1+2*3", 7],
    ["3+4", 7],
    ["3-4", -1],
    ["-10-20", -30],
    ["-20*3", -60],
    ["-(2+5)", -7],
    ["5*-3", -15],
    ["(3+4)*5", 35],
    ["3*4", 12],
    ["2(3+4)", 14],
    ["(3+4)2", 14],
    ["(2+3)(3+4)", 35],
    ["3/4", 0.75],
    ["(1+2)(2+3)(3+4)", 105],
    ["(1)(2)(3)(4)", 24],
    ["(3)(4)(5)", 60],
    ["(3)(4)(-5)", -60],
    ["-(3)(4)(5)", -60],
    ["3*(-1)/3", -1],
    ["(1)(2)(3)4", 24],
    ["2(3)(4)(5)", 120],
    ["(3)2(4)(5)", 120],
  ];

  test.each(cases)("%p = %p", (expression: string, result) => {
    expect(smei.eval(expression)).toEqual(result);
  });
});