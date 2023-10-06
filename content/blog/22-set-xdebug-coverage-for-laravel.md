---
id: 22
published: true
title: Set XDebug Coverage For Laravel
date: March 28th, 2022
description: Start using Test Coverage For a Laravel Project
cover_image:
tags: [Laravel]
---

# Set XDEBUG Coverage For Laravel

***Laravel 9*** implement a new feature added by **Nuno Maduro** to get code coverage, 
the command is `php artisan test --coverage` 


This post explains how to set `xdebug` locally in a `MacOS` environment


## Check that you have installed Xdebug

In your local environment you can run

```shell
php -v
```

You should be able to see the `PHP` version, but also more data like `xdebug version` installed locally


![Shell Screen Showing XDebug Details](/images/blog/20/shell-screen.png)


If you have not installed `XDEBUG` here you would find [How to install xdebug](/blog/19-install-xdebug-in-macos)

---

## Get `PHP.ini` file location

Then to check the `php.ini` file location (it changes from different php versions) run

```shell
php --ini
```

In the second line the `php.ini` file location

![Shell Screen Showing php.ini File Details](/images/blog/20/shell-screen-2.png)

[//]: # (You can use a code editor like `vscode` or use `nano` or other editor to update the file)

[//]: # (Here I would add an example with both for `php 8.0.x` as it is required for `Laravel 9`)

---

## Set Xdebug mode

Grab the file location and edit the `php.ini` file:

```shell
## Command to open files with vscode... it is easier
code /usr/local/etc/php/8.0/php.ini

## or

nano /usr/local/etc/php/8.0/php.ini
```

Then add at the very bottom this line:

```shell
xdebug.mode=develop,debug,coverage
```

Now you are able to run

```shell
php artisan test --coverage
```

and it should work and return a test coverage output

![Shell Screen Showing Test Coverage Output in a Laravel App](/images/blog/20/shell-screen-3.png)
 
---

## Excluding Framework files

The `test --coverage` command would return a percentage of coverage, 
in order to exclude this files to just test your own code implementations in `phpunit.xml` file

```xml
<coverage processUncoveredFiles="true">
    <include>
        <directory suffix=".php">./app</directory>
    </include>
    <exclude>
        <directory suffix=".php">./app/Macros</directory>
        <file>./app/Http/Middleware/Authenticate.php</file>
        <file>./app/Http/Middleware/RedirectIfAuthenticated.php</file>
        <file>./app/Http/Middleware/TrustHosts.php</file>
        <file>./app/Http/Middleware/TrustProxies.php</file>
        <file>./app/Providers/BroadcastServiceProvider.php</file>
        <file>./app/Providers/HorizonServiceProvider.php</file>
        <file>./app/Providers/TelescopeServiceProvider.php</file>
    </exclude>
</coverage>
```

Thanks for reading! and `may the code coverage be with you`