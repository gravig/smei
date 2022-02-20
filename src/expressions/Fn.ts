import Expression, { Visitor } from "./Expression";

export default class Function extends Expression {
  public expr: Expression;
  public args: Expression[];

  constructor(expr: Expression, args: Expression[]) {
    super();
    this.expr = expr;
    this.args = args;
  }

  accept<T>(visitor: Visitor<T>): T {
    return visitor.visitFn(this);
  }
}
