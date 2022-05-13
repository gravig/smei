# SMEI (Simple Math Expression Interpreter)

Tree-walk interpreter used to evaluate basic math expressions

## Motivation

The main goal is to create simple and easy to use math expression interpreter that can be
used in any application that performs (for now) simple mathematical operations.

## Includes

Lexer - (or Scanner) converts raw string input into an array of tokens.

Parser - converts tokens into AST.

Interpreter - evaluates each tree node from bottom-up leading to result

## Install

You can install get-good-readme by entering this command  
```npm install --save smei```

## Usage 

```typescript
import smei from 'smei';

const result = smei.eval('2+3*4'); // 14
```

If you want you can access token array or ast using core classes.

```typescript
import { Lexer, Parser, Interpreter } from 'smei';

const source = '2+3*4';

const lexer = new Lexer({ source });
/**
 * Tokens:
 * Token { type: "NUMBER", lexeme: "2", line: 1 }
 * Token { type: "PLUS", lexeme: "+", line: 1 }
 * Token { type: "NUMBER", lexeme: "3", line: 1 }
 * Token { type: "STAR", lexeme: "*", line: 1 }
 * Token { type: "NUMBER", lexeme: "4", line: 1 }
 * Token { type: "EOF", lexeme: "", line: 1 }
 */
const tokens = lexer.tokenize();

const parser = new Parser(tokens);
// Abstract syntax tree
const ast = parser.parse();

const interpreter = new Interpreter();

const result = interpreter.evaluate(ast); // 14
```


## Todo

- Working with scientific notation (eg. 1e+10 + 1e+6)
- Working with big numbers
- Using strings as function arguments

## Sources:

[Crafting interpreters](https://craftinginterpreters.com/)
