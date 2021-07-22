import calculator from "../code/calculator";

test('Addition', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });
  test("Subtraction", ()=>{
      expect(calculator.sub(3,1)).toBe(2)
  });
  test('Multiplication', () => {
      expect(calculator.mul(4,3)).toBe(12);
  });
  test("Division", () => {
      expect(calculator.div(6,2)).toBe(3);
  });
  

