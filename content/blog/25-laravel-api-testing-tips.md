---
id: 25
title: Laravel API Testing Tips
---

# Laravel API Testing Tips

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

Thanks for reading, you are welcome to add comments to add more test tips!