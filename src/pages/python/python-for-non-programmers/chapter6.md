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

## Project 3: Number Guesser

```python
import random
import time

number = random.randint(1, 100)
print("Hi and welcome to the Guessing game. I am going to pick a number between 1 and 100.")
time.sleep(3)
print("Picking a number...")
time.sleep(2)

choice = int(input("What is your guess? "))
num_attempts = 0

while choice != number:
  num_attempts += 1
  if choice < number:
    choice = int(input(f"You are too low! What is your next guess?"))
  else:
    choice = int(input(f"You are too high! What is your next guess?"))

print("You got the right answer!")
```
