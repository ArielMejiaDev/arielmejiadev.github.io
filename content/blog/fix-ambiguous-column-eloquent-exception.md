---
id: 13
title: Fix Ambiguous Column Eloquent Query Exception in Laravel
published: true
description: Handle this relationship to get only the columns that you need from a relationship.
tags: Laravel, Eloquent, relationships
cover_image: https://dev-to-uploads.s3.amazonaws.com/i/c5vik4dlgowawfh51h6t.png
---

Scenario: you have some relationship and you want to get only a few columns.

# Models:

## User:

```php
public function teams()
{
    return $this->belongsToMany(Team::class);
}
``` 

## Team

```php
public function users()
{
    return $this->belongsToMany(User::class);
}
```

Then you can attach users to teams like this:

```php
Team::users()->attach(auth()->user());
```

and now you can get a collection of users by teams like:

```php
$users = Team::users;
```

Ok here all fine, maybe you need to pass data to an API or just to a view but, User model has sensitive data or maybe your User model is huge and its a better approach to get only the data that you need, maybe you want the name and email only, you are probably doing something like this:

```php
$team = Team::first();
$team->users()->select(['name', 'email'])->get();
```

Here you would see some eloquent exception, this is because the User model has a column name and Team model could have a column name too, but dont worry like all in Laravel is really easy, just be explicit with the table and the columns that you need:

```php
Team::users()->select(['users.name', 'users.email'])->get();
```

The same idea apply when you need to add a "where" method:

```php
Team::users()->where('users.email', $request->get('email'))->get();
```
