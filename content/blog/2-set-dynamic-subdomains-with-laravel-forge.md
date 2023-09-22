---
id: 2
published: true
title: Set dynamic subdomains in Laravel Forge.
date: June 3rd, 2020
description: Set dynamic subdomains for multiple users, organizations or any other model in production with Laravel forge
cover_image: https://dev-to-uploads.s3.amazonaws.com/i/lsqvvvptoj6y0tba76fq.png
tags: Laravel, DevOps
---

# Set dynamic subdomains in Laravel Forge

## In Development

In `routes/web.php` paste the route group:

```php
Route::domain('{user:slug}.' . config('app.base_url'))->group(function () {

    Route::get('/', UserController::class)->name('user.homepage');

});
```

`base_url` is added by the `config()` helper, do not use the `env()` method here,
this could cause errors if you fired the command `php artisan cache:clear`

In this example you would need to add the column **slug** in your user migration.

The part of the route that adds the `base_url` should be added in `config/app.php`

```php
'base_url' => env('BASE_URL', 'localhost'),
```

Set a `base_url` in the application `.env` file:

```dotenv
BASE_URL=myapp.test
```

## Create a controller

In `app/Http/Controllers/Users/UserController`:

```php
public function __invoke(User $user)
{
    return $user;
}
```

Now it can be tested in the browser with something like: `/john-doe/myapp.test`

It returns the corresponding user for that slug, if you do not have any user with the **slug** it will throw a 404 error.

You can add users with tinker and test it.

If all works it is time to make a deployment on **forge**, in this example I will use **digital ocean** as the server provider.

## 1 Create your project on forge:

Just write your domain and be sure to check **allow wildcards**.

![Create Server in Forge Screen](/images/blog/2/forge-screen.png)

## 2 Add your repo:

The full repo name comes from the `github` repo url (highlighted):

![Create Repository home in github](/images/blog/2/github-screen.png)

This convention from `githubusername/repo` goes in the `repository` field in **forge**:

![Set Github in Forge Screen](/images/blog/2/forge-screen-2.png)

## 3 Set your environment:

It needs to add the proper `APP_URL` value in the `.env` file on forge:

![Edit Env File in Forge Screen](/images/blog/2/forge-screen-3.png)


Here I add the `BASE_URL` and make the `APP_URL` dynamically, but both can also be written.

## 4 Set the domain in Digital Ocean:

You need to add some records:
- by default an `A` record for the base url `@`
- a `CNAME` record for `www`
- and a multi-domain `A` record with `*.` as a prefix

This is how your config should look like:

![A Records in Digital Ocean Dashboard](/images/blog/2/digital-ocean-screen.png)

## 5 Create an API TOKEN

On the sidebar, go to **API** section and generate a **new token**, copy the token and save it for later

![Create Personal Access Tokens Digital Ocean Dashboard](/images/blog/2/digital-ocean-screen-2.png)

## 6 Configure the SSL certificate:

This step is particularly complicated because sometimes it takes a couple of hours to properly propagate the changes 
from **Digital Ocean**, this applies to any other provider.

![Add SSL Certificate in Forge](/images/blog/2/forge-screen-4.png)

Sometimes it works immediately, and sometimes takes a while and needs more time to get propagation, 
between 2 or 6 hours, but it can take more.

Thanks for reading!