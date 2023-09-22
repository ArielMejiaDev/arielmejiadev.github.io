---
id: 1
published: true
title: Redirect users after login with Laravel UI
date: June 1st, 2020
description: Redirect users by roles after login with Laravel
cover_image: https://dev-to-uploads.s3.amazonaws.com/i/ib3r5bxkcq1z4lnux38s.png
tags: Laravel
---

# Redirect users by roles after login with Laravel UI.


::alert
#title
This post is outdated!

If you are working with <a class="underline" href="/redirect-after-login-with-laravel-breeze">Laravel/Breeze there is a new post here</a>
::

The post is going to dive in the auth scaffold to redirect users to different routes by roles.

**Add Role column to users table**

Role column is going to be a simple string to keep things simple, 
but it could work with another column relationship without issues.

**User migration**:

```php
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('role')->default('user'); // <- add this column
            $table->rememberToken();
            $table->timestamps();
        });
    }
```

**User model**:

```php
class User extends Authenticatable
{
    use Notifiable, HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'role', // add role to fillable properties
    ];
}
```

**AuthController**

Located in `app/Http/Controllers/Auth`, here we can find the `LoginController.php` file:

```php
protected $redirectTo = RouteServiceProvider::HOME;
```
 
The constant `RouteServiceProvider::HOME`, can be over ride in order to redirect endpoint for all users, 
but it does not work when it depends on any condition.

**The LoginController use a trait**:

```php
use AuthenticatesUsers;
```

`AuthenticatesUsers` trait use another trait `RedirectsUsers` it has a `redirectPath` method:

```php
public function redirectPath()
{
    if (method_exists($this, 'redirectTo')) {
        return $this->redirectTo();
    }

    return property_exists($this, 'redirectTo') ? $this->redirectTo : '/home';
}
```

The trait check if the controller class has `redirectTo` property, but if this is not the case, it fired a `redirectTo` method.

So we can add it in `LoginController` and add any logic required there.

**For example**:

```php
public function redirectTo()
{
    $for = [
        'admin' => 'admin.panel',
        'user'  => 'foundations.splashscreen',
    ];
    
    return $this->redirectTo = route($for[auth()->user()->role]);
}
```

`$for` defines a strategy with key-value for role-route, then it grabs the authenticated user role set dynamically the `redirectTo` property.

**Take in mind**:

In order to debug the endpoint the trait `AuthenticatesUsers.php` has a method `sendLoginResponse`, that uses `redirectPath()`:

```php
protected function sendLoginResponse(Request $request)
{
    $request->session()->regenerate();

    $this->clearLoginAttempts($request);

    if ($response = $this->authenticated($request, $this->guard()->user())) {
        return $response;
    }
    // HERE YOU CAN ADD a dd($this->redirectPath())
    return $request->wantsJson()
                ? new Response('', 204)
                : redirect()->intended($this->redirectPath());
}
```

**Redirect Users that already has a session**

The logic to redirect a user would be executed only when a user log in, 
but there is always a chance that an already authenticated user visit the app later or 
maliciously try to type a route that is not allowed. 

The same logic to redirect users by roles should be added 
to protect routes using `RedirectIfAuthenticated` `middleware`.

Thanks for reading!