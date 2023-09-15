---
id: 21
title: Dataproviders In Laravel Tests
---

Here an example with login.

A login should test:
- email and password are not empty
- email has a valid format
- password has at least 8 characters length

All this tests are expecting a validation message for any of this cases, basically it is the same process with different data, this is a great scenario for PHPUnit Dataproviders.

## Install some authentication scaffold (optionally)

```
composer require laravel/breeze --dev
```

## Install breeze

```
php artisan breeze:install
npm install
npm run dev
php artisan migrate
```

## Make a tests for login to validates the request.


```
php artisan make:test LoginValidationTest
```

Here the basic test:

```php
/**
 * @test
 * @dataProvider invalidUsersData
 */
public function it_tests_a_login_form_validation($invalidData, $invalidFields): void
{
    $response = $this->post('/login', $invalidData);
    $response->assertSessionHasErrors($invalidFields);
    $this->assertDatabaseCount('users', 0);
}

public function invalidUsersData(): array  
{
    return [
        [
            ['email' => '', 'password' => ''],
            ['email', 'password']
        ],
        [
            ['email' => 'somethingNotValid', 'password' => 'password'],
            ['email']
        ],
        [
            ['email' => 'somethingNotValid', 'password' => 123],
            ['password']
        ],
    ];
}
```

## Explanation

First the annotation for data provider is necessary, then we see that the dataProvider function returns a multidimensional array, to explain this behavior:

PHPUnit dataProviders returns a value on every iteration, the first iteration of the data provider it would set:

```php
$invalidData = ['email' => '', 'password' => ''];
$invalidFields = ['email', 'password']
```

So every subarray would return values, in this case two values to make tests on every iteration.

So the first iteration would be equals to:

```php
public function it_tests_a_login_form_validation(): void
{
    $response = $this->post('/login', [
        'email' => '', 
        'password' => ''
    ]);

    $response->assertSessionHasErrors(['email', 'password']);
    $this->assertDatabaseCount('users', 0);
}
```

So you can create any amount of cases and the method would be executed the amount of times as subarrays are present on the dataProvider function returns.

