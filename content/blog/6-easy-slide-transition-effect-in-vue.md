---
id: 6
published: true
title: Slide effect on VueJS
date: June 20th, 2020
description: Use An Easy and Flexible Transition To Make A Slide Effect On Vue
cover_image: https://dev-to-uploads.s3.amazonaws.com/i/xp9u58l68av6tq04j8si.png
tags: Vue
---

# Easy Transition Slide Effect With VueJS

## Classes

`VueJS` provide some default classes to apply `css` styles on any of these transition phases, every `class` represents a phase to show the elements:

- `v-enter-active`
- `v-leave-active`
- `v-enter`
- `v-enter-to`
- `v-leave-to`

Here a little snippet that you can use on in order to make a slide from left or right 

(Feel free to use it):

```vue
<transition name="show">
    <div>
        <p>Menu item</p>
        <p>Menu item</p>
    </div>
</transition>
```


Then on the styles tag of the component or in a dedicated stylesheet, 
optionally you can change the `v` prefix on `vuejs` transitions classes by the `css` class name:

```vue
<style>
.show-enter-active,
.show-leave-enter {
    transform: translateX(0);
    transition: all .3s linear;
}
.show-enter,
.show-leave-to {
    transform: translateX(100%);
}
</style>
```

You can apply any `css` transition like `fadeIn` effects, this is a very helpful feature of `VueJS`

Thanks for reading!