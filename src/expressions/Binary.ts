import Token from "../Token";
import Expression, { Visitor } from "./Expression";

export default class Binary extends Expression {
  public readonly left: Expression;
  public readonly right: Expression;
  public readonly operator: Token;

  constructor({ left, operator, right }: Arguments) {
    super();

    this.left = left;
    this.operator = operator;
    this.right = right;
  }

  accept<T>(visitor: Visitor<T>): T {
    return visitor.visitBinary(this);
  }
}

type Arguments = {
  left: Expression;
  operator: Token;
  right: Expression;
};
