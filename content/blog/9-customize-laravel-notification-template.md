---
id: 9
published: true
title: Customize The Laravel Notifications Template
date: September 4th, 2020
description: How to customize the layout and CSS of Laravel notifications template
cover_image: https://dev-to-uploads.s3.amazonaws.com/i/j4fs0xukx32izpi6aafd.png
tags: [Laravel]
announcement_banner:
announcement_link:
---

In order to customize `Laravel` notifications layout docs explain this command:

```php
php artisan vendor:publish --tag=laravel-notifications
```

In `resources/views/vendor` you can edit the markdown template layout.


## Customize Colors
 
`Laravel` provides a command to publish these assets:

```php
php artisan vendor:publish --tag=laravel-mail
```

In `resources/views/vendor/mail/html/themes/default.css`


We are able to customize the notifications `CSS` to matches your app brand and colors.

## Little tip

- To customize the header link:

```css
.header a {
    color: #3d4852;
    font-size: 19px;
    font-weight: bold;
    text-decoration: none;
}
```

- To customize the `primary` button

```css
.button-primary {
    background-color: #2d3748;
    border-bottom: 8px solid #2d3748;
    border-left: 18px solid #2d3748;
    border-right: 18px solid #2d3748;
    border-top: 8px solid #2d3748;
}
```

Of course, you are able to customize the error action and success action just below

Thanks for reading!