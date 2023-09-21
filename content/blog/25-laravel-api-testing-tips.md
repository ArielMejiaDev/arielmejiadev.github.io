---
id: 25
title: Laravel API Testing Tips
---

Hi here a few tips to work on testing with Laravel, this post will be always on updating to grow.

## Get validation errors as JSON for an API
Use the testCase method `json()`

```php
$this->json('post', '/api/any', ['key' => 'value']);
```

If you are making an ajax or fetch request the errors will be displayed as json by default, 
to tests this validation errors just use the `json()` method.

## Create a Request class

This is particularly helpful if you are using dependency injection.

To create a request class and add params

```php
$request = new \Illuminate\Http\Request();

$request->replace([
    "name"  => "John Doe",
    "email" => "john@doe.com",
]);
```

It works also for a form request class:

```php
$request = new FormRequestCustomClass();
$request->replace([
    "name"  => "John Doe",
    "email" => "john@doe.com",
]);
```

## Debug a JSON response content easy.

You can chain `json()` method with `getContent()` method that allow you to view the response content,
typically a convention is to hold the response in a variable to make some assertions, 
in this case as you wish to view response in `JSON` format you can use `json_encode()` 
native php function to get a better readability:

```php
$response = $this->json('get', '/api/anyendpoint');
dd(json_decode($response->getContent()));
```

It works for other methods to make a request like `get()`, `post()`, `put()`, `delete()`, 
but it has more sense in `json()` method because it returns a JSON.


Another way to inspect the response is with the method `dump`:

```php
$response->dump();
```

## Testing redirects

Typically, in your controller you could return a redirect response in different ways:

```php
return redirect('/users'); // case 1 not the best approach
return redirect->to('/users'); // case 2 still not the best
return redirect()->route('users); // case 3 a good practice
return redirect()->back(); // case 4 if your previous endpoint was "/users" this is fine
```

Well, to test the redirect in many cases you can do something like:

```php
$response->assertRedirect('/users'); // this works for case 1, 2, 3
$response->assertRedirect(route('users')); // this works for case 1, 2, 3
```

As you can see the only method that cant be tested easily is the one that use the helper `back()`, 
Laravel can test the `redirect` method if this adds an explicit route, 
so the 4 case only will work by testing only the redirect status, like:

```php
$response->assertStatus(302);
$response->assertRedirect();
```

This maybe is not a granular test because we are only testing that a redirect is being executed, 
but this applies when you need to use the `back()` helper 
that is particularly useful in some situations.

## Count items from a JSON response:

In any response you can return a `JSON` if this is a collection or a resource collection like:

```php
$users = User::all();
// or
$users = UserResource::collection(User::all());
// or
$users = new UserResourceCollection(User::all());
```

The `JSON` response would return a nested items one for every user in the collection:

```json
{
    "data": [
        {
            "name": "John Doe",
            "email": "john@doe.com"
        },
        {
            "name": "Anne Doe",
            "email": "anne@doe.com"
        },
        {
            "name": "Marie Doe",
            "email": "marie@doe.com"
        }
    ]
}
```

Then probable you would like to assert the total of items inside the data, 
well this is a very useful tip, the Laravel response has a method 
`JsonCount()` method, this would help to count the items in a JSON response:

If is an eloquent collection:

```php
$response->assertJsonCount(5);
```

If is a resource collection:

```php
$response->assertJsonCount(5, 'data');
```

Why add data? because the resources return all data formatted as you wish in a `JSON` 
with a `data` key, so it will count the items (users) inside the data key.

## Test API endpoints:

The rest standard requires to get data as:

```javascript
fetch.get('/endpoint')
    .then(response => {
        const data = response.data
    })
```

Usually the structure of any request requires a response object with data property, 
but Laravel resources add another data property to the response, 
to remove this other property and stay with API REST standard, 
Laravel provides a method to remove this other property, `withoutWrapping`:

```php
return new UserResource(User::first())->withoutWrapping();
```

Thanks for reading, you are welcome to add comments to add more test tips!