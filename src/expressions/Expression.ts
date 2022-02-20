import Binary from "./Binary";
import Fn from "./Fn";
import Grouping from "./Grouping";
import Literal from "./Literal";
import Unary from "./Unary";

export interface Visitor<T> {
  visitBinary(expression: Binary): T;
  visitUnary(expression: Unary): T;
  visitLiteral(expression: Literal): T;
  visitGrouping(expression: Grouping): T;
  visitFn(expression: Fn): T;
}

export default abstract class Expression {
  abstract accept<T>(visitor: Visitor<T>): T;
}
