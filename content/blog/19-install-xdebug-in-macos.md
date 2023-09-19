---
id: 19
title: Install XDEBUG in MacOS
---

## Check the PHP current version

Open the terminal and type this command:

```
php -v
```

If you are using a local php version from homebrew or use Valet to set multiple php versions, with this command you would get exactly the current version.

## Install XDEBUG

Depending on your Mac architecture it could change (intel/m1)

### With Homebrew (intel)

```
pecl install xdebug
```

### On Apple M1

```
arch -arm64 sudo pecl install xdebug
```

Or this other command, depending on how PHP is compiled, and what the default architecture is:

```
arch -x86_64 sudo pecl install xdebug
```

## Get the php.ini file location

In the terminal run this command:

```
php --ini
```

You would get four values, the second line returns the `php.ini` file location, with this you can open a text editor and add xdebug.

## Add XDEBUG

In my case I am using `php 8.0.18` so the `php.ini` file location is: `/opt/homebrew/etc/php/8.0/php.ini`

Now you can open the file with an editor, in my case I am using vscode for this little changes, so in my terminal I use this command:

```
code /opt/homebrew/etc/php/8.0/php.ini
```

If you prefer to make the change in the terminal, you can use, this other command:

```
nano /opt/homebrew/etc/php/8.0/php.ini
```

Then at the very end add to the file this lines:

```
zend_extension=xdebug
xdebug.mode=develop,debug,coverage
```

It would set XDEBUG and also set and XDEBUG mode, useful when you are using the `--coverage` flags to run your tests.

## Test your XDEBUG configuration

Now we are ready to test the installation by running this command:

```
php -v
```

Now it should show something like this:

![Image description](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rtwmivxwpp9ptd0jl28q.png) 