import Lexer from "./Lexer";
import Interpreter from "./Interpreter";
import Parser from "./Parser";

export default class Smei {
  static eval = (source: string): number => {
    const lexer = new Lexer({ source });
    const parser = new Parser(lexer.tokenize());
    const interpreter = new Interpreter();

    return interpreter.evaluate(parser.parse());
  };
}
