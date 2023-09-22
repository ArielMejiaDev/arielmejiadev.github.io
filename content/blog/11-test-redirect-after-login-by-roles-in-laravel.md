---
id: 11
published: true
title: Test redirects after login by roles with Laravel
description: Make assertions to test redirects by role after login
date: September 15th, 2020
cover_image: https://dev-to-uploads.s3.amazonaws.com/i/o4cg7w9ekjqkb99xcp51.png
tags: Laravel
---

# Test redirects after login with Laravel

**Common scenario**

Users with different `roles` should be redirected to different dashboards after `login`

For the sake of simplicity the example is using `user` model property `role` as simple string column, 
but you can add as many complexity as you need

```php
use RefreshDatabase;
/** @test */
public function test_app_admin_can_login_and_go_to_admin_dashboard()
{
    $user = User::factory()->create([
        'role' => 'admin'
    ]);
    
    session()->setPreviousUrl('/login');
    
    $response = $this->post('/login', [
        'email' => $user->email,
        'password' => 'password',
    ]);
    
    $response->assertLocation(route('admin.dashboard')); // admin/dashboard
}
```

**Code by steps**

- First create a `user` model by `factory`
- Then add a `session` to establish a current `url`
- Then make the request to log in with data (the default password in factories is `password`)
- finally assert the current location, after `login` with any `route` as you need, if it's a `named route` probably it is better

Thanks for reading!
