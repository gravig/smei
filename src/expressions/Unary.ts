import Token from "../Token";
import Expression, { Visitor } from "./Expression";

export default class Unary extends Expression {
  public readonly right: Expression;
  public readonly operator: Token;

  constructor(operator: Token, right: Expression) {
    super();

    this.operator = operator;
    this.right = right;
  }

  accept<T>(visitor: Visitor<T>): T {
    return visitor.visitUnary(this);
  }
}
