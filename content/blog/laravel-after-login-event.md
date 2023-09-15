---
id: 1
title: Redirect after login in Laravel.
published: true
description: Redirect users by roles after login with Laravel.
tags: Laravel
cover_image: https://dev-to-uploads.s3.amazonaws.com/i/ib3r5bxkcq1z4lnux38s.png
---

Hi, in this post I will dive in the auth scaffold to redirect users to different areas by roles.

## Add Role column to users.

### User migration:

```php
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->string('role')->default('user');
            $table->rememberToken();
            $table->timestamps();
        });
    }
```

### User model:

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
        'name', 'email', 'password', 'role',
    ];
}
```

### AuthController

By adding the auth scaffold, Laravel provide us with Auth controllers for authentication, register, forgot password, etc, the controllers are located in "app/Http/Controllers/Auth", here we can find the "LoginController.php" file, here we can find the property:

```php
protected $redirectTo = RouteServiceProvider::HOME;
```

This means that we can find a RouteServiceProvider const named "HOME", we can override this const and it will change the redirect endpoint after login, but this is not what we need to redirect users by role or by any other condition.

### The LoginController use a trait:

```php
use AuthenticatesUsers;
```

This AuthenticatesUsers trait has another trait "RedirectsUsers" this RedirectsUsers trait has a method "redirectPath":

```php
public function redirectPath()
{
    if (method_exists($this, 'redirectTo')) {
        return $this->redirectTo();
    }

    return property_exists($this, 'redirectTo') ? $this->redirectTo : '/home';
}
```

So it means that this trait looks if the class has a "redirectTo" property and if this is not the case it execute a "redirectTo" method, so we can add the method "redirectTo" in LoginController to add any logic that we need.

### By example:

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

Here you can see an array with roles as keys and route name as value, I strongly suggest that use the "route()" method, because if you change the endpoint it does not affect this method, because the value that we are resolving dinamically is the route name, not the endpoint.

### Note:

If you need to use some "dd()" debug the endpoint that will be redirect you can go to the trait "AuthenticatesUsers.php" that is used by "LoginController" here we can find a method "sendLoginResponse", that use the method redirectPath():

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

##Note:

If you want to redirect authenticated users on authentication routes by role to different paths, just edit the "RedirectIfAuthenticated" middleware to redirect by different roles.