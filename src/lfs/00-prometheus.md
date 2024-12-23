---
title: "Prometheus - My 'Linux from Scratch' system"
pubDate: 2024-12-23
description: 'My notes and learning while creating my Prometheus OS'
author: 'Will Walsh'
tags: ["bare bones", "cross compilation", "linux", "operating systems"]
---

## Prometheus LFS

### Host setup

Starting with a Hyper-V VM, generation 1, using a Legacy Network Interface and Debian Bookworm, including SSH server and standard system utilities on install

Default user = user - user

sda1 /boot      ext2    boot
sda3 /          ext4    root
sda4 /mnt/lfs   ext4    lfs-root
sda5 -          swap

```bash
su
apt install sudo
nano /etc/sudoers - add NOPASSWD: to %sudo line
usermod -aG sudo user
sudo apt install binutils bison gawk gcc g++ m4 make patch texinfo
sudo rm -rvf /usr/bin/sh
sudo ln -sfv /usr/bin/bash /usr/bin/sh
```

This will now be ready to run the `version-check.sh` successfully.
