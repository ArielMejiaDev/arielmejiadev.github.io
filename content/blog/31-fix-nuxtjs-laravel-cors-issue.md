---
id: 31
published: true
title: Fix NuxtJS Laravel CORS Issue
date: September 10th, 2023
description: Resolve local CORS issues during development between a localhost API and NuxtJS app
cover_image:
tags: [Laravel, Vue]
announcement_banner:
announcement_link:
---

## Access apps from the browser

For a local environment on the backend side using `Herd/Valet` **Laravel** provides two ways to visit your application in the browser

- Running `php artisan serve`: `http://127.0.0.1:80`
- Using **Vite** `npm run dev` to: `http://backend-app.test`

Both ways are valid, on the frontend side **NuxtJS** provides an easy way to access your project

`npm run dev`: `http://127.0.0.1:8000`

## Set both projects
In order to test that both technologies work together 
just add a backend `route` in **Laravel** app and check the response in **NuxtJS**

```php
// api.php file

Route::get('hello-world', fn () => 'Hello World');
```

In **NuxtJS** we can make a request and get the response in any component

```html
<script setup>
// replace the endpoint with your laravel api url
    
const { data, pending, error } = await useFetch('http://backend-app.test/hello-world');
</script>

<template>
<h1>{{ data }}</h1>
</template>
```

If you open the console you are going to be able to see an issue related to **CORS**

## Solving CORS problem

Go to `nuxt.config.ts` file in the root directory and add a `routeRule` object

```typescript
export default defineNuxtConfig({
  devtools: { enabled: true },
  // ...
  routeRules: {
    '/api/**': { proxy: { to: "http://backend-app.test/**" } }
  }
})
```

Now just rebuild the frontend by re-running: `npm run dev` and it now should show the request response without issues

## Take in mind:

- You do not need to do this for external API services
- You can add a prefix to your backend route like: `http://backend-app.test/api/**` to allow wildcard only for api routes
- If you are using a `JsonResource` wrapper as a response in **Laravel** usually the response would be available when fetching the data as: `data.data` in the **Nuxt** side

Thanks for reading!