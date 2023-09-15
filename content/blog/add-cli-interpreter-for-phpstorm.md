---
id: 16
title: Add cli interpreter for PHPStorm
---

If you are working with Valet maybe you have multiple projects, running multiple php versions.

If you are using PHPStorm too maybe you want to take advantage of the running tests feature, but you need to configure a PHPCLI interpreter and every version has its own executable path.

## Find Laravel Valet PHP executable path

You are going to be able to see all the php versions that you have been available using Valet by running this command in the terminal:

```
ls /opt/homebrew/Cellar
```

Here you would find different directories for different PHP versions, in this example I am using `php 8.0.18`, so I can see the executable files here:

```
ls /opt/homebrew/Cellar/php@8.0/8.0.18/bin/php
```

exactly this is the path to set this PHP cli interpreter to your project in PHPStorm.

You can replace the values as your needs:

```
ls /opt/homebrew/Cellar/php@<PHP_VERSION>/<PHP_VERSION>/bin/php
```

You can dive into the Cellar directory to check the different versions and get a list of accurated with the php files that you need for your current version.

Now you can run the tests and it should work.