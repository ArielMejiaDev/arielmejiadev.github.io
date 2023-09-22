---
id: 10
published: true
title: Show API exceptions in Laravel.
date: September 10th, 2020
description: Simple snippet to show exceptions on API development
cover_image: https://dev-to-uploads.s3.amazonaws.com/i/h8y1tc32lprt41y3szsu.png
tags: Laravel
---

# Show API exceptions in Laravel

## Check Request Headers

If you are using `Postman` (or similar) in order to make a request, you should add this headers

- `Accept: Application/Json`
- `Content-Type: Application/Json`

Then you should be able to see `JSON` response with the current exception

## Showing Exceptions while running tests

Check that tests are using the proper `json` methods

```php 
// This method does not add headers to the request
// $response = $this->post('api/users');

// This method add headers to the request in order to get json exceptions
$response = $this->postJson('api/users');
```

## Cleaning Exceptions Messages

If you are working with `Laravel` on an `API` there are helpers like

- `abort`
- `abort_if`
- `abort_unless`

In `development`, it would show an entire **stack trace**, and maybe you expect to get a preview of what exactly it throws, 
well you can go to `.env` file and change the value of 

```bash
## APP_ENV='local' instead of this
APP_ENV='production'
```

This is great for `production`, but on `development` there are a lot of benefits to keep environment as `local`, 
in order to keep the messages cleaner we can make a change in `app/exceptions/handler.php`

```php
public function register() 
{
    $this->renderable(function (Exception $exception, Request $request) {
        if($request->expectsJson()) {
            return response()->json([
                'message' => $exception->getMessage()
            ], $exception->getCode());
        }
    });
}
```

Now, you are able to still on `development` and get a cleaner response

## Going One-Step Forward

You can create custom `Exception` classes to represent in a better way some logic exception

```php 
class CustomException extends Exception
{
    public static function internalException()
    {
        return new static('An internal Exception Ocurred!', 500);
    }
}

class TicketsException extends CustomException
{
    public static function noMoreTicketsAvailable()
    {
        return new static('No More Tickets Available', 404);
    }
}
```

Now in any place of your code you can throw a `custom exception`

```php
throw TicketsException::noMoreTicketsAvailable();
```

And it should show your custom message with the custom `status code`

## Testing Custom Exceptions

```php
public function some_test()
{
    $this->withoutExceptionHandling();
    
    $this->assertExpectExceptionObject(
        TicketsException::noMoreTicketsAvailable()
    );
    
    // ...
    
    $response $this->postJson('api/tickets/purchase');
}
```

**Take in Mind**

As now `exceptions` are `custom objects` you are able to add as many `methods` as it is required 
to add more `details` or `constants` / `enums` to handle `exception statuses`

So just to keep it simple we are going to use `Symfony Http Response`, but it could grow to a backed enum if it is required

```php 
class TicketsException extends CustomException
{
    public static function noMoreTicketsAvailable()
    {
        return new static('No More Tickets Available', Response::NOT_FOUND);
    }
}
```

Thanks for reading!
