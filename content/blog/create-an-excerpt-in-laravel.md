---
id: 4
title: Create an excerpt easy with Laravel
published: true
description: Create an excerpt would never be more easy with Laravel 7.
tags: Laravel
cover_image: https://dev-to-uploads.s3.amazonaws.com/i/2hdj0wp7cyepu1zsccx7.png
---

Hi, a common scenario to display data is that "descriptions" or any other long text field, rarely has the same long, to preserve a common length probably you will implement a excerpt function, well in Laravel 7 this is a really easy feature by using the "Str" class from "Illuminate\Support\Str" namespace.

Lets suppose that you has a "Post" model then you can create a function like this:

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

So now in your blade files you can use this method:

```php
<h1>{{ $post->title }}</h1>

<p>{{ $post->excerpt() }}</p>

```

Ok now you have an Idea how to use this feature, you can use it in an "appServiceProvider" or a custom "bladeServiceProvider" to add blade directives (this is the common way) just remember to import the namespace correctly.

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

In your views:


```php
<p>@excerpt($post->body)</p>
```

I particularly prefer this way, because it feels like a good concern for a blade directive and at the same time its flexible because it is not binding to some specific model, it has more readability and it's available for any text from any model.

You can even use directly the "Str" class in your blade files, do not worry about importing the namespace, in Blade files the "Str" class in adding by default (maybe not prefer way).

```php 
<p>{{ Str::limit($post->body, 100) }}</p>
```

Another way to implement this is to add another column and save the excerpt, something like this:

```php
$post->excerpt = Str::limit($request->body, 100);
```

In some cases this would be particularly helpful for posts with too many words.

Thanks for reading!
