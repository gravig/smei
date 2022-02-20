import Token from "./Token";

export default class Lexer {
  private source: string;
  private tokens: Token[] = [];
  private start: number = 0;
  private current: number = 0;
  private line: number = 1;

  constructor({ source }: LexerArguments) {
    this.source = source;
  }

  public tokenize = () => {
    while (!this.isEOF()) {
      this.start = this.current;
      this.scanToken();
    }

    this.tokens.push(new Token(TokenType.EOF, "", -1));
    return this.tokens;
  };

  private isEOF = () => {
    return this.current >= this.source.length;
  };

  private advance = () => {
    return this.source[this.current++];
  };

  private addToken = (tokenType: keyof typeof TokenType, literal?: object) => {
    const text = this.source.substring(this.start, this.current);

    this.tokens = [
      ...this.tokens,
      new Token(tokenType, text, this.line, literal),
    ];
  };

  private peekNext = () => {
    if (this.current + 1 >= this.source.length) return "\0";

    return this.source[this.current + 1];
  };

  private peek = () => {
    return this.source[this.current];
  };

  private number = () => {
    while (this.isDigit(this.peek())) {
      this.advance();
    }

    if (this.peek() === "." && this.isDigit(this.peekNext())) {
      this.advance();

      while (this.isDigit(this.peek())) {
        this.advance();
      }
    } else if (this.peek() === "." && !this.isDigit(this.peekNext())) {
      throw new Error(`Syntax error, unexpected '.'`);
    }

    this.addToken("NUMBER");
  };

  private string = () => {
    const keys = ["(", ")", ",", "-", "+", "*", "/", " ", "\r", "\t", "\n"];

    while (!this.isEOF() && !keys.includes(this.peek())) {
      this.advance();
    }

    this.addToken("STRING");
  };

  private isDigit = (char: string): boolean => {
    if (!Number.isNaN(Number(char))) {
      return true;
    }
    return false;
  };

  private scanToken = () => {
    const { LEFT_PAREN, RIGHT_PAREN, COMMA, MINUS, PLUS, STAR, DIVIDE } =
      TokenType;
    const { addToken } = this;
    const char = this.advance();

    switch (char) {
      case "(":
        addToken(LEFT_PAREN);
        break;
      case ")":
        addToken(RIGHT_PAREN);
        break;
      case ",":
        addToken(COMMA);
        break;
      case "-":
        addToken(MINUS);
        break;
      case "+":
        addToken(PLUS);
        break;
      case "*":
        addToken(STAR);
        break;
      case "/":
        addToken(DIVIDE);
        break;
      // Ignore whitespace.
      case " ":
      case "\r":
      case "\t":
        break;
      case "\n":
        this.line++;
        break;
      default:
        if (this.isDigit(char)) {
          this.number();
        } else {
          this.string();
        }
    }
  };
}

export const TokenType = {
  LEFT_PAREN: "LEFT_PAREN",
  RIGHT_PAREN: "RIGHT_PAREN",
  COMMA: "COMMA",
  DOT: "DOT",
  MINUS: "MINUS",
  PLUS: "PLUS",
  STAR: "STAR",
  DIVIDE: "DIVIDE",
  NUMBER: "NUMBER",
  EOF: "EOF",
  STRING: "STRING",
} as const;

type LexerArguments = {
  source: string;
};
