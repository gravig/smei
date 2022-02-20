import Lexer from "./Lexer";
import Interpreter, { FunctionStore, VariableStore } from "./Interpreter";
import Parser from "./Parser";

export default class Smei {
  static eval = (
    source: string,
    variables: VariableStore = {},
    functions: FunctionStore = {}
  ): number => {
    const lexer = new Lexer({ source });
    const parser = new Parser(lexer.tokenize());
    const interpreter = new Interpreter(variables, functions);

    return interpreter.evaluate(parser.parse());
  };
}
