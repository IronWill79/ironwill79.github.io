---
title: "Bash Basics"
pubDate: 2025-05-01
description: 'My notes and learning about Bash and Bash Scripting'
author: 'Will Walsh'
tags: ["linux", "bash", "scripting"]
---

# Bash Basics

Some commands at the shell, such as `echo`, are built-ins.

To determine whether a command or a built-in is to be used, use `command -V`.

To force the use of an executable, use `command`. To force the use of a builtin, use `builtin`.

To disable a built-in so that the shell searches the path for the executable, use `enable -n`

To display all disabled builtins, use `enable -n`.

To re-enable a builtin after disabling, use `enable`.

Builtins don't use man pages. `help` can be used without a parameter to list all builtins, or with a builtin name to show the usage.

```bash
$ command echo hello
hello
$ builtin echo hello
hello
$ command -V echo
echo is a shell builtin
$ command -V df
df is /usr/bin/df
$ enable -n echo
$ command -V echo
echo is /usr/bin/echo
$ enable -n
enable -n echo
$ enable echo
$ command -V echo
echo is a shell builtin
```
