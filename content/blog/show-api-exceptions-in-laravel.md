---
id: 11
title: Show API exceptions in Laravel.
published: true
description: Simple snippet to show exceptions on API development.
tags: Laravel, API, exceptions
cover_image: https://dev-to-uploads.s3.amazonaws.com/i/h8y1tc32lprt41y3szsu.png
---

If you are working with Laravel on an API there are several times when you are validating something and maybe you add helpers like:

- abort
- abort_if
- abort_unless

This scenarios works great for production because it throws an especific error with a Http code that represents the error.

In development it would show an entire stack trace, and maybe you spect to get a preview of what exactly it throws, well you can go to ".env" file and change the value of "APP_ENV" from "local" to production.

Then you would see exactly the error you expect, this could be benefit in terms of production but maybe you want to stay this production behavior on development to get exactly the error how you expect on development you can go to "app/exceptions/handler.php" and the next snippet on your render method:


```php
if($request->expectsJson()) {
    return response()->json([
        'error' => $exception->getMessage()
    ]);
}
```

Now you can still on development and get exactly the response as you expect, thanks for reading!
