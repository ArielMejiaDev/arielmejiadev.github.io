---
id: 3
title: Laravel blade directive for money format
published: true
description: Create a custom blade directive to print an amount in money format easy.
tags: Laravel
cover_image: https://dev-to-uploads.s3.amazonaws.com/i/7wfui6zymk8r1uglcva2.png
---

## Create a service provider for custom blade directives:

```php
php artisan make:provider BladeServiceProvider
```

## Register the new service provider:

In "config/app.php" and add the new blade service provider in "providers" array:

```php
$providers = [
    ...
    App\Providers\BladeServiceProvider::class,
];
```

## Add the directive in blade service provider:

Go to "app/Providers/BladeServiceProvider" in the boot method:

```php
    Blade::directive('money', function ($money) {
        return "<?php echo number_format($money, 2); ?>";
    });
```

It use the Blade facade, with "directive" method the first argument is the name of the created directive in this case "money", then the second argument is a callback

The "$money" variable that represents the value pass to the directive, then it returns the value formatted using the "number_format" method.

## Use the new money directive:

In any blade file:

```php
@money($value)
```

---
Notes:

I think that this directives are a great place to make some tricky formatting, but if you want to add more logic, maybe a best way to add this is with a model method or an action class.


Thanks for reading.

