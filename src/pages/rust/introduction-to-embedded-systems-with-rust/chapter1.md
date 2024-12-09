---
layout: '../../layouts/MarkdownPostLayout.astro'
title: 'Introduction to Embedded Systems with Rust'
pubDate: 2024-12-09
description: 'Learn the fundamentals of embedded systems, and developing applications for them in Rust'
author: 'IronWill79'
tags: ["programming", "rust", "embedded"]
---
# Introduction to Embedded Systems with Rust

Published on: 2024-12-09

## Introduction to Embedded Systems

### What you should know?

- Unsafe Rust and raw pointers are required knowledge.
- [Unsafe Rust](https://doc.rust-lang.org/book/ch19-01-unsafe-rust.html)

### What are embedded systems?

- Embedded systems are often reactive systems that react to the environment.
- Examples of embedded systems are the cruise control system in a car, slowing and speeding up to maintain the specified speed, and smoke detectors, which react to smoke by triggering an alarm or switching on sprinklers.
- Embedded systems are resource constrained. Typically with a single CPU with clock speeds in megahertz and contain as little as 16 kilobytes of RAM.
- Embedded systems face constraints because of three things: size, power and heat.
- There's only so much space for parts in these systems.
- They often don't have access to large power systems, for example, battery operated devices.
- They are required to use lower powered electronics, as this generates heat, which can affect operation.

### Challenges writing embedded software

- Embedded systems development requires _low-level programming_.
- Low-level programming deals with the computer's hardware and its constraints directly.
- Higher-level languages abstract a lot of the hardware's complexity away from you, for example, using some variation of `.sleep` to pause, and `.append` to append to a list.
- In embedded systems, we deal with all the complexity head on.
- C and C++ are most commonly used, but Rust is gaining traction.
- Embedded software is developed in either bare-metal or hosted environments.
- Bare-metal environments have no operating system at all, and software has to interact with the hardware directly.
- Hosted environments have an operating system, or something similar to one. Some popular ones include RTOS and embedded Linux.
- Regardless, developers have to understand the hardware, and how the software integrates with it.
- You'll need to understand concepts such as interrupts, timers and related concepts, such as clock frequency.
- Memory is always limited, often requiring memory-efficient data representations and algorithms.
- They often operate in high-stakes environments, requiring split-second reaction times, so software has to guarantee worst-case performance to ensure it is safe.
