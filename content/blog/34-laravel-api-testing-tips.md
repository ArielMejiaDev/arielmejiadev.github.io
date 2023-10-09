---
id: 34
published: false
title: Laravel API Testing Tips
date: September 27th, 2023
description: Some useful tips to test your Laravel API
cover_image:
tags: [Laravel]
announcement_banner:
announcement_link:
---

Here a few tips to test an API with **Laravel**

## Tip # 1: Get validation errors as JSON format
For **Laravel** TestCase 

Instead of regular request methods like this

```php
$this->get('/api/any');
$this->post('/api/any', ['key' => 'value']);
$this->put('/api/any/{id}', ['key' => 'value']);
```

You can use `json()` method

```php
$this->json('get', '/api/any');
$this->json('post', '/api/any', ['key' => 'value']);
$this->json('put', '/api/any/{id}', ['key' => 'value']);
```

Or even better replace it with

```php 
$this->getJson('/api/any');
$this->postJson('/api/any', ['key' => 'value']);
$this->putJson('/api/any/{id}', ['key' => 'value']);
```
`json()` and `getJson()`, `postJson()` etc ... adds `JSON` `headers` 
to instruct **Laravel** to return errors in `JSON` format

## Tip # 2: Create a Request/FormRequest classes on runtime

This is particularly helpful if you are using `dependency injection`

To create a `request` class and add `inputs/params`

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

## Tip # 3: Debug a JSON response content easy

Instead of `die & dump` a `json decoded` response manually

```php
$response = $this->getJson('/api/anyendpoint');

dd(
    json_decode($response->getContent())
);
```

There are dedicated method in order to get the response

```php
$response->dump();

$response->dd();
```

## Tip # 4: Count items from a JSON response:

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

Probably you would like to `assert` the total of items inside the `data`

Test an `Eloquent` `Collection`:

```php
$response->assertJsonCount(5);
```

Test a `JsonResource` `Collection`:

```php
$response->assertJsonCount(5, 'data');
```

Why add `data`? because the resources return all `data` formatted as you wish in a wrapper


## Tip # 5: Assert Json Response

#### Assert List of Resources

Asserting Json against `Collections`

**Response**

```json
{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "status": "active"
    },
    {
      "id": 2,
      "name": "Anne Doe",
      "status": "pending"
    }
  ]
}
```

**Assertion**
```php 
$response
    ->assertJson(fn (AssertableJson $json) =>
        $json->has('users', 2, fn (AssertableJson $json) =>
                $json->where('id', 1)
                     ->where('name', 'John Doe')
                     ->missing('password')
                     ->etc()
        )
    );
```

`has` method allow to test the total of items inside the response

`first()` method enables to assert the `first` element from the `collection`

#### Assert Single Resource

To `assert` partially response values we have `assertJsonFragment`

```php 
$response = $this->json('GET', '/api/user/1');

$response
    ->assertStatus(200)
    ->assertJsonFragment([
        'name' => 'Bill Murray',
    ]);
```

It supports multiple array items

It can be asserted using `Fluent Json` too

```php 
$response = $this->getJson('/api/users/1');
 
$response
    ->assertJson(fn (AssertableJson $json) =>
        $json->where('id', 1)
             ->where('name', 'Bill Murray')
             ->whereNot('status', 'pending')
             ->missing('password')
             ->etc()
    );
```

`etc()` method is required to only check few props instead of all

[More about testing json apis in the Laravel docs](https://laravel.com/docs/10.x/http-tests#testing-json-apis){:target="_blank"}

## Tip # 6: Consume API endpoints with data wrapper

The rest standard requires to get data as:

```javascript
fetch.get('/endpoint')
    .then(response => {
        const data = response.data
    })
```

Laravel `JsonResource` return response in a `data` wrapper so the response should be handled in this way

```javascript
fetch.get('/endpoint')
    .then(response => {
        const data = response.data.data
    })
```

Laravel provides a method to remove `data` wrapper using `withoutWrapping`,  

```php
return new UserResource(User::first())->withoutWrapping();
```

Or by setting a property `public static $wrap = null;` inside the current `JsonResource`

To remove the wrapper to all the resources you can override the default behavior in `AppServiceProvider`

```php 
use Illuminate\Http\Resources\Json\Resource;

public function boot()
{
    Resource::withoutWrapping();
}
```

Thanks for reading!