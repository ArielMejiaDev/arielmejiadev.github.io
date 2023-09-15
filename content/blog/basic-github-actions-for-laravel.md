---
id: 16
title: Basic Github Actions for Laravel
---

The publish github actions works properly for default Laravel apps, just choose what makes sense for your own project.

This action files require a `.env.ci` that is just a copy from `.env.example`, feel free to adjust this file for your project requirements.

### Just run PHPUnit test:

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