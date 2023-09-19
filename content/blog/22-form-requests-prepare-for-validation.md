---
id: 22
title: Form Requests - Prepare for Validation
---

Sometimes is necessary to validate a route param to execute an action, for example: "create or update a feature if user has a paid plan".

## Where I can validate this logic?

Well, if you have a form request as a place to validate input data, it also can be used to validate data from a route param.

## A Route to create a feature

### Create a resource controller for the feature

```php
php artisan make:controller CreateAFeatureController -r
```

```php
Route::post('/create-feature'{account}', [CreateAFeatureController::class, 'store']);
```

### Create a custom rule to validate the account

```php
php artisan make:rule AccountHasAPaidPlanRule
```

### AccountHasAPaidPlanRule

As the route and controller can use route model binding the container can solve the account model automatically, but if you do not want to use it you can use eloquent to get the account.

```php
public function passes($attribute, $value)
{
    /** @var Account */
    $account = Account::findOrFail($value);
    return $account->hasPaidPlan();
}

public function message()
{
   return 'The feature requires a paid plan.';
}
```

### Make a form request

```php
php artisan make:request FeatureRequest
```

### FeatureRequest

```php
// set the route param {account} into the request to add rules on 'rules' method
public function prepareForValidation()
{
    $this->merge([
        'account' => $this->route('account'),
    ]);
}

public function rules()
{
    return [
        'account' => [new AccountHasAPaidPlanRule]
    ];        
}
```

The `prepareForValidation` method is also very handy when you need to validate some keys on `create` method and replace, or add more keys on `update` method of a controller, for example.

### Store method in CreateAFeatureController

```php
public function store(FeatureRequest $request)
{
    Feature::create(['account_id' => $request->account->id])
}
```

You can freely use `$request->account` because, if the `account id` does not exists or the account does not has a paid plan it will throw a response with `status 422` and an error message.

Another advantage is that you can even reuse the same `formRequest` to update the feature in `update` method.

That is all folks! thanks for reading.


