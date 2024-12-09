---
layout: '../../layouts/MarkdownPostLayout.astro'
title: 'Python for Non-Programmers'
pubDate: 2024-12-09
description: 'Learn the fundamentals of Python'
author: 'IronWill79'
tags: ["programming", "python"]
---
# Python for Non-Programmers

Published on: 2024-12-09

## Functions and more

### Functions

- Functions are a way to give a name to a collection of instructions
- Functions need to be called to execute

```python
def bark():                  # define the `bark` function
  print("Woof Woof!")
  print("I'm a dog!")

for x in range(100):
  bark()
```

### Parameters

- Parameters are a way for us to pass data into a function
- Parameters are included within the parentheses after the function name when defined and when called

```python
def hello(name):              # define the `hello` function with a `name` parameter
  print(f"Hello {name}")

hello("Will")

def add_numbers(num1, num2):  # define the `add_numbers` function with `num1` and `num2` parameters
  print(num1 + num2)

add_numbers(4, 8)
```

### Return

- Functions can return values

```python
def double(number):
  return number * 2

double_five = double(5)
```

### Comments

- Comments are ignored by the interpreter
- Everything on a line after a `#` is treated as a comment
- Comments can also be used to add TODOs, or `shelve` code until you've figured it out

### Input

- To prompt the user at the command line, use `user_text = input(prompt)`
  - `user_text` will contain what the user entered at the prompt
- Input always comes into the variable from the `input` function as a string
- To change a string into an integer, use the `int(string)` function
