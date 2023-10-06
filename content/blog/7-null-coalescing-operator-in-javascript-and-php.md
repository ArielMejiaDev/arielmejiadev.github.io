---
id: 7
published: true
title: Null Coalescing Operator In Javascript and PHP
date: July 9th, 2020
description: Avoid Exception - Trying to get "x" property from null in Javascript and PHP
tags: [Laravel, Javascript]
cover_image: https://dev-to-uploads.s3.amazonaws.com/i/soado5pa6t0t7adrfhd3.png
---

# Null Coalescing Operator In Javascript & PHP

Sometimes there is no way to know if a variable has a value, or it is just null, 
to avoid `getting x property from null` exceptions.

Javascript & PHP have a `null coalescing operator`, through these examples 
you are going to be able to see how this operator gives you a default value if a variable is `null`.

## PHP Example using Laravel Blade Component:

```php
// welcome.blade.php
<x-alert :message="'Here a message...'" /> 
```

```php
// components/alert.blade.php
<div class="bg-indigo-200 p-4 w-full rounded shadow-xl">
<p class="text-gray-100">{{ $message }}</p>
</div>
```

Well this would work, but what if I need different styles? I need to create multiple components with different alert colors, 
well certainly you can, but maybe it violates the DRY principle...

**So what can I do?**

I want a default style, but I want to override this style in some cases when it's needed.

There you can use this `null coalescing operator` in php the syntax is: `??`

```php
// welcome.blade.php
<x-alert :classlist="'bg-red-200'" :message="'Here a message...'" /> 
```

```php
// components/alert.blade.php
<div class="{{ $classlist ?? 'bg-indigo-200'  }} p-4 w-full rounded shadow-xl">
<p class="text-gray-100">{{ $message }}</p>
</div>
```

Now the component will have `bg-indigo-200` class as default if the component does not have the 
`classlist` property, but if it has the prop it would override the default styles of the alert component.


## The same for Javascript:

The `null coalescing operator` is `||` so you can create components with some default style, 
and it would be overridden with a prop just like the example above:

By this example I will show a `Vue` component:

```vue
<template>
 <div class="bg-indigo-600">
  some code...
 </div>
</template>

<script>
export default {
    name: 'Navbar',
    props: {
      bgColor: null
    }
}
</script>
```

Well in this case the scenario It's pretty similar, I want a default style, but I want to override this style 
in some cases when it's needed, here is another good opportunity of `null coalescing operator` to shine:

```vue
<template>
 <div :class="classList || 'bg-indigo-600'">
  some code...
 </div>
</template>

<script>
export default {
    name: 'Navbar',
    props: {
      classList: null
    }
}
</script>
```

**Take in mind**

Advantage of this approach:

- Promote DRY principle.
- You can pass any prop even to nested elements in you component, but you can still use just one component.
- Is useful in other more business logic scenarios, I just use this components example to make a more visual Illustration of this.


Thanks for reading!