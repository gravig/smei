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

- Allow working with scientific notation (eg. 1e+10 + 1e+6)
- Allow working with big numbers
- Allow using strings as function arguments

## Sources:

[Crafting interpreters](https://craftinginterpreters.com/)
