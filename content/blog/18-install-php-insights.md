---
id: 18
published: false
title: Install PHPInsights
date: May 26th, 2021
description: Start using PHPInsights in your Laravel App
tags: [Laravel, DevOps]
announcement_banner:
announcement_link:
---

## Why use PHPInsights?

PHP Insights is a great tool for static code analysis, it adds a review about your code on four different areas,

- the code
- the complexity of the project
- the architecture of the project
- and the code style

It works on any `php` project, but in a **Laravel** project there are some custom rules 
that would help to start to work with the project as soon as possible

## Installation Process

### Install the package

```shell
composer require nunomaduro/phpinsights --dev
```

### Publish config file

```shell
php artisan vendor:publish --provider="NunoMaduro\PhpInsights\Application\Adapters\Laravel\InsightsServiceProvider"
```

### Run the analysis

```shell
php artisan insights
```

---

## Using PHPInsights with a Laravel Project

By default, it will show some tips (first ones) to fix the code base, 
the package has four categories to review

### To check all tips at once 

```shell
php artisan insights -v
```

### Discard rules

In `config/insights.php` file you can instruct the package 
to avoid changing the framework & third party packages codebase

```php
'exclude' => [
        'app/Actions/Jetstream',
        'HandleInertiaRequests.php',
        '_ide_macros.php'
    ],

'add' => [
    Classes::class => [
        ForbiddenFinalClasses::class,
    ],
],

'remove' => [
    AlphabeticallySortedUsesSniff::class,
    DeclareStrictTypesSniff::class,
    DisallowMixedTypeHintSniff::class,
    ForbiddenDefineFunctions::class,
    ForbiddenNormalClasses::class,
    ForbiddenTraits::class,
    ParameterTypeHintSniff::class,
    PropertyTypeHintSniff::class,
    ReturnTypeHintSniff::class,
    UselessFunctionDocCommentSniff::class,
    UnusedParameterSniff::class,
    LineLengthSniff::class,
    DocCommentSpacingSniff::class,
    ClassInstantiationSniff::class,
    NewWithBracesFixer::class,
    NullableTypeForNullDefaultValueSniff::class,
    DisallowArrayTypeHintSyntaxSniff::class,
    NoEmptyCommentFixer::class,
    DisallowShortTernaryOperatorSniff::class,
    ForbiddenPublicPropertySniff::class,
    DisallowEmptySniff::class
],
```

Here you can see an example of some classes that you can, **exclude**, **add** or **remove** from the analysis

I exclude some files related to **Jetstream** and **Inertia** packages, 
but you can add/remove more vendors as your project needs, in most of the cases this is correct, 
because we only need to get a review about our project codebase performance

---

## Auto fix the issues

You can fix a specific file too, by executing

```shell
php artisan insights <file-path> --fix
```

Thanks for reading!