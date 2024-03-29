---
id: 19
published: true
title: Run Tests Automatically Before Pushing Code In Laravel
date: June 3rd, 2021
description: Do not push code with failing tests, set Husky to execute test before pushing your code
tags: [Laravel, DevOps]
announcement_banner:
announcement_link:
---

## Install Husky

`Husky` is an excellent tool to automate `hooks`, in this post we are running `phpunit` tests before pushing code

```shell
npm install husky@4 --save-dev
```

## Run all laravel tests after pushing code:

On `package.json` file add this code

```javascript
    "husky": {
        "hooks": {
            "pre-push": "php artisan test"
        }
    },
```

## Go further

`Husky` also allows to add `hooks` before adding a `commit`

## Add pre commit hooks

If you want to learn how to install and configure `PHPInsights` or 
any other package for `static analyze` the links are at the end of the post

You can run any package or custom command, in this case I will add a artisan command from `PHPInsights`.

```javascript
    "husky": {
        "hooks": {
            "pre-commit": "php artisan insights -v",
            "pre-push": "php artisan test"
        }
    },
```

## Adding more than one `pre-commit` hook

You can configure `Husky` to add more than one command on any `hook` by adding `&&` between every command

In this case it would be configured to run `PHPInsights` and `PHPCSFixer`, but you can run any package or custom command

```javascript
    "husky": {
        "hooks": {
            "pre-commit": "php artisan insights -v && vendor/bin/php-cs-fixer fix",
            "pre-push": "php artisan test"
        }
    },
```

Thanks for reading!