---
id: 7
title: null coalescing operator in Javascript and PHP
published: true
description: null coalescing operator provides an easy way to handle errors when a variable is null adding a default value.
tags: Javascript, PHP, Vue, Laravel
cover_image: https://dev-to-uploads.s3.amazonaws.com/i/soado5pa6t0t7adrfhd3.png
---

Working with components sometimes we need a default behavior or appearance but maybe in a few situations we need to override this default behavior, another common scenario is that we could not know if some variable is getting a value or it is just null.

## Here some examples:

- In a Laravel component:

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

Well this would work ok, but what if I need different styles? I need to create multiple componentes with different alert colors, well certainly you can but maybe it violates the DRY principle...

So what can I do?

You can use the merge attributes to add more styles but what if you want to change a nested elements like in this case the "p" tag or use a "fallback style" but you want to override it:

There you can use this null coalescing operator:

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

Now the component will work with 'bg-indigo-200' class as default if the component does not pass the "classlist" property, but if you pass the prop you can override the default styles of the alert component.


## The same for Javascript:

The null coalescing operator is "||" so you can create components with some default style and it would be override with a prop just like the example above:

By this example I will show a Vue component:

```vue
// App.vue
<navbar />
```

Navbar.vue

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

Well in this case the scenario its pretty similar, I want a default style but I want to override this style in some cases when its needed, here is another good opportunity of null coalescing operator to shine:

## Refactoring...

```vue
// App.vue
<navbar :class-list="'bg-blue-600'" />
```

Navbar.vue

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

Well there are some advantage of this approach:

- Promote DRY principle.
- You can pass any prop even to nested elements in you component, but you can still use just one component.
- Is useful in other more business logic scenarios, I just use this components example to make a more visual Illustration of this.


Thanks for reading!