import Lexer from "../Lexer";

const cases = [
  [
    "1+2+AVG()",
    [
      "NUMBER",
      "PLUS",
      "NUMBER",
      "PLUS",
      "STRING",
      "LEFT_PAREN",
      "RIGHT_PAREN",
      "EOF",
    ],
  ],
];

describe("Lexer", () => {
  test.each(cases)("%p = %p", (source: string, result: string[]) => {
    const lexer = new Lexer({ source });
    const tokens = lexer.tokenize().map((token) => token.type);

    expect(tokens).toEqual(result);
  });
});
