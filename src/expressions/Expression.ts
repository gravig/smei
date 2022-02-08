import Binary from "./Binary";
import Grouping from "./Grouping";
import Literal from "./Literal";
import Unary from "./Unary";

export interface Visitor<T> {
  visitBinary(expression: Binary): T;
  visitUnary(expression: Unary): T;
  visitLiteral(expression: Literal): T;
  visitGrouping(expression: Grouping): T;
}

export default abstract class Expression {
  abstract accept<T>(visitor: Visitor<T>): T;
}
