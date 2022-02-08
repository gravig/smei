import Binary from "./expressions/Binary";
import Expression, { Visitor } from "./expressions/Expression";
import Grouping from "./expressions/Grouping";
import Literal from "./expressions/Literal";
import Unary from "./expressions/Unary";

export default class Printer implements Visitor<string> {
  print(expression: Expression): string {
    return expression.accept(this);
  }
  visitUnary(unary: Unary): string {
    return `U(${unary.operator.lexeme} ${unary.right.accept(this)})`;
  }
  visitBinary(binary: Binary): string {
    return `B(${binary.left.accept(this)} ${
      binary.operator.lexeme
    } ${binary.right.accept(this)})`;
  }
  visitLiteral(literal: Literal): string {
    return `${literal.value}`;
  }
  visitGrouping(grouping: Grouping): string {
    return `GROUP(${grouping.group.accept(this)})`;
  }
}
