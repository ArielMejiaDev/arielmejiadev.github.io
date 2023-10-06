---
id: 21
published: true
title: Data-providers In Laravel Tests
date: July 21st, 2021
description: Stay Dry in your PHPUnit tests using Data-Providers
cover_image:
tags: [Laravel]
---

# Data-Providers In Laravel Tests

`Data-providers` execute the same test multiple times with different data

For the sake of simplicity this post shows an example for a `login form test` using `Laravel/Breeze`

**Validation TestCases**
- email and password are not empty
- email has a valid format
- password has at least 8 characters length

These `tests` are expecting a validation message for all the cases, a great scenario for `PHPUnit` `Data-providers`.

## Make a tests to validate the login request


```shell
php artisan make:test LoginTest
```

Here the basic test

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
            ['email' => 'john@doe.com', 'password' => 123],
            ['password']
        ],
    ];
}
```

## Explanation

`Data-provider` `doc-block` targets to `invalidDataUsers` function that returns a multidimensional array

`PHPUnit` `data-providers` returns a value on every iteration, 
the iterations of the data provider would run **in memory** equals to

```php
public function it_tests_a_login_form_validation(): void
{
    // First Iteration empty values
    $response = $this->post('/login', [
        'email' => '', 
        'password' => ''
    ]);
    
    // First Iteration expected error keys for both fields (empty)
    $response->assertSessionHasErrors(['email', 'password']);
    
    // Second Iteration bad email format
    $response = $this->post('/login', [
        'email' => 'somethingNotValid', 
        'password' => 'password'
    ]);

    // Second Iteration expected email error key
    $response->assertSessionHasErrors(['email']);
    
    // Third Iteration bad password length
    $response = $this->post('/login', [
        'email' => 'john@doe.com', 
        'password' => 123
    ]);

    // Third Iteration expected password key
    $response->assertSessionHasErrors(['password']);
    
    $this->assertDatabaseCount('users', 0);
}
```

So you can create any amount of cases and the method would be executed the amount of times 
as array items are present on the `data-provider` function

Thanks for reading!