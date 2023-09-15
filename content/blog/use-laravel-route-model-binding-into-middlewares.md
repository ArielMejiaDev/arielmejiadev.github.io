---
id: 9
title: Use route model binding on Middlewares in Laravel.
published: true
description: How do you handle a route model binding on Middleware.
tags: Laravel
cover_image: https://dev-to-uploads.s3.amazonaws.com/i/2gkj91aqrqtznh945eo7.png
---

# First you need a route:

On web.php

```php
Route::get('/users/{user}', 'UserController@show');
```

Then you have a route as "/users/1" for example, then in you controller:

## Add a show method in your controller

First add a controller of type resource with model User as a flag.

```php
php artisan make:controller UserController --model=User
```

Of course you can just add the controller and then add only the method that you want or even an invokable controller.

## Add the show method logic:

To get advantage of the route model binding you need to inject the model as type hint param in your show method:

```php
public function show(User $user)
{
    return $user;
}
```

In this example it only would return a json format of the model.


## How to use a middleware and get advantage of route model binding:

First we are going to create a middleware:

```php
php artisan make:middleware UserMiddleware
```

Then in your directory "App/Http/Middleware" you can view you r new middleware, there in this example we are going to validate if the user has a specific name, if not it will redirect to another route, the handle method:

```php
public function handle($request, Closure $next)
{
    //$condition = Route::current()
                   //->parameters()->name === 'John Doe';

    //$condition = $request
                   //->route('user')->name === 'John Doe';

    $condition = $request->name === 'John Doe';

    if ($condition) 
    {
         return redirect()
             ->back()
             ->with('status', 'user is not available');
    }
    return $next($request);
}
```

In this case it validates if user is John Doe, there are three different approaches, but all works pretty much the same.

***
JUST REMEMBER THAT ROUTE MODEL BINDING WILL WORK ONLY IF YOU INJECT THE EXPECTED MODEL ON THE METHOD THAT YOU EXPECT.
***

It returns back with a message that the user is not available, then if this is not the case it goes to the next part of the code to go to the controller.

## The route model binding on middleware you can access it by using the request method:

```php
$request->route('user')
```

Just remember the param string in route helper need to match to the url param.


Thanks for reading.