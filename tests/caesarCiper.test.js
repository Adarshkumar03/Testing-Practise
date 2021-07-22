import caesar from "../code/caesarCipher";

test('works', () => {
    expect(caesar("ab", 1)).toBe("bc");
})
test("works with negative number", () => {
    expect(caesar("a", -1)).toBe("z");
})
test('works with spaces', () => {
    expect(caesar("ab cd", 1)).toBe("bc de");
})
test('works with hug key value', () => {
    expect(caesar("abcde", 1171)).toBe("bcdef");
})
test('works with uppercase letters', () => {
    expect(caesar("ABcde", 1)).toBe("BCdef");
})



