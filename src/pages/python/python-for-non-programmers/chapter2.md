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

## Project 1: Fortune Cookie

```python
import random

lucky_number = random.randint(1, 100)

fortune_number = random.randint(1, 3)

fortune_text = ''

if fortune_number == 1:
  fortune_text = 'You will have a great day!'
elif fortune_number == 2:
  fortune_text = 'Today will be tough... but worth it.'
else:
  fortune_text = 'You will get married this year!'

print(f'{fortune_text} Your Lucky Number is: {lucky_number}')
```
