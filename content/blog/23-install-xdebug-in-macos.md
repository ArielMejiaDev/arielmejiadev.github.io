---
id: 23
published: true
title: Install XDEBUG in MacOS
date: April 23st, 2022
description: Add Code Coverage easily by installing XDebug on your MacOS
cover_image:
tags: Laravel
---

# Install XDEBUG in MacOS

## Check the PHP current version

Open the terminal and type this command:

```shell
php -v
```

If you are using a local `PHP` version from `homebrew` or 
use `Valet` to set multiple `PHP` versions, with this command you would get the current version

## Install XDEBUG

Depending on your Mac architecture it could change (`intel`/`m1`)

### With Homebrew (intel)

```shell
pecl install xdebug
```

### On Apple M1

```shell
arch -arm64 sudo pecl install xdebug
```

Or this other command, depending on how `PHP` is compiled, and the `MacOS` architecture

```shell
arch -x86_64 sudo pecl install xdebug
```

## Get the php.ini file location

In the terminal run

```shell
php --ini
```

You would get four values, the second line returns the `php.ini` file location, 
with this you can open a text editor and add `xdebug`

## Add XDEBUG

In my case I am using `php 8.0.18` so the `php.ini` file location is `/opt/homebrew/etc/php/8.0/php.ini`

Now you can open the file with an editor, in my case I am using `vscode` for this little changes, 
so in my terminal I use this command:

```shell
code /opt/homebrew/etc/php/8.0/php.ini
```

If you prefer to make the change in the terminal, you can use nano editor

```shell
nano /opt/homebrew/etc/php/8.0/php.ini
```

Then at the very end add to the file this lines

```shell
zend_extension=xdebug
xdebug.mode=develop,debug,coverage
```

It would set `XDEBUG` and also set and `XDEBUG mode`, useful when you are using the `--coverage` flags to run your tests.

## Test your XDEBUG configuration

Now we are ready to test the installation by checking again the `PHP` version

```shell
php -v
```

Now it should show something like this

![Shell Screen Showing XDebug Installation Details](/images/blog/19/shell-screen.png)

Thanks for reading!