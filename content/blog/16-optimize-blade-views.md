---
id: 16
published: false
title: Optimize Blade Views
date: March 22nd, 2021
description: Get faster views that would be great ranked for tools like google Lighthouse
cover_image:
tags: [Laravel]
announcement_banner:
announcement_link:
---

## The challenge

I want a great performance, 
hopefully all lighthouse stats on green

## The tips

- Open **lighthouse** on *incognito* mode, this is because **chrome extensions** could impact in the review.
- If you are using **Tailwindcss** purge your **CSS**
- Many browsers actually support the loading="lazy" attribute so use it on your images that are not loaded on the visual ratio when your site loads.
- Minify your Javascript in my case I only have one file, but if you have more files laravel mix can attach them and minify them on production.
- Protect your links with target blank using rel="noopener noreferrer" attribute, it prevents an attack called tabnapping.
- Optimize the images by reducing the size and weight of images, you can use something like: https://tinypng.com
- Take care about accesibility, there are some text color that simply does not contrast enough take that in mind, lighthouse offers some tips on that cases just follow them.
- Use SSL certificate on your site, lighthouse take that in mind and your users a site without SSL cert looks like an unsafe site.
- Use SVGs when you can, they are optimized for the web, or even better when you can use web.p format.
- Take care about responsiveness of your site, it would not be a stat but definitely more people would visit your site first on mobile than desktop, so take that in mind.
- Add SEO, with Laravel you can use SEOTOOLS package that is great and easy to use: https://github.com/artesaos/seotools
- Add a sitemap.xml file to instruct the google crawler about your site pages, with again with Laravel it is easy using a SPATIE package: https://github.com/spatie/laravel-sitemap
- If your site would add a newsletter you can use this useful package, from... you guess SPATIE: https://github.com/spatie/laravel-newsletter


- Load Javascript only when is required, I only use alpineJS on contact form page so adding js scripts conditionally could help to load faster your site, here an example:

```html
@if(Route::is('contact'))
    <script src="public/js/app.js"></script>
@endif
```

- Add an alternative text to every image, even if its just an asset:

```html
<img src="me.png" alt="picture of me" />

// on svgs you can use the title tag

<svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24" aria-labelledby="twitter_logo">
    <title id="twitter_logo">Twitter logo</title>
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
</svg>
```

- Optimize your Laravel application when you are going to make a deployment,

### Locally before pushing code

```html
npm run prod
```

### On Server

clear and cache again the config files, routes & views

```shell
// clear cache
php artisan config:clear
php artisan route:clear
php artisan view:clear
// cache files
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan optimize
```

- Add cache on your server, if you are going to use NGINX you can set easily some configuration to cache assets like images or pdf files from one request to other by an amount of time that you can customize, here the configuration that I use on my site to compress config & cache assets:

``` text
# gzip compression settings
gzip on;
gzip_comp_level 5;
gzip_min_length 256;
gzip_proxied any;
gzip_vary on;

# browser cache static assets control
location ~* \.(ico|css|js|gif|jpeg|jpg|png|woff|ttf|otf|svg|woff2|eot)$ {
     expires 1d;
     access_log off;
     add_header Pragma public;
     add_header Cache-Control "public, max-age=86400";
}

# browser caching of pdfs
location ~*  \.(pdf)$ {
    expires 365d;
}
```

You can handle all files in just one location block, but in my case as the PDF file in my site would not change as much, I separate it into another location block.

Thanks for reading!