---
id: 15
published: true
title: Auto Login For Development In Laravel
date: March 21st, 2021
description: Skipp Authentication Flow on Development in a secure way
cover_image:
tags: Laravel
---

# Auto Login For Development In Laravel

Skipp adding credentials to test UI all the time for development

### Add a User seeder with your development user

`database/seeders/UserSeeder.php`

```php
User::factory()->create([
    'name' => 'your name',
    'email' => 'your@email.com'
]);
```

You can add alternatively a password, but it is not necessary, 
the default user factory adds a password for all users as `password`

### Add a route

`routes/web.php`

```php
Route::get('/dev-login', function() {
    abort_unless(app()->environment('local') ,403);

    auth()->login(User::first());

    return redirect()->to('/');
})->name('dev-login');
```

### Add a link on your login view

Using Blade Template

```php
@if(config('app.env') === 'local')
    <a href="{{ route('dev-login') }}">Dev Login</a>
@endif
```

## Go further

### Auto login using AuthServiceProvider

You can also set a default authenticated `user` with this code in `AuthServiceProvider`

```php
public function boot()
{
    if($this->app->environment('local')) {
    
        $user = User::query()->firstOrCreate([
            'name' => 'John Doe',
            'email' => 'john@doe.com'
        ]);
        
        $this->app['auth']->setUser($user);
    }
}
```

## Working With Jetstream

The dashboard and other pages use some `middlewares` with current `team_id`, 
so you must need to create a `user` with a `personal team` first and pass the user as the `authenticated user`


On a `UserSeeder` or `DatabaseSeeder` class

```php
User::factory()->withPersonalTeam()->create();
```

Then migrate & seed the database:

```shell
php artisan migrate:fresh --seed
```

Then modify a little the `AuthServiceProvider`

```php
public function boot()
{
    if($this->app->environment('local')) {
        $this->app['auth']->setUser(User::first());
    }
}
```

Thanks for reading!