import { TokenType } from "./Lexer";

export default class Token {
  public readonly type: keyof typeof TokenType;
  /**
   *  What is Lexeme? ex.
   *  in expression `var a = 5;`
   *  Lexemes = [var, a, =, 5, ;]
   */
  public readonly lexeme: string;
  /**
   * What is considered a literal
   */
  public readonly literal?: object;
  public readonly line: number;

  constructor(
    type: keyof typeof TokenType,
    lexeme: string,
    line: number,
    literal?: object
  ) {
    this.type = type;
    this.lexeme = lexeme;
    this.literal = literal;
    this.line = line;
  }

  toString() {
    const { type, lexeme, literal } = this;

    return `${type} ${lexeme} ${literal}`;
  }
}
