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

## Lists, Loops and Dictionaries

### Lists

- `List`s are created using open and close square brackets, with values separated by commas. All data types are valid values of a list, including other lists.
- Elements in a list can be indexed, again using square brackets, zero-indexed

```python
empty_list = []                                     # This is an empty list
fav_numbers = [1,5,7,3]                             # This is a list of integers
fav_movies = ["ET","Morbius","Blazing Saddles"]     # This is a list of strings

print(fav_movies[1])                                # This will print `Morbius`

print(fav_numbers[0])                               # This will print `1`
```

### Lists: Add, insert, delete

- To find the length of a list, use `len(list_name)`
- To add an element to the end of the list, use `list_name.append(value)`
- To add an element in a specific place, use `list_name.insert(index, value)`
- To delete a specifically indexed element, use `del(list_name[2])`

### For loops

- A `for` loop allows us to execute instructions a specific number of times
- `range(number)` is used to iterate through numbers from 0 to `number - 1`
- `for` loops can also be used to iterate through lists, using `for value in list:`

```python
for number in range(10):
  print(number)

fav_movies = ["ET", "Morbius", "Blazing Saddles"]

for movie in fav_movies:
  print(movie)
```

### Dictionaries

- In Python, `dictionaries` are similar to lists, but contain key value pairs.
- `Dictionaries` are created using braces and include comma separated, colon separated, key value pairs.
- Elements in a dictionary can be indexed using square brackets and the key
- To add elements to a dictionary, use `dictionary["newkey"] = value`
- To delete an element from a dictionary, use `del(dictionary["key"])`
- To find the length, or number of elements in a dictionary, use `len(dictionary)`

```python
cats = {"Jane": 6, "Tom": 14, "Sarah": 8}

cats["Wilson"] = 5
del(cats["Tom"])

print(cats["Tom"])            # This fails because the key "Tom" was deleted
```
