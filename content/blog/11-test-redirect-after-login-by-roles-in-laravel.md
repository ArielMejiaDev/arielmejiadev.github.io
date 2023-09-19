---
id: 11
title: Test redirects after login by roles with Laravel.
published: true
description: Make assertions to test redirects by role after login.
tags: Laravel, TDD, login
cover_image: https://dev-to-uploads.s3.amazonaws.com/i/o4cg7w9ekjqkb99xcp51.png
---

Common scenario: you have different roles and you want to test that user roles redirect after login to different endpoints.

Here I add simple example using role as a user column, but you can add a relationship directly from Team model/User model (many to many relationship) and then add pivot model as Role or just use Jetstream.

You can add as many complexity as you need, but we are going to keep it simple, here the snippet:

```php
use RefreshDatabase;
/** @test */
public function test_app_admin_can_login_and_go_to_admin_dashboard()
{
    $user = factory(User::class)->create([
        'role' => 'admin'
    ]);
    session()->setPreviousUrl('/login');
    $response = $this->post('/login', [
        'email' => $user->email,
        'password' => 'password',
    ]);
    $response->assertLocation(route('admin.dashboard'));
}
```

Code explanation:

- First create a user by factory.
- Then add a session to establish a the current url.
- Then make the response to login with data (the default password in factories is "password").
- finally assert the current location, after login with any route as you need, if its a named route better.

Note: The user factory sintax change in Laravel 8, just a little bit so take that in mind.


Thanks for reading.
