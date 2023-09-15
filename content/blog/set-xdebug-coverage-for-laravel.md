---
id: 20
title: Set XDEBUG Coverage For Laravel
---

Laravel 9 has a new feature added by Nuno Maduro to get code coverage for specific Laravel projects, the command is `php artisan test --coverage`, in this article I am going to explain how to set xdebug locally in a MacOS environment.


## Check that you have installed Xdebug

In your local environment you can run this command:

```php
php -v
```

You should be able to see the php version, but also more data like xdebug version installed locally, like this:

![Terminal output](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qtrosu2w4vujpt2zqzc5.png)


If you have not installed XDEBUG here you would find [an article to install xdebug](https://dev.to/arielmejiadev/install-xdebug-in-montereyos-2d96)

---

## Get PHP.ini file location

Then to check the `php.ini` file location (it changes from different php versions) run this command:

```
php --ini
```

It should return in the second line the `php.ini` file location.

![Terminal output](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dij99jtthgf24n8qkces.png)

You can use a code editor like vscode or use `nano` or other editor to update the file, here I would add an example with both for `php 8.0.x` as it is required for Laravel 9:

---

## Set Xdebug mode

Grab the file location and edit the `php.ini` file:

```
// Command to open files with vscode... it is easier
code /usr/local/etc/php/8.0/php.ini

// or

nano /usr/local/etc/php/8.0/php.ini
```

Then add at the very bottom this line:

```
xdebug.mode=develop,debug,coverage
```

Now you are able to run:

```
php artisan test --coverage
```

and it should work and return something like this:

![Terminal output](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/yg7y70dkezrm78lh6m5b.png)
 
---

## Excluding Framework files

The `test --coverage` command would return a percentage of coverage, it is evaluating a lot of files, some of them not fully covered, so you can exclude this file to just test your own code implementations in `phpunit.xml` file, like this:

```
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

You can customize even more the `coverage` tags, but at this point your code coverage is higher.


That is all, thanks for reading the article, and `may the code coverage be with you`.