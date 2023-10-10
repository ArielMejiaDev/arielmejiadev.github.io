---
id: 29
published: true
title: Lint and Fix your Laravel Code with Duster and Husky
date: July 19th, 2023
description: Lint and Fix your Laravel Code with Duster and Husky
tags: [Laravel]
cover_image:
announcement_banner:
announcement_link:
---

As **Tighten** mentions on its blog 

> Duster is an opinionated linter and fixer for Laravel code, that takes the best of Laravel’s Pint, 
together with the power of PHP_CodeSniffer and PHP-CS-Fixer

Duster works on the command line, with **Husky** or use it's premade **GitHub Action** to run it in your **CI pipeline**

During installation & setup process I found a little issue related to **Husky** so here I share the solutions

## Install Duster

```shell
composer require tightenco/duster --dev
```

## Check that your project has git initialized

If not you can initialize it with 

```shell
git init
```

## Install Husky

```shell
npm i -D husky
```

## Install Lint-Staged

```shell
npm i -D lint-staged
```

## Initialize Husky 

```shell
npx husky-init
```

## Add Husky Pre-commit file

```shell
npx husky add ./.husky/pre-commit 'npx --no-install lint-staged'
```

## Remove `npm test` command from `pre-commit` file

```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
npx --no-install lint-staged

npm run test # this line should be removed
```

## Configure Lint Staged for `php` files in `package.json` file

```html
    ...
    "lint-staged": {
        "**/*.php*": [
            "vendor/bin/duster lint"
        ]
    }
    ...
```

Instead of just `lint` your codebase, you can use the Duster `fix` command in order to fix the code base automatically.

## Set Github Actions

Just execute

```shell
./vendor/bin/duster github-actions
```

It will publish a github action workflow for Duster, you can configure it and read more about Duster in [the docs](https://github.com/tighten/duster#duster)

Thanks for reading!