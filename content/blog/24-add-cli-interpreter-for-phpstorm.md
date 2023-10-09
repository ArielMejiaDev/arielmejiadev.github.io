---
id: 24
published: true
title: Add cli interpreter for PHPStorm
date: April 23st, 2022
description: Run tests using the PHPStorm UI starting your tests faster and in a granular way 
cover_image:
tags: [Laravel]
announcement_banner:
announcement_link:
---

If you are working with `Valet` you would probably have multiple projects, running multiple `PHP` versions

`PHPStorm` is able to run test inside the `IDE`, but you need to configure a `PHPCLI interpreter` 
and every version has its own executable path

## Find Laravel Valet PHP executable path

You are going to be able to see all the `PHP` versions that you have available using `Valet` by running

```shell
ls /opt/homebrew/Cellar
```

You would find different directories for different `PHP` versions, 
in this example I am using `php 8.0.18`, so I can see the executable files by running

```shell
ls /opt/homebrew/Cellar/php@8.0/8.0.18/bin/php
```

This is the path to set this `PHP` `cli interpreter` to your project in PHPStorm

You can replace the values as your need

```shell
ls /opt/homebrew/Cellar/php@<PHP_VERSION>/<PHP_VERSION>/bin/php
```

You can dive into the Cellar directory to check the different versions and get a list with 
the `PHP` files that you need for your current version

Now you are able to run tests

Thanks for reading!