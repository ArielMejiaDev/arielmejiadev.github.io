---
id: 12
published: true
title: Fix - Ambiguous Column Eloquent Query Exception in Laravel
date: October 14th, 2020
description: Get only the columns that your query requires from a model, and it's relationship without issues
cover_image: https://dev-to-uploads.s3.amazonaws.com/i/c5vik4dlgowawfh51h6t.png
tags: [Laravel]
---

# Fix - Ambiguous Column Eloquent Query Exception in Laravel

***
**Issue**: An `Eloquent` Model with a `relationship`, both have a `column` that matches the same `name`
***

Let's check an example to show how to fix it

## User Model:

```php
public function teams()
{
    return $this->belongsToMany(Team::class);
}
``` 

## Team Model

```php
public function users()
{
    return $this->belongsToMany(User::class);
}
```

Then you can attach `users` to `teams`

```php
Team::users()->attach(auth()->user());
```

And now you can get a `collection` of `users` by `teams`

```php
$users = Team::users;
```

Ok here all fine, maybe you need to pass data to an API, 
and it's a better approach to get only the data that is required

```php
$team = Team::first();
$team->users()->select(['name', 'email'])->get();
```

Here you would see an `eloquent` exception, this is because the `User` model has a column `name` 
and `Team` model could have a column `name` too, 


Don't worry like all in `Laravel` is really easy, just be explicit with the `table` and the `columns` that you need

```php
Team::users()->select(['users.name', 'users.email'])->get();
```

The same idea apply when you need to add a `where` method

```php
Team::users()->where('users.email', $request->get('email'))->get();
```

Thanks for reading!