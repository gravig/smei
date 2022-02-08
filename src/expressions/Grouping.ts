import Expression, { Visitor } from "./Expression";

export default class Grouping extends Expression {
  public readonly group: Expression;
  constructor(group: Expression) {
    super();
    this.group = group;
  }

  accept<T>(visitor: Visitor<T>): T {
    return visitor.visitGrouping(this);
  }
}
