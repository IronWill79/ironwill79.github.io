---
title: 'Cross compiling LFS for another system'
pubDate: 2024-12-23
description: 'Learning regarding cross-compiling LFS'
author: 'Will Walsh'
tags: ["bare bones", "cross compilation", "linux", "operating systems"]
---

## Setting up for a cross-compiled LFS, using an x86_64 host, building for aarch64

Based on [LFS 12.2](https://www.linuxfromscratch.org/lfs/downloads/stable/LFS-12.2-SYSV-NOCHUNKS.html)

### Part III. Building the LFS Cross Toolchain and Temporary Tools

#### Toolchain Technical Notes

Definitions of the main terms used in this context.

  *The build* is the machine where we build programs. This machine is also referred to as the 'host'.
  *The host* is the machine where the built programs will run. Note that this use of 'host' is not the same as in other sections.
  *The target* is only used for compilers. It is the machine the compiler produces code for. It may be different from both the build and the host.

As an example, let us imagine the following scenario (sometimes referred to as the "Canadian Cross"). We have a compiler on a slow machine only, let's call it machine A, and the compiler ccA. We also have a fast machine (B), but no compiler for (B), and we want to produce code for a third, slow machine (C). We will build a compiler for machine C in three stages.

Stage 1 - Build A - Host A - Target B - Build cross-compiler cc1 using ccA on machine A.
Stage 2 - Build A - Host B - Target C - Build cross-compiler cc2 using cc1 on machine A.
Stage 3 - Build B - Host C - Target C - Build compiler ccC using cc2 on machine B.

Then, all the programs needed by machine C can be compiled using cc2 on the fast machine B. Note that unless B can run programs produced for C, there is no way to test the newly built programs until machine C itself is running. For example, to run a test suite on ccC, we may want to add a fourth stage:

Stage 4 - Build C - Host C - Target C - Rebuild and test ccC using ccC on machine C

In the example above, only cc1 and cc2 are cross-compilers, that is, they produce code for a machine different from the one they are run on. The other compilers ccA and ccC produce code for the machine they are run on. Such compilers are called *native* compilers.

`LFS_TGT` is the variable holding the *target triple*

### 5.2.1. Installation of Cross Binutils
- add `--target=arm-linux`

## Taken from [now offline howto](https://web.archive.org/web/20050418232141/http://www.ailis.de/~k/docs/crosscompiling/toolchain.php)
ARM cross-compiling howto
Building cross-compiling toolchain
Required sources
I suppose you have no access to any precompiled ARM software so I'll explain how to build a cross compiling toolchain from the ground up, including glibc.

You need the following source packages to go on:

Package	Used version	Download
Linux Kernel	2.4.17	ftp.kernel.org
ARM Kernel patch	2.4.17-rmk4	ftp.arm.linux.org
binutils	2.11.2	ftp.gnu.org
gcc	2.95.3	ftp.gnu.org
glibc	2.2.4	ftp.gnu.org
glibc linuxthreads add-on	2.2.4	ftp.gnu.org
binutils
Unpack the binutils tarball into a temporary directory, change to the unpacked binutils directory and run the following commands:

# ./configure --target=arm-linux
# make
# make install

You have now some arm-linux-* binaries in /usr/local/bin. These are the binutils used by the cross-compiling toolchain. And you'll find the new directory /usr/local/arm-linux/. This is where the cross-compiling toolchain will be installed.

You can check if the binutils are compiled correctly by calling arm-linux-ar. This tool outputs the supported targets in its command line help. You should find targets like elf32-littlearm there.

Linux Kernel header files
To compile gcc we need some header files from the linux kernel source. Unpack the kernel source code in a temporary directory and change to the unpacked source directory. You'll need to patch the kernel with the ARM kernel patch. You do this by running this command:

# zcat path-to-arm-patch/patch-2.4.17-rmk4.gz | patch -p1

Now you need to configure the kernel by calling this command:

# make menuconfig ARCH=arm

Notice that you need to specify ARCH=arm otherwise you are going to configure the kernel for your host architecture which maybe a x86 machine.

You don't need to do a complete configuration unless you want to compile the kernel now. Up to now you don't have a cross compiler so you can't compile it anyway. All you need to do is to select the correct processer type. In my case I have selected SA1100-based in ARM system type and Compaq iPAQ H3600/H3700 in SA11x0 Implementations. Now save the configuration and call the following command to finish the kernel configuration:

# make dep

Now copy the include files from the kernel source to the toolchain directory:

# mkdir /usr/local/arm-linux/include
# cp -dR include/asm-arm /usr/local/arm-linux/include/asm
# cp -dR include/linux /usr/local/arm-linux/include/linux

Finally change to the toolchain directory and create a symbolic link from include to sys-include:

# cd /usr/local/arm-linux/
# ln -s include sys-linux

gcc, which we will compile now, is searching for the include files in sys-linux by default. You can use the --with-headers configure-option to specify an other directory but this results in copying the specifed directory to sys-linux. So I think it's better to create a symbolic link to avoid redundant files.

gcc
Unpack the gcc source code and change to the unpacked source directory. We currently don't have a running glibc so we can't compile the whole compiler suite. But for now it is enough to compile only the C compiler. Later we can compile the glibc with this cross compiler and after that we can compile the whole compiler suite.

It may be necessary to modify the gcc source a little bit. I have done this because otherwise I was not able to compile, I got these error messages:

./libgcc2.c:41: stdlib.h: No such file or directory
./libgcc2.c:42: unistd.h: No such file or directory
.make[3]: *** [libgcc2.a] Error 1

There are rumors that it is not always needed. If you think (or know, or learn) that you need it, edit the file gcc/config/arm/t-linux, search this line:

TARGET_LIBGCC2_CFLAGS = -fomit-frame-pointer -fPIC

And change it to this:

TARGET_LIBGCC2_CFLAGS = -fomit-frame-pointer -fPIC -Dinhibit_libc -D__gthr_posix_h

Now configure the source code, compile and install:

# ./configure --target=arm-linux --disable-threads --enable-languages=c
# make
# make install

You have now a running cross compiler (/usr/local/bin/arm-linux-gcc) but without glibc it is not really useful. So let's cross-compile that beast.

glibc
Unpack the glibc tarball in a temporary directory as usual. Then switch to the unpacked source directory and unpack the linuxthreads add-on into it:

# tar xvfz glibc-2.2.4.tar.gz
# cd glibc-2.2.4
# tar xvfz ../glibc-linuxthreads-2.2.4.tar.gz

Now set the environment variable CC to arm-linux-gcc because we want the glibc to be cross-compiled for the ARM platform. Then configure, compile and install the beast:

# export CC=arm-linux-gcc
# ./configure arm-linux --target=arm-linux --prefix=/usr/local/arm-linux --enable-add-ons
# make
# make install

Be sure you use the --prefix parameter correctly, otherwise you mess up your hosts glibc installation.

You'll now find a lot of new files and directories in /usr/local/arm-linux. These are the glibc headers, libraries and utitilies.

Notice that you can't use this compiled glibc on the target machine because of the specified prefix. If you want to compile a glibc which you can copy to your target machine, use an empty prefix (--prefix=) instead and use the install_root parameter to specify the installation directory:

# make install install_root=/path/to/target/root

Finally, make sure you unset the CC environment variable (with unset CC), because in the next step we are going to recompile the cross compiler and we don't want to cross-compile the cross-compiler. ;-)

gcc (Second try)
Now we have a cross compiled glibc so we can now go on and compile the whole gcc compiler suite.

You can use the already unpacked source code of gcc but you have to remove the changes you have made and you should call make distclean to clean up the source. To be sure to do it right I suggest you delete the old source directory and unpack the gcc sources again. Whatever, after you have a clean gcc source directory, change into it, configure the source, compile and install it:

# ./configure --target=arm-linux
# make
# make install

If compilation fails because PATH_MAX is undeclared in basicio.c then add the following line to the file libchill/basicio.c somewhere between all the other includes at the top of the file:

#include <linux/limits.h>

Call make again and it should compile fine now.

That's it. You should now have a working cross-compile toolchain for the ARM platform. If you want to cross-compile a program just set the CC environment-variable to arm-linux-gcc and compile the program as usual.