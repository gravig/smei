import Token from "./Token";
import { TokenType } from "./Lexer";
import Literal from "./expressions/Literal";
import Expression from "./expressions/Expression";
import Unary from "./expressions/Unary";
import Binary from "./expressions/Binary";
import Grouping from "./expressions/Grouping";
import Fn from "./expressions/Fn";

export default class Parser {
  private tokens: Token[] = [];
  private cursor: number = 0;

  constructor(tokens: Token[]) {
    this.tokens = tokens;
  }

  parse(): Expression {
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

  next(): Token {
    return this.tokens[this.cursor + 1];
  }

  previous(): Token {
    return this.tokens[this.cursor - 1];
  }

  check(type: keyof typeof TokenType): boolean {
    if (this.isAtEnd()) return false;
    return this.peek().type === type;
  }

  match(...types: (keyof typeof TokenType)[]): boolean {
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

    return this.call();
  }

  call(): Expression {
    const left = this.primary();

    while (this.match("LEFT_PAREN")) {
      const args = [];

      if (!this.check("RIGHT_PAREN")) {
        do {
          args.push(this.expression());
        } while (this.match("COMMA"));
      }

      return new Fn(left, args);
    }

    return left;
  }

  primary(): Expression {
    if (this.match("NUMBER", "STRING")) {
      const previous = this.previous().lexeme;

      return new Literal(previous);
    }

    if (this.match("LEFT_PAREN")) {
      const expr = this.expression();
      this.consume("RIGHT_PAREN", "Expect ')' after expression.");
      return new Grouping(expr);
    }

    throw new Error(
      `Could not parse expression. ${this.peek().lexeme} ${this.peek().type}`
    );
  }
}
