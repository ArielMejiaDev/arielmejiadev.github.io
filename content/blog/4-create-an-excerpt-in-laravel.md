---
id: 4
published: true
title: Create an excerpt easy with Laravel
date: June 11th, 2020
description: Create an excerpt would never be easier with Laravel
cover_image: https://dev-to-uploads.s3.amazonaws.com/i/2hdj0wp7cyepu1zsccx7.png
tags: [Laravel]
---

# Create an Excerpt in Laravel

In Laravel 7 this is a really easy feature by using the `Str` class from `Illuminate\Support\Str` namespace.

For a hypothetical `Post` model you can create a function like this:

```php
use Illuminate\Support\Str;

class Post
{
    const EXCERPT_LENGTH = 100;

    protected $fillable = [
        ..., 'body'
    ]

    public function excerpt()
    {
        return Str::limit($this->body, Post::EXCERPT_LENGTH)
    }
}
```

So now in your **blade** files you can use this method:

```php
<h1>{{ $post->title }}</h1>

<p>{{ $post->excerpt() }}</p>

```

Now it is easy to use it as a **blade** directive in `appServiceProvider` or any other provider

In any service provider:

```php
/**
 * Bootstrap services.
 *
 * @return void
*/
public function boot()
{
    Blade::directive('excerpt', function ($text) {
        return "<?php echo Str::limit($text, 100); ?>";
    });
}
```

Usage in **blade** views:


```php
<p>@excerpt($post->body)</p>
```

Another place to apply this feature is in `JsonResource` classes

Thanks for reading!
