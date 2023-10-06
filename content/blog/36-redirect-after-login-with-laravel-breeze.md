---
id: 36
published: false
title: Redirect After Login with Laravel Breeze
date: September 29th, 2023
description: Redirect users by roles after login with Laravel Breeze
cover_image:
tags: [Laravel]
---

# Redirect users by roles after login with Laravel Breeze.

In namespace `App\Http\Controllers\Auth\AuthenticatedSessionController.php`:

```php
/**
 * Handle an incoming authentication request.
 */
public function store(LoginRequest $request): RedirectResponse
{
    $request->authenticate();

    $request->session()->regenerate();

    return redirect()->intended(RouteServiceProvider::HOME); // Here
}
```

Replace it with any logic that makes sense, in this case by user roles.

## Create a method to handle redirect logic

For the sake of keep it simple it could be placed in `App\User` model 
with a simple associative array, but it could use a match operator or anything fancier.

```php
class User 
{
    // ...
    
    public function home()
    {
        $routeByRole = [
            'admin' => 'admin.panel',
            'user'  => 'user.panel',
        ];
        
        return route($this->attributes['role'])]);
    }
}
```

Then replace the logic

```php
public function store(LoginRequest $request): RedirectResponse
{
    $request->authenticate();

    $request->session()->regenerate();

    return redirect()->intended($request->auth()->user()->home());
}
```

## Redirect Users that already has a session

There is always a chance that an already authenticated user visit the app later 
or maliciously try to type a route that is not allowed.

The same logic to redirect users by roles should be added to protect routes using `RedirectIfAuthenticated` middleware.

Thanks for reading!