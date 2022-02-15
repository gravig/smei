import Binary from "./expressions/Binary";
import Expression, { Visitor } from "./expressions/Expression";
import Grouping from "./expressions/Grouping";
import Literal from "./expressions/Literal";
import Unary from "./expressions/Unary";

export default class Interpreter implements Visitor<number> {
  evaluate(expression: Expression): number {
    const result = expression.accept(this);
    const precision = result < 1 ? 15 : 11;

    return parseFloat(result.toFixed(precision));
  }

  visitGrouping(expression: Grouping): number {
    return expression.group.accept(this);
  }
  visitBinary(expression: Binary): number {
    const { type } = expression.operator;

    switch (type) {
      case "MINUS":
        return expression.left.accept(this) - expression.right.accept(this);
      case "PLUS":
        return expression.left.accept(this) + expression.right.accept(this);
      case "DIVIDE":
        return expression.left.accept(this) / expression.right.accept(this);
      case "STAR":
        return expression.left.accept(this) * expression.right.accept(this);
      default:
        throw new Error(`Unknown operation`);
    }
  }
  visitUnary(unary: Unary): number {
    if (unary.operator.type === "MINUS") {
      return -1 * Number(unary.right.accept(this));
    }

    return unary.right.accept(this);
  }
  visitLiteral(literal: Literal): number {
    return Number(literal.value);
  }
}
