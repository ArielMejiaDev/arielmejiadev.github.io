---
id: 8
title: Fire an action when user is logged in or verified with Laravel
published: true
description: How to apply events, jobs, notifications or any other Laravel feature when user is logged in or the account is verfied
tags: Laravel
cover_image: https://dev-to-uploads.s3.amazonaws.com/i/0vwwganile7ghvb54i2n.png
---

There are case when we need to fired an event, a job or maybe notify something when user is logged in or the account is verfied, there are two ways of handle this actions.

# Fired an event when user is logged in:
---

## On LoginController

Lets suppose we want to send a notification when the user is logged in, in this case the "LoginController" does provide a "redirectTo" method this is the only method available when the user is already validated and logged in, so here we need to fired an event or any other logic that you would need:

```
app/Http/Controllers/Auth/LoginController.php
```

```php
    public function redirectTo()
    {
        auth()->user()->notify(new StatusNotification());
    }
```

There is another way to handle this event:

## Using the Login event:

```
app/Providers/EventServiceProvider:
```

```php
    protected $listen = [
        Login::class => [
            SendEmailStatusNotification::class,
        ],
    ];
```

In this example you need to create your listener "SendEmailStatusNotification" and there on "handle" method you can get the auth user and notify.

In you listeners you can inject the Login event to get the event user for example, this is another way of fire the notification:

```php
public function handle(Login $event)
{
   $event->user->notify(new StatusNotification);
   // or use the typicall auth facade
   auth()->user()->notify(new StatusNotification);
}
```

# Fired an event on verifiedAccount:
---

You can use the "verified" method on VerificationController:

```
app/Http/Controllers/Auth/VerificationController.php
```

```php
    public function verified(Request $request)
    {
        $request->user()->notify(new StatusNotification());
    }
```

## Using the Verified event:

The same way you can handle this approach as an event in EventServiceProvider:

```php
   use use Illuminate\Auth\Events\Verified;
   ....

    protected $listen = [
        Verified::class => [
            SendEmailStatusNotification::class,
        ],
    ];
```

Lastly, remember if you need to fired an event when the user is getting register,


# Fired an event when user is registered
---

Literally there is a method named "registered":

```
app/Http/Controllers/Auth/RegisterController.php
```

```php
    public function registered(Request $request, $user)
    {
        $user->notify(new NewsletterNotification());
    }
```

## Using the Registered event:

You can use the same Event approach:


```php
   use Illuminate\Auth\Events\Registered;
   ....

    protected $listen = [
        Registered::class => [
            SendWelcomeEmailNotification::class,
        ],
    ];
```


Personally I feel more elegant way to handle the events by using the events on "EventService" provider and it looks more like a good standard, but here are both ways to handle this

There are more events that work like this like: "Logout" event and "logout" method on "LoginController" but this examples show the most common cases.

Thanks for reading.


