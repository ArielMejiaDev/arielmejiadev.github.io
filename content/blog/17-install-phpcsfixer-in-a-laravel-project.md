---
id: 17
published: true
title: Install PhpCsFixer in a Laravel Project
date: May 17th, 2021
description: Start using PHPCSFixer in your Laravel Projects and apply custom configurations
cover_image:
tags: [Laravel, DevOps]
---

# Install PhpCsFixer in Laravel

Code sniffer Fixer apply syntax rules to our `PHP` code to follow `PSR-standards`

## Install PHP-CS-FIXER

```shell
composer require friendsofphp/php-cs-fixer
```

**Create a config file**

```shell
touch php-cs-fixer.php
```

You can add your configuration rules

Here is a good example to use it in a laravel projects checking just a few rules

```php
<?php

$finder = PhpCsFixer\Finder::create()
    ->in(__DIR__)
    ->exclude(['bootstrap', 'storage', 'vendor','docker'])
    ->name('*.php')
    ->name('_ide_helper')
    ->notName('*.blade.php')
    ->ignoreDotFiles(true)
    ->ignoreVCS(true);

return (new PhpCsFixer\Config())->setRules([
        '@PSR2' => true,
        'array_syntax' => ['syntax' => 'short'],
        'ordered_imports' => ['sort_algorithm' => 'alpha'],
        'no_unused_imports' => true,
    ])
        ->setUsingCache(false)
        ->setLineEnding(PHP_EOL)
        ->setFinder($finder);
```

Another more advance example checking much more rules

```php
<?php

$finder = Symfony\Component\Finder\Finder::create()
    ->in([
        __DIR__ . '/tests',
    ])
    ->in(__DIR__)
    ->exclude(['bootstrap', 'storage', 'vendor','docker'])
    ->name('*.php')
    ->name('_ide_helper')
    ->notName('*.blade.php')
    ->ignoreDotFiles(true)
    ->ignoreVCS(true);

return (new PhpCsFixer\Config())
    ->setRules([
        '@PSR12' => true,
        'array_syntax' => ['syntax' => 'short'],
        'ordered_imports' => ['sort_algorithm' => 'alpha'],
        'no_unused_imports' => true,
        'not_operator_with_successor_space' => true,
        'trailing_comma_in_multiline' => true,
        'phpdoc_scalar' => true,
        'unary_operator_spaces' => true,
        'binary_operator_spaces' => true,
        'blank_line_before_statement' => [
            'statements' => ['break', 'continue', 'declare', 'return', 'throw', 'try'],
        ],
        'phpdoc_single_line_var_spacing' => true,
        'phpdoc_var_without_name' => true,
        'class_attributes_separation' => [
            'elements' => [
                'method' => 'one',
            ],
        ],
        'method_argument_space' => [
            'on_multiline' => 'ensure_fully_multiline',
            'keep_multiple_spaces_after_comma' => true,
        ],
        'single_trait_insert_per_statement' => true,
    ])
    ->setFinder($finder);
```

Feel free to use whatever configuration that makes sense for your project

## Execute the code sniffer fixer

On terminal run

```shell
vendor/bin/php-cs-fixer fix
```

Or using the configuration

```shell
vendor/bin/php-cs-fixer fix --config=php-cs-fixer.php
```

You can add more flags to customize the behavior of the fixer, like `allow-risky`, `dry-run` `verbose`

```shell
php ./vendor/friendsofphp/php-cs-fixer/php-cs-fixer fix --config php-cs-fixer.php --allow-risky=yes --dry-run --verbose
```

You can install `husky` with `npm` to fire this commands 
on `husky` `hooks` and execute any of these commands automatically, following this post [Install Husky Guide](/blog/22-run-tests-locally-before-pushing-code-in-laravel) 

Thanks for reading!