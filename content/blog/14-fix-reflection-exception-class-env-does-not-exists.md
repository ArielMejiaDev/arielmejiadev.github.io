---
id: 14
title: Fix Telescope ReflectionException Class env does not exist
published: true
description: Fix Class env does not exists" on Laravel.
tags: Laravel, Telescope, TDD
//cover_image: https://direct_url_to_image.jpg
---

# Fix Telescope ReflectionException Class `env` does not exist

## The problem:

Using `Laravel/Telescope` while running your tests with

```php
php artisan test
```

Then console throws this exception

```bash
ReflectionException: Class env does not exist
```

Below it says that something in test environment fails with `Telescope`, 
I didn't change any code base or `environment` so... 

## Solution

- Step 1

Disable telescope for tests on your PHPUnit.xml add:

```XML
<env name="TELESCOPE_ENABLED" value="false"/>
```

- Step 2

Then go to the terminal and execute:

```php
php artisan clear
php artisan config:clear
```

**Credits**

I get the solution from two sites:

- This [github issue](https://github.com/laravel/telescope/issues/347){:target="_blank"}

- And from the [David Carr blog](https://dcblog.dev/laravel-telescope-error-when-running-tests-reflectionexception-class-env-does-not-exist){:target="_blank"}.


I only facilitate the information in this platform because 
I had a few hours searching for a solution, and it makes easier to search for anyone in the future.


Thanks for reading!