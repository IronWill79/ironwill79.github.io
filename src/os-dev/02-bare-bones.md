---
title: 'Bare Bones'
pubDate: 2024-12-12
description: 'This should end up with a simple kernel for 32-bit x86'
author: 'Will Walsh'
tags: ["programming", "bare bones", "c", "assembly", "operating systems"]
---

## Introduction

- This uses existing technology rather than having you develop your own programming language, compiler and bootloader.
  - GNU Linker from Binutils to link the object files into the final kernel.
  - GNU Assembler from Binutils (or NASM) to assemble instructions into object files containing machine code.
  - GCC to compile high level code into assembly.
  - GRUB to bootload the kernel using the Multiboot protocol that loads us into 32-bit protected mode with paging disabled.
  - ELF as the executable format

## Step 1 - Building a Cross-Compiler

### What is a Cross-Compiler?

- A cross compiler is a compiler that runs on platform A (the **host**), but generates executables for platform B (the **target**)
- For this Bare Bones kernel, we will use a target of `i686-elf`. This is effectively a target-agnostic compiler.

### Preparing for the build

To build GCC, you will need :-
- A unix-like environment (in Windows, WSL or Cygwin/MSYS)
- GCC
- G++
- Make
- Bison
- Flex
- GMP
- MPFR
- MPC
- Texinfo
- ISL (optional)

#### Installing dependencies

```bash
sudo apt install build-essential bison flex libgmp3-dev libmpc-dev libmpfr-dev texinfo libisl-dev
```

- Download the latest versions of [Binutils](https://sourceware.org/pub/binutils/releases/), [GCC](https://mirrors.middlendian.com/gnu/gcc), and [GDB](https://mirrors.middlendian.com/gnu/gdb/), and extract to `$HOME/src`

#### The Build

Setup the environment with the following

```bash
export PREFIX="$HOME/opt/cross"
export TARGET=i686-elf
export PATH="$PREFIX/bin:$PATH"
```

##### Compile Binutils

```bash
cd $HOME/src
mkdir -v build-binutils
cd build-binutils
../binutils-2.43/configure --target=$TARGET --prefix="$PREFIX" --with-sysroot --disable-nls --disable-werror
make
make install
```

##### Compile GDB

```bash
../gdb-15.2/configure --target=$TARGET --prefix="$PREFIX" --disable-werror
make all-gdb
make install-gdb
```

##### Compile GCC

```bash
cd $HOME/src
which -- $TARGET-as || echo $TARGET-as is not in the PATH

mkdir build-gcc
cd build-gcc
../gcc-14.2.0/configure --target=$TARGET --prefix="$PREFIX" --disable-nls --enable-languages=c,c++ --without-headers
make all-gcc
make all-target-libgcc
make install-gcc
make install-target-libgcc
```

If compiling for x86-64, you may want to consider building [Libgcc without the "red zone"](https://wiki.osdev.org/Libgcc_without_red_zone)

#### Using the new Compiler

```bash
$HOME/opt/cross/bin/$TARGET-gcc --version

export PATH="$HOME/opt/cross/bin:$PATH"
```

## Step 2 - Overview

For this simple kernel, you only need three files
- boot.s - kernel entry point that sets up the processor environment
- kernel.c - your actual kernel routines
- linker.ld - to link the above files into an executable

## Step 3 - Booting the OS

