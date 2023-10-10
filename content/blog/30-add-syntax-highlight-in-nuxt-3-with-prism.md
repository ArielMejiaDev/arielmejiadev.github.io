---
id: 30
published: true
title: Add Syntax Highlight In Vue With Prism
date: August 25th, 2023
description: Highlight your code snippets in Nuxt3 using Prism and custom css themes
tags: [Vue]
announcement_banner:
announcement_link:
---

## Install Prism in your project

```shell
npm install prismjs;
```

In any **Vue** component import **Prism**, 
default CSS and execute a `highlightAll()` method on mounted hook

```html
<script setup>
import { onMounted } from 'vue';
import Prism from "prismjs";
import "prismjs/themes/prism.min.css";

onMounted(() => {
  Prism.highlightAll();
});
</script>

<template>
<pre><code class="lang-js"><span>const x</span> = <span>'hello world'</span>;</code></pre>
</template>
```

The code inside template tags is written manually using an online markdown to html converter, 
but probably the code would be generated from a Database, CMS, API, Markdown Files, etc 

## Customize Prism Theme

In this repo you can find multiple very well known code themes: [prism-themes](https://github.com/PrismJS/prism-themes){:target="_blank"}

Just go to `themes` folder and copy the content of the desired theme *(in my case dracula.css)*

Create a file in `assets/css/dracula.css`

Instead of importing the default **Prism** styles, import in your **Vue** component the custom theme **CSS**.

```js
import "assets/css/dracula.css";
```

## Import CSS Globally in Nuxt

**Take in mind:** If you are working with **Nuxt Content** it already uses **Shikiji**  by default

In `nuxt.config.ts` add the theme directly to avoid import it multiple times:

```js
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
      '~/assets/css/main.css',
      '~/assets/css/dracula.css'
  ],
```

Thanks for reading!