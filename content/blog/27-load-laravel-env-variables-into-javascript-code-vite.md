---
id: 27
published: true
title: Load Laravel ENV Variables Into Javascript Files With Vite
date: December 11th, 2022
description: Use Laravel ENV variables inside your Javascript Files
cover_image:
tags: [Laravel]
---

# Load Laravel ENV Variables Into Javascript Files With Vite

Let's imagine that our `.env` file has this value

```shell
VITE_API_PUBLIC_KEY=123
```

Then in your Javascript component or any frontend file you can get the value as

```javascript
console.log(import.meta.env.VITE_API_PUBLIC_KEY)
```

Thanks for reading!