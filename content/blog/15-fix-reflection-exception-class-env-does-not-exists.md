---
id: 15
title: Fix ReflectionException Class env does not exist
published: true
description: Fix Class env does not exists" on Laravel.
tags: Laravel, Telescope, TDD
//cover_image: https://direct_url_to_image.jpg
---

* [Spanish version of this post](https://dev.to/arielmejiadev/evita-la-excepcion-ambiguous-column-en-eloquent-37el)

## The problem:

Run your tests with:

- old way:

```php
vendor/bin/phpunit
```

- new way:

```php
php artisan test
```

- Or using the PHPStorm UI.

Then in console throws this error:

```bash
ReflectionException: Class env does not exist
```

Below it says that something in test environment fails with Telescope, I didnt change any code base or environment so... this problem is always related with cache:

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

## Note

I get the solution from two sites:

- This [github issue] (https://github.com/laravel/telescope/issues/347)

- And from the [David Carr blog](https://dcblog.dev/laravel-telescope-error-when-running-tests-reflectionexception-class-env-does-not-exist)


I only facilitate the information in this platform because I had a few hours searching for a solution and with a descriptive title it would be easy to search for anyone in the future.


Thanks for reading!