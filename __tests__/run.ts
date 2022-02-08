import Interpreter from "../src/Interpreter";
import Lexer from "../src/Lexer";
import Parser from "../src/Parser";
import Printer from "../src/Printer";

const source = `(2+5)*4`;

const lexer = new Lexer({ source });

const tokens = lexer.tokenize();

console.log(`=== TOKENS ===`);
console.log({ tokens });

const parser = new Parser(tokens);

const ast = parser.parse();
console.log(`\n\n=== ABSTRACT SYNTAX TREE ===`);
console.log(ast);

const printer = new Printer();

console.log(`\n\n=== PRETTY PRINT ===`);
console.log(printer.print(ast));

const interpreter = new Interpreter();

console.log(`\n\n=== RESULT ===`);
console.log(`${source}`, { result: interpreter.evaluate(ast) });
