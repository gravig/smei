# SMEI (Simple Math Expression Interpreter)

Tree-walk interpreter used to evaluate basic math expressions

## Motivation

The main goal is to create simple and easy to use math expression interpreter that can be
used in any application that performs (for now) simple mathematical operations.

## Includes

Lexer - (or Scanner) converts raw string input into an array of tokens.

Parser - converts tokens into AST.

Interpreter - evaluates each tree node from bottom-up leading to result

## Tests

✔️ 3\*1/3 = 1  
✔️ 1+2\*3 = 7  
✔️ 3+4 = 7  
✔️ 3-4 = -1  
✔️ -10-20 = -30  
✔️ -20\*3 = -60  
✔️ -(2+5) = -7  
✔️ 5\*-3 = -15  
✔️ (3+4)\*5 = 35  
✔️ 3\*4 = 12  
✔️ 2(3+4) = 14  
✔️ (3+4)2 = 14  
✔️ (2+3)(3+4) = 35  
✔️ 3/4 = 0.75  
✔️ (1+2)(2+3)(3+4) = 105  
✔️ (1)(2)(3)(4) = 24  
✔️ (3)(4)(5) = 60  
✔️ (3)(4)(-5) = -60  
✔️ -(3)(4)(5) = -60  
✔️ 3\*(-1)/3 = -1  
✔️ (1)(2)(3)4 = 24  
✔️ "2(3)(4)(5)" = 120  
✔️ "(3)2(4)(5)" = 120

## Sources:

[Crafting interpreters](https://craftinginterpreters.com/)
