---
id: 20
published: true
title: Form Requests - Prepare for Validation
date: June 9st, 2021
description: Add new values to a form request before validation in Laravel
cover_image:
tags: [Laravel]
---

# Form Requests - Prepare for Validation

Sometimes is necessary to `compute/get` a value based on a `request` and then apply form request validation on it

Let's imagine that is required to validate if a `user->account->hasPaidPlanAccount()`, but the route only has the `/{user}` param

### Create a custom rule to validate the account

```php
php artisan make:rule AccountHasAPaidPlanRule
```

### AccountHasAPaidPlanRule

In our custom rule we can fetch our `Account` model based on `account_id` value from a `request`, 
an input that is not present in the `request`

```php
public function passes($attribute, $account_id)
{
    /** @var Account */
    $account = Account::findOrFail($account_id);
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

### Using PrepareForValidation

```php
// add the account_id as a request input
public function prepareForValidation()
{
    $this->merge([
        'account_id' => $this->route('user')->account_id,
    ]);
}

public function rules()
{
    return [
        'account_id' => [new AccountHasAPaidPlanRule]
    ];        
}
```

Our custom rule does not depend on `request` `account_id` presence, so it can be used when `request` has it or not without issues.


Thanks for reading!


