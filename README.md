# SMEI (Simple Math Expression Interpreter)

Tree-walk interpreter used to evaluate basic math expressions

## Motivation

The main goal is to create simple and easy to use math expression interpreter that can be
used in any application that performs (for now) simple mathematical operations.

## Includes

Lexer - (or Scanner) converts raw string input into an array of tokens.

Parser - converts tokens into AST.

Interpreter - evaluates each tree node from bottom-up leading to result

Sources:  
[Crafting interpreters](https://craftinginterpreters.com/)
