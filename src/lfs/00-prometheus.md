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

### Chapter 2. Setting up for LFS

- ensure `export LFS=/mnt/lfs` is available to both `root` and `user` by using `.bash_profile`
- mount sda1 as a bind mount using `mount --bind /boot $LFS/boot`

### Chapter 3. LFS Stage 1

Remember to change Expat to 2.6.4, OpenSSL to 3.3.2 and Python to 3.12.6

### Chapter 4. Final Preparations

### Chapter 5. Compiling a Cross-Toolchain (lfs)

#### 5.2. Binutils-2.43.1 - Pass 1
- 1 SBU = 0m39.519s

#### 5.3. GCC-14.2.0 - Pass 1
- 3.2 SBU = 4m37.403s

#### 5.5. Glibc-2.40
- 1.3 SBU = 1m47.078s

### Chapter 6. Cross Compiling Temporary Tools (lfs)

#### 6.18. GCC-14.2.0 - Pass 2

- 4.2 SBU - 6m18.272s

### Chapter 7. Entering Chroot and Building Additional Temporary Tools

## Part IV. Building the LFS System

### Chapter 8. Installing Basic System Software

#### Chapter 8.2. Package Management

8.2.2.1. It is All in My Head!, and below

##### Package List
- Man-pages-6.9.1
- Iana-Etc-20240806
- Glibc-2.40 - `--disable-werror --enable-kernel=4.19 --enable-stack-protector=strong --disable-nscd libc_cv_slibdir=/usr/lib`
- Zlib-1.3.1
- Bzip2-1.0.8
- Xz-5.6.2 - `--disable-static`
- Lz4-1.10.0 - `BUILD_STATIC=no`
- Zstd-1.5.6
- File-5.45
- Readline-8.2.13 - `--disable-static --with-curses`
- M4-1.4.19
- Bc-6.7.6
- Flex-2.6.4 - `--disable-static`
- Tcl-8.6.14 - `--disable-rpath`
- Expect-5.45.4 - `--with-tcl=/usr/lib --enable-shared --disable-rpath --with-tclinclude=/usr/include`
- DejaGNU-1.6.3 ---- Error - Missing `makeinfo`



- Pkgconf-2.3.0 - `--disable-static`
- Binutils-2.43.1 - `--enable-gold --enable-ld=default --enable-plugins --enable-shared --disable-werror --enable-64-bit-bfd --enable-new-dtags --with-system-zlib --enable-default-hash-style=gnu`
- GMP-6.3.0 - `--enable-cxx --disable-static`
- MPFR-4.2.1 - `--disable-static --enable-thread-safe`
- MPC-1.3.1 - `--disable-static`
- Attr-2.5.2 - `--disable-static`
- Acl-2.3.2 - `--disable-static`
- Libcap-2.70 - `sed -i '/install -m.*STA/d' libcap/Makefile`
- Libxcrypt-4.4.36 - `--enable-hashes=strong,glibc --enable-obsolete-api=no --disable-static --disable-failure-tokens`
- Shadow-4.16.0 - `--disable-static --with-{b,yes}crypt --without-libbsd --with-group-name-max-length=32`
- GCC-14.2.0 - `--enable-languages=c,c++ --enable-default-pie --enable-default-ssp --enable-host-pie --disable-multilib --disable-bootstrap --disable-fixincludes --with-system-zlib`
- Ncurses-6.5 - `--with-shared --without-normal --without-debug --with-cxx-shared --enable-pc-files`
- Sed-4.9
- Psmisc-23.7
- Gettext-0.22.5 - `--disable-static`
- Bison-3.8.2
- Grep-3.11
- Bash-5.2.32 - `--without-bash-malloc --with-installed-readline bash_cv_strtold_broken=no`
- Libtool-2.4.7
- GDBM-1.24 - `--disable-static`
- Gperf-3.1
- Expat-2.6.4 - `--disable-static`
- Inetutils-2.5 - `--disable-logger --disable-whois --disable-rcp --disable-rexec --disable-rlogin --disable-rsh --disable-servers`
- Less-661
- Perl-5.40.0 - `-D useshrplib -D usethreads`
- XML::Parser-2.47
- Intltool-0.51.0
- Autoconf-2.72
- Automake-1.17
- OpenSSL-3.3.2 - `shared zlib-dynamic`
- Kmod-33 - `--with-openssl --with-xz --with-zstd --with-zlib --disable-manpages`
- Libelf from Elfutils-0.191 - `--disable-debuginfod --enable-libdebuginfod=dummy`
- Libffi-3.4.6 - `--disable-static --with-gcc-arch=native`
- Python-3.12.6 - `--enable-shared --with-system-expat --enable-optimizations`
- Flit-core-3.9.0
- Wheel-0.44.0
- Setuptools-72.2.0
- Ninja-1.12.1
- Meson-1.5.1
- Coreutils-9.5 - `FORCE_UNSAFE_CONFIGURE=1 ./configure --prefix=/usr --enable-no-install-programs=kill,uptime`
- Check-0.15.2 - `--disable-static`
- Diffutils-3.10
- Gawk-5.3.0
- Findutils-4.10.0
- Groff-1.23.0
- GRUB-2.12 - `--disable-efiemu --disable-werror`
- Gzip-1.13
