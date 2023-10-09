---
id: 28
published: true
title: Basic Github Actions for Laravel
date: April 5th, 2023
description: Start using Github Actions in your Laravel Projects with two basic workflows
cover_image:
tags: [Laravel, DevOps]
announcement_banner:
announcement_link:
---

This action files require a `.env.ci` file that is just a copy from `.env.example`, 
feel free to adjust this files for your project requirements

**Select the action that fits better for your project**
- [Run PHP UNIT Tests](#github-action-to-run-phpunit-test)
- [Run PHPUnit tests & NPM workflow](#github-action-to-run-phpunit-tests-npm-workflow)

### Github Action to run PHPUnit test

```yml
name: CI
on:
  pull_request:
    branches:
      - main
  push:
    branches:
      - main

jobs:
  tests:
    runs-on: ubuntu-latest
 
    services:
      mysql:
        image: mysql:8.0
        env:
          MYSQL_ALLOW_EMPTY_PASSWORD: yes
          MYSQL_DATABASE: test
        ports:
          - 3306:3306
        options: --health-cmd="mysqladmin ping" --health-interval=10s --health-timeout=5s --health-retries=3
 
    steps:
    - uses: actions/checkout@v2
      with:
        fetch-depth: 1
        
    - name: Cache composer dependencies
      uses: actions/cache@v2
      with:
        path: vendor
        key: composer-${{ hashFiles('**/composer.lock') }}
        restore-keys: |
          composer-
          
    - name: Install PHP
      uses: shivammathur/setup-php@v2
      with:
        php-version: 8.1
 
    - name: Install composer dependencies
      run: |
        composer install --no-scripts
 
    - name: Prepare Laravel Application
      run: |
        cp .env.ci .env
        php artisan key:generate
 
    - name: Run Test suite
      run: php artisan test
```


### Github Action to run PHPUnit tests & NPM workflow


```yml
name: CI
on:
  pull_request:
    branches:
      - main
  push:
    branches:
      - main

jobs:
  tests:
    runs-on: ubuntu-latest
 
    services:
      mysql:
        image: mysql:8.0
        env:
          MYSQL_ALLOW_EMPTY_PASSWORD: yes
          MYSQL_DATABASE: test
        ports:
          - 3306:3306
        options: --health-cmd="mysqladmin ping" --health-interval=10s --health-timeout=5s --health-retries=3
 
    steps:
    - uses: actions/checkout@v2
      with:
        fetch-depth: 1
        
    - name: Cache composer dependencies
      uses: actions/cache@v2
      with:
        path: vendor
        key: composer-${{ hashFiles('**/composer.lock') }}
        restore-keys: |
          composer-
          
    - name: Install PHP
      uses: shivammathur/setup-php@v2
      with:
        php-version: 8.1
 
    - name: Install composer dependencies
      run: |
        composer install --no-scripts
 
    - name: Prepare Laravel Application
      run: |
        cp .env.ci .env
        php artisan key:generate
 
    - name: Run Test suite
      run: php artisan test

    - name: Install NPM dependencies
      run: npm install
      
    - name: Compile assets
      run: npm run build
```

Thanks for reading!