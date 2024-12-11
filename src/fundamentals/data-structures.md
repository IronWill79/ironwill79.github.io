---
title: 'Data Structures'
pubDate: 2024-12-11
description: 'Notes on the Programming Foundations: Data Structures course on LinkedInLearning'
author: 'IronWill79'
tags: ["data structures", "programming", "fundamentals"]
---

## Introduction

### What I should know

- [x] basic concepts of programming, including variables, loops, functions, and other basic software development jargon.
- [x] basic Python knowledge

## Chapter 1 - Begin with Data Structures

### What is data?

- Data is information stored by a computer.
- Data is stored by a computer as specific data types, such as integers, floats, characters, strings, and booleans.
- In Python, the `type` function can tell you the data type of a variable.

### Introduction to Data Structures

- Data structures are containers that allow us to combine pieces of data into a single structure
- Let's say we wanted to keep track of the number of pets each student had in a given class. We would need a way to access and store each individual student's number of pets.
- Data structures not only allow us to combine data, but also give a way to access and work with that data in an efficient manner.

### Built-in data structures in Python

- Lists store a collection of items in a specific order, denoted by square brackets and separated by commas (`[1, 2, 3]`)
- Tuples are immutable and store two values, denoted by parentheses and separated by commas (`(1, 2)`)
- Dictionaries are used to store key-value pairs, denoted by braces and separated by commas (`{ 'key': 'value' }`), used to store unordered data where each key-value pair represents a relationship.
- Sets are used to store a collection of unique items in an unordered manner, denoted by braces, with each item separated by commas (`{1, 2}`)
- Deques are double-ended queues, which are similar to lists, but allow you to insert and remove from both the front and the back of the queue.


### Big O notation

- Big O notation describes the performance or complexity of an algorithm, independent of input.
- For a given data structure, there are a series of operations we can perform on it. For each of these, we can come up with its time complexity, or how long it takes to run independent of input.
- First, there's constant time complexity, or O1 - This will take the same amount of time regardless of the number of inputs.
- There's linear time, or On - This means the time required will grow linearly with the size of the input.
- There's quadratic time complexity, or On2 - This means the time is proportional to the square of items in the collection.
- Each data structure has a way to optimize for certain operations, which is why you should use the right structure for the operations you need to perform.

## Chapter 2 - Arrays

### Pre course knowledge

- Arrays are fixed size collections of data, using zero-indexing in most languages

### What is an Array?

- An array is a collection of elements, where each item is identified by an index or key.
- Python itself does not have a data structure called an array, but tuples and lists are array-like structures.

### Python lists

- The `len` function can be called on a list to obtain the number of elements in the list
```python
number_of_students = len(student_pet_count_list)
```

- The `enumerate` function can be called on a list to obtain the index as well as the value
```python
for i, row in enumerate(seating_chart):
```

## Chapter 3 - Dictionaries

### Pre course knowledge

- Dictionaries are collections of key-value pairs

## Chapter 4 - Sets

### Pre course knowledge

- Sets are a mathematical concept that is implemented as a collection that only contains unique values

## Chapter 5 - Queues

### Pre course knowledge

- Queues are a collection using a First In, First Out (FIFO) methodology, used for a number of things, including scheduling jobs

## Chapter 6 - Stacks

### Pre course knowledge

- Stacks are a collection similar to queues, but use a First In, Last Out (FILO) methodology, used in the very fundamentals of CPU/OS interactions, for example to store CPU state when the CPU has to execute an Interrupt Service Routine (ISR)
