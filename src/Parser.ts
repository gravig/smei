import Token from "./Token";
import { TokenType } from "./Lexer";
import Literal from "./expressions/Literal";
import Expression from "./expressions/Expression";
import Unary from "./expressions/Unary";
import Binary from "./expressions/Binary";
import Grouping from "./expressions/Grouping";

export default class Parser {
  private tokens: Token[] = [];
  private cursor: number = 0;

  constructor(tokens: Token[]) {
    this.tokens = tokens;
  }

  parse() {
    return this.expression();
  }

  isAtEnd(): boolean {
    return this.cursor >= this.tokens.length;
  }

  advance(): Token {
    return this.tokens[this.cursor++];
  }

  peek(): Token {
    return this.tokens[this.cursor];
  }

  next() {
    return this.tokens[this.cursor + 1];
  }

  previous() {
    return this.tokens[this.cursor - 1];
  }

  check(type: keyof typeof TokenType): boolean {
    if (this.isAtEnd()) return false;
    return this.peek().type === type;
  }

  match(...types: (keyof typeof TokenType)[]) {
    for (let type of types) {
      if (this.check(type)) {
        this.advance();
        return true;
      }
    }
    return false;
  }

  consume(type: keyof typeof TokenType, message: string): Token {
    if (this.peek().type === type) return this.advance();

    throw new Error(message);
  }

  expression(): Expression {
    return this.term();
  }

  term(): Expression {
    let left = this.factor();

    while (this.match("MINUS", "PLUS")) {
      const operator: Token = this.previous();
      const right: Expression = this.factor();
      left = new Binary({ left, operator, right });
    }

    return left;
  }

  factor(): Expression {
    let left = this.unary();

    while (this.match("STAR", "DIVIDE")) {
      const operator: Token = this.previous();
      const right: Expression = this.unary();
      left = new Binary({ left, operator, right });
    }

    return left;
  }

  unary(): Expression {
    if (this.match("MINUS")) {
      const operator = this.previous();
      const right = this.unary();
      return new Unary(operator, right);
    }
    return this.primary();
  }

  primary(): Expression {
    if (this.match("NUMBER")) {
      return new Literal(Number(this.previous().lexeme));
    }

    if (this.match("LEFT_PAREN")) {
      const expression = this.expression();
      this.consume("RIGHT_PAREN", `Closing paren missing.`);
      return new Grouping(expression);
    }

    throw new Error(`Could not parse expression.`);
  }
}
