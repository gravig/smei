import Expression, { Visitor } from "./Expression";

export default class Literal extends Expression {
  public readonly value: number;
  constructor(value: number) {
    super();
    this.value = value;
  }

  accept<T>(visitor: Visitor<T>): T {
    return visitor.visitLiteral(this);
  }
}
