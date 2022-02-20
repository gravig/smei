import Expression, { Visitor } from "./Expression";

export default class Literal extends Expression {
  public readonly type: "string" | "number";
  public readonly value: string | number;

  constructor(value: string | number) {
    super();
    this.value = value;
    this.type = this.isNumber(value) ? "number" : "string";
  }

  private isNumber(value: any): boolean {
    return !Number.isNaN(Number(value));
  }

  accept<T>(visitor: Visitor<T>): T {
    return visitor.visitLiteral(this);
  }
}
