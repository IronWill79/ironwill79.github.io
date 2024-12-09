---
layout: '../../../layouts/MarkdownPostLayout.astro'
title: 'Introduction to Embedded Systems with Rust'
pubDate: 2024-12-09
description: 'Learn the fundamentals of embedded systems, and developing applications for them in Rust'
author: 'IronWill79'
tags: ["programming", "rust", "embedded"]
---
# Introduction to Embedded Systems with Rust

Published on: 2024-12-09

## Write Your First Program

### Setting up the development environment

- Install [Rust](https://www.rust-lang.org/tools/install)
- Install [QEMU](https://www.qemu.org/download/#windows)
- Install the target platform using `rustup target add thumbv7m-none-eabi`

### Using `no_std`

- The following ensures you aren't using the Standard Library, which requires an operating system to interact with. Rust provides a `core` crate that doesn't require an OS.

```rust
#![no_std]
#![no_main]
```

### Panic handlers

- In a `std` environment, panic behaviour is well defined. The stack is unwound and destructors are run for each object as this happens.
- In `no_std`, Rust leaves panic behaviour undefined.
- For embedded systems, we need to define the panic handler ourselves, without which, a program can not compile.

### The main function

- Include the `cortex-m` and `cortex-m-rt` crates.
- `cortex-m-rt` has all the necessary functionality to start up and run `no_std` binaries for Cortex-M chips. In particular, it has two attributes we care about, `entry` and `exception`.
- The `-> !` after the main function definition means it is a diverging function, and never returns.
- Semihosting is a technique for ARM chips to send instructions to another device to print data.
- We'll use the `cortex-m-semihosting` crate that provides a `hprintln` macro that is used the same as `println`.

#### Implementing Sleep

- We need to track the passage of time, do something to wake the device up, otherwise, our embedded system will stay asleep
- Put the system to sleep using an assembly instruction
  - Wait for interrupt (wfi), which waits for an interrupt
  - Wait for event, which waits for an event or interrupt
- Events are generated in multiple ways, for example by another thread calling the send event instruction.

#### Timers

- Timers wake up embedded systems using interrupts
- System Timer, or `SysTick`, is used here.
- `SysTick` counts down from a value to zero and on zero, triggers an exception then reloads the value and starts the process again.
- The sleep duration value needs to be specified in hertz, which is the frequency of the board's `SysTick` timer
