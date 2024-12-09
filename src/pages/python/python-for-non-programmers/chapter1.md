---
layout: '../../../layouts/MarkdownPostLayout.astro'
title: 'Python for Non-Programmers'
pubDate: 2024-12-09
description: 'Learn the fundamentals of Python'
author: 'IronWill79'
tags: ["programming", "python"]
---
# Python for Non-Programmers

Published on: 2024-12-09

## Python Basics

- the `print` command prints the string to stdout

```python
print("Hello World")
```

### Variables

- Variables hold information that can change over time

```python
wallet = 41

print(wallet)
```

### Numbers: Ints and floats

- An integer is a whole number without any decimal places
- A float is any number with decimal places
- Integers and floats can use the `+`, `-`, `*`, and `/` operators

### Strings

- Strings are a way to represent text
- Strings require quote delimiting, using single or double quotes
- To use the delimiting quote inside the string, escape the internal quote using a `\`

### Using variables in strings

- Add an `f` before a string to include variables using braces

```python
day = 9
month = 'December'

print(f"Today is {month} {day}")
```

#### Sidenote - in Python, variables are generally all lowercase using underscores in place of spaces

### Booleans and if statements

- A boolean stores yes or no, true or false, basically a binary choice
- `True` and `False` are the possibilities of a boolean
- `if` statements are the primary place where booleans are used

```python
light_is_on = True

if light_is_on:
  print("The light is on!")
```

### Comparison and else

- `else` can be used to do something when the `if` statement is not `True`
- `elif` can be used to do another comparison when the `if` statement is not `True`
- Comparisons include `<` (less than), `<=` (less than or equal), `>` (greater than), `>=` (greater than or equal), `==` (equal), and `!=` (not equal)

```python
light_is_on = True

if light_is_on:
  print("The light is on!")
elif light_is_on == False:
  print("We're in the dark")

weight = 190.4

if weight < 195:
  print("You're underweight :)")
```
