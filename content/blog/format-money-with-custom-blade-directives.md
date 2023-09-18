---
id: 3
title: Laravel blade directive for money format
published: true
description: Create a custom blade directive to print an amount in money format easy.
tags: Laravel
cover_image: https://dev-to-uploads.s3.amazonaws.com/i/7wfui6zymk8r1uglcva2.png
---

# Laravel blade directive for money format

## Create a new service provider:

```shell
php artisan make:provider BladeServiceProvider
```

## Register the new service provider:

In `config/app.php` add the new blade service provider in `providers` array:

```php
$providers = [
    ...
    App\Providers\BladeServiceProvider::class,
];
```

## Add the directive in the blade service provider:

In `app/Providers/BladeServiceProvider` add this code inside the boot method:

```php
Blade::directive('money', function ($money) {
    return "<?php echo number_format($money, 2); ?>";
});
```

It uses the `Blade facade` `directive` method, the first argument is the name of the directive 
in this case `money`, the second argument is a `callback`

The `$money` variable is the value pass through the directive, 
then it returns the value formatted using the php function `number_format`.

## Use the new money directive:

In any blade file:

```php
@money($value)
```

---
Notes:

I think that this directives are a great place to make some tricky formatting, but if you want to add more logic, maybe a best way to add this is with a model method or an action class.


Thanks for reading!

