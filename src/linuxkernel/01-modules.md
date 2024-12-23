---
title: "Basic Kernel Modules"
pubDate: 2024-12-23
description: 'My notes and learning about the Linux Kernel'
author: 'Will Walsh'
tags: ["linux", "low-level", "kernel", "kernel modules", "operating systems"]
---

## Basic Kernel Module

```c
#include <linux/module.h>
#include <linux/init.h>

MODULE_LICENSE("GPL");
MODULE_AUTHOR("IronWill79");
MODULE_DESCRIPTION("Hello World LKM");

static int __init my_init(void)
{
    printk("Hello - Hello, Kernel!\n");
    return 0;
}

static int __exit my_exit(void)
{
    printk("Hello - Goodbye, Kernel!\n");
}

module_init(my_init);
module_exit(my_exit);
```