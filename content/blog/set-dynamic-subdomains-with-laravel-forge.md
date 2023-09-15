---
id: 2
title: Set dynamic subdomains in Laravel Forge.
published: true
description: Set dynamic subdomains for multiple users, organizations or any other model in production with Laravel forge.
tags: Laravel, Forge, Digital Ocean
cover_image: https://dev-to-uploads.s3.amazonaws.com/i/lsqvvvptoj6y0tba76fq.png
---

First to explain the idea of this post is to add subdomain for every users or any other model, this is a cool feature that some Saas apply.

## In development:

routes/web.php file:

```php
Route::domain('{user}.' . config('app.base_url'))->group(function () {

    Route::get('/', 'Users\\UserController')->name('user.homepage');

});
```

Here I add an endpoint : "/1/myapp.test", the {user} means a wildcard for any model, but the id its not the most SEO friendly way to create the route maybe its better something like: "/john-doe/myapp.test".

To accomplish this we need to set a slug column as model route key, Since Laravel 7 you can use dinamic route model binding like this: "{user:slug}", unfortunately this feature is not working for domain method.

So in the user model "app/User.php" add the next method:

```php
/**
 * Get the route key for the model.
 *
 * @return string
*/
public function getRouteKeyName()
{
    return 'slug';
}
```

In this example you would need to add the column slug in your user migration.

Ok now we have our endpoint: "john-doe/myapp.test", the part of the route that adds the base url, in this case is adding by the "config()" helper, this is the recommended helper to add environment variables, do not use "env()" method here, this could cause errors if you fired the command "php artisan cache:clear".

The config method get a param "app.base_url", this convention points to the "config/app.php" file, inside the file you can find a base_url key with the env('BASE_URL') as value:

```php
    'url' => env('APP_URL', 'http://localhost'),

    'base_url' => env('BASE_URL', 'myapp.test'),
```

In your controller (app/Http/Controllers/Users/UserController):

```php
public function __invoke(User $user)
{
    return $user;
}
```

This controller is an invokable controller this means that when the class is invoke, if the class has an invoke method this will be fired, In this case we take advantage of route model binding to return all the user model, you can test this feature by changing the endpoint:

"john-doe/myapp.test" to "jane-doe/myapp.test"

This will work if you have users with this slugs, if you does not have any user with this slugs it will throw a 404 error, this is ok because it fails because there is a not model found exception behind.

you can add users with tinker and test again the endpoints.


So now that in development all works we need to make a deploy on forge, in this example I will use digital ocean as the server provider.

## 1 Create your project on forge:

Just write your domain and be sure to check "allow wildcards".

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/vfd8px6xgejcmv4qb8y5.png)

## 2 Add your repo:

The full repo name comes from the github repo url (look the pointer):

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/8zgpvnopkq1etcbxc2gc.png)

This convention from githubusername/repo goes in repository field in forge:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/25wqwebeo2kbdxqimz5g.png)


## 3 Set your environment:

As in development we use config() to get a value from "config/app.php" and this value comes from "env()" we need to add the proper value in the env file on forge:


![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/tm62xkk96b4s9w4xinmk.png)


Here I add the "BASE_URL" and make the "APP_URL" dinamically by using "BASE_URL" as part of its value as interpolated string.

## 4 Set the domain in Digital Ocean:

You need a add some records:
- by default an "A" record for the base url "@"
- a "CNAME" record for "www"
- the sauce tip the register to set multidomain an "A" record "*"

This is how your config would be seen:

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/dpmxwdsycuk19ry2driy.png)

## 5 Create an API TOKEN

On the sidebar, on API generate a new token, copy the token and save it for later.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/vas5pd8xatp0ke3zo9bc.png)

## 6 Now we need to configure the SSL certificate:

This step is particularly complicated because sometimes it takes a couple of hours to properly propagate the changes from Digital Ocean, this apply to any other provider not just Digital Ocean.

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/iaks37yv9kg35m04rbqu.png)

Many times it works immediately.

If this fail, its probably because the Digital ocean setup needs more time to get propagation, between 2 or 6 hours but it can take more time.