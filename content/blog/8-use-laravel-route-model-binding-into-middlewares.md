---
id: 8
published: true
title: Use route model binding on Middlewares in Laravel
description: How do you handle a route model binding on Middleware
date: July 18th, 2020
cover_image: https://dev-to-uploads.s3.amazonaws.com/i/2gkj91aqrqtznh945eo7.png
tags: [Laravel]
---

# Use route model binding on Middlewares in Laravel

**Route Model Binding** is a feature that allows the **Laravel** Container 
to resolve a `model` instance by a route param automatically.

## Create a middleware

```shell
php artisan make:middleware UserMiddleware
```

For the sake of simplicity in this example we are going to check if the `user` has a specific name, 
if not it will redirect back with a status `flash message`

In directory `App/Http/Middleware`

```php
public function handle($request, Closure $next)
{
    // 1 way to get the model from route model binding
    //$condition = Route::current()->parameters()->name === 'John Doe';

    // 2 way to get the model from route model binding
    //$condition = $request->name === 'John Doe'

    // 3 way to get the model from route model binding
    $condition = $request->route('user')->name === 'John Doe';

    if ($condition) 
    {
         return redirect()
             ->back()
             ->with('status', 'user is not the admin');
    }
    return $next($request);
}
```

***
`Route model binding` only works if route has the model param `/{user}` and both names matches
***

In order to use a custom param name `Laravel` provides different ways 
to customize `route model binding` the easiest way is to add the method `params(['user' => 'customParam'])` to the current route

Thanks for reading!