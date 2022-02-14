# SMEI (Simple Math Expression Interpreter)

Tree-walk interpreter used to evaluate basic math expressions

## Motivation

The main goal is to create simple and easy to use math expression interpreter that can be
used in any application that performs (for now) simple mathematical operations.

## Includes

Lexer - (or Scanner) converts raw string input into an array of tokens.

Parser - converts tokens into AST.

Interpreter - evaluates each tree node from bottom-up leading to result

## Todo

- Allow using standard functions (sin,cos,tan,ctan,etc.)
- Allow defining own functions such as avg(...)
- Allow working with scientific notation (eg. 1e+10 + 1e+6)
- Fix problems with inaccuracy
  - 0.1+0.2 = 0.30000000000000004 // should be 0.3
  - 0.0000007\*0.0000007 = 4.899999999999999e-13) // should be 4.9e-13

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
✔️ 2(3)(4)(5) = 120  
✔️ (3)2(4)(5) = 120  
✔️ 10000000\*1000000000000000000 = 1e+25  
❌ 0.1+0.2 = 0.3 // 0.30000000000000004

## Sources:

[Crafting interpreters](https://craftinginterpreters.com/)
