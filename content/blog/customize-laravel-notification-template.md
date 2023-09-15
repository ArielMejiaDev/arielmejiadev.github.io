---
id: 10
title: Customize the Laravel notifications template.
published: true
description: How to customize the layout and CSS of Laravel notifications template.
tags: Laravel, Mails, Notifications
cover_image: https://dev-to-uploads.s3.amazonaws.com/i/j4fs0xukx32izpi6aafd.png
---

This is a little tip but very helpful to customize the notifications layout the Laravel docs explain this command:

```php
php artisan vendor:publish --tag=laravel-notifications
```

Now in "resources/views/vendor" you can edit the markdown template layout.


But what if I need to customize the colors and other CSS of the template, well Laravel provides a command to publish this assets:

```php
php artisan vendor:publish --tag=laravel-mail
```

Now in "resources/views/vendor/mail/html/themes/default.css"


Here we can customize the CSS to brand the notifications.

## Little tips:

- To customize the header link:

```css
.header a {
    color: #3d4852;
    font-size: 19px;
    font-weight: bold;
    text-decoration: none;
}
```

- To customize the button "primary":

```css
.button-primary {
    background-color: #2d3748;
    border-bottom: 8px solid #2d3748;
    border-left: 18px solid #2d3748;
    border-right: 18px solid #2d3748;
    border-top: 8px solid #2d3748;
}
```

Of course you can customize the error action and success action, just below.

Thanks for reading!