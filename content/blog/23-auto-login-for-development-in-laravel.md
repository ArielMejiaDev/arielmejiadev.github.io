---
id: 23
title: Auto Login For Development In Laravel
---

In development could be annoying to add credentials when we are showing or testing the ui in the browser all the time, here a little tip:

### Add a User seeder with your development user

`database/seeders/UserSeeder.php`

```php
User::factory()->create([
    'name' => 'your name',
    'email' => 'your@email.com'
]);
```

You can add alternatively a password but it is not necessary, the default user factory adds a password for all users as string "password" so you can stay with this for all development users.

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

```php
<a href="{{ route('dev-login') }}">Dev Login</a>
```

### Auto login using AuthServiceProvider

You can also set a default authenticated user with this code in AuthServiceProvider:

```php
public function boot()
{
    if($this->app->environment('local')) {
        $this->app['auth']->setUser(new User([
            'name' => 'John Doe',
            'email' => 'john@doe.com'
        ]));
    }
}
```

## If you are working with Jetstream

The dashboard and other pages use some middlewares with current team id, so you must need to create a user with a personal team first and pass the user as the authenticated user


On a UserSeeder or DatabaseSeeder class

```php
User::factory()->withPersonalTeam()->create();
```

Then migrate & seed the database:

```
php artisan migrate:fresh --seed
```

Then modify a little bit the AuthServiceProvider:

```php
public function boot()
{
    if($this->app->environment('local')) {
        $this->app['auth']->setUser(User::first());
    }
}
```

