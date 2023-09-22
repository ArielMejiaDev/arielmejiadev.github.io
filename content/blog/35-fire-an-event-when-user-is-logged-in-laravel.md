---
id: 35
published: false
title: Fire an action when user is logged in or verified with Laravel
date: September 28th, 2023
description: How to apply events, jobs, notifications or any other Laravel feature when user is logged in or the account is verified
cover_image: https://dev-to-uploads.s3.amazonaws.com/i/0vwwganile7ghvb54i2n.png
tags: Laravel
---

# Fired an event when user is logged-in

There are cases when is required to fire an `event`, a `job` or maybe `notify` 
something when `user` is `logged in` or the account is `verified`, there are two ways of handle this actions

## In Auth Controllers

Let's suppose we want to send a `notification` eg: `AccountStatusNotification` when the user is logged in, 
in this case the `AuthenticatedSessionController` has a `store` method were we can add our custom logic

```php
    // App\Http\Controllers\Auth\AuthenticatedSessionController

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();
        
        // Here we can add our custom code
        auth()->user()->notify(new AccountStatusNotification());

        return redirect()->intended(RouteServiceProvider::HOME);
    }
```

## There is another way to handle this using events

In `EventServiceProvider` you can use any of these events:

- `Login`
- `Registered`
- `Verified`
- `Logout`
- `Authenticated`

## Where is Fired The Login Event

The `AuthenticatedSessionController` has a `store` method that uses a `LoginRequest` 
here you are able to find `Auth::guard` `facade` that returns an `Illuminate\Auth\SessionGuard` instance 
that has an `attempt` method that follows this calls

`attempt() -> login() -> fireLoginEvent() -> new Login event`

```php 
protected function fireLoginEvent($user, $remember = false)
{
    $this->events?->dispatch(new Login($this->name, $user, $remember));
}
```

## Use The Login Event

In this example you need to create your listener `SendEmailStatusNotificationListener`

```php
    // app/Providers/EventServiceProvider

    protected $listen = [
        Login::class => [
            SendEmailStatusNotificationListener::class,
        ],
    ];
```

In you `listeners` you can inject the `Login` event to get the event's `user` and fire the `notify` method

```php
public function handle(Login $event)
{
   $event->user->notify(new AccountStatusNotification);
   
   // or use the typical auth facade
   auth()->user()->notify(new AccountStatusNotification);
}
```

---

## Where Is Fired The Registered Event?

There is a `store` method in `app/Http/Controllers/Auth/RegisteredUserController.php`

```php
     /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:'.User::class],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        // Here Laravel Fires a registered event
        event(new Registered($user));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }
```

## Using The Registered event

You can use it with the same `EventServiceProvider` approach

```php
   use Illuminate\Auth\Events\Registered;

    protected $listen = [
        Registered::class => [
            SendWelcomeEmailNotification::class,
        ],
    ];
```

---

## Where Is Fired The Verified Event?

You can check the `__invoke` method on `app/Http/Controllers/Auth/VerifyEmailController.php`

```php
    /**
     * Mark the authenticated user's email address as verified.
     */
    public function __invoke(EmailVerificationRequest $request): RedirectResponse
    {
        // ...

        if ($request->user()->markEmailAsVerified()) {
            // Here Laravel already fire the verified event
            event(new Verified($request->user()));
        }

        // ...
    }
```

## Using The Verified Event

The same way you can handle this approach as an `event` in `EventServiceProvider`

```php
   use Illuminate\Auth\Events\Verified;

    protected $listen = [
        Verified::class => [
            SendEmailStatusNotificationListener::class,
        ],
    ];
```

---

## Where Is Fired The Logout Event?

It is fire by `destroy` method in `app\Http\Controllers\Auth\AuthenticatedSessionController`

```php
    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        // Auth guard returns Illuminate\Auth\SessionGuard
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
```

It uses `Auth::guard` `facade` to return an `Illuminate\Auth\SessionGuard` instance that has a `logout` method that fires the `Logout` event

```php
    /**
     * Log the user out of the application.
     *
     * @return void
     */
    public function logout()
    {
        // ... 
        
        // If we have an event dispatcher instance, we can fire off the logout event
        // so any further processing can be done. This allows the developer to be
        // listening for anytime a user signs out of this application manually.
        if (isset($this->events)) {
            $this->events->dispatch(new Logout($this->name, $user));
        }
        
        // ...
    }
```

## Using The Logout Event

So you can use the event to fire a `listener` when user signs out using the `EventServiceProvider` too

```php
   use Illuminate\Auth\Events\Registered;
   //...

    protected $listen = [
        Logout::class => [
            SendTaskOfTheDayNotificationListener::class,
        ],
    ];
```

Personally, I feel it is a more elegant way to handle auth events on `EventServiceProvider`, 
than adding the code directly into `App\Http\Controllers\Auth` controllers, it looks like a good standard

## The Authenticated Event

It works pretty similar to the remaining Auth Events, just take in mind that it is executed only when SessionGuard already has been set a `User`

Thanks for reading!


