---
id: 6
title: Slide effect on VueJS
published: true
description: use transitions to make a slide effect on VueJS
tags: VueJS
cover_image: https://dev-to-uploads.s3.amazonaws.com/i/xp9u58l68av6tq04j8si.png
---

## Classes

VueJS provide some classes by default to apply css styles on any of this classes, every class represents a phase to show the elements, think this classes as hooks for templates tags, this are:

- v-enter-active
- v-leave-active
- v-enter
- v-enter-to
- v-leave-to

Here a snippet that you can use on to make this common responsive menus from the right or left:

```vue
<transition name="show">
    <div>
        <p>Menu item</p>
        <p>Menu item</p>
    </div>
</transition>
```


Then on the styles tag of the component or a dedicated stylesheet, you can change the "v" prefix on vuejs transitions classes by the css class name:

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

You can apply any css transition like fadeIn effects, this is a very helpful feature of VueJS.

Thanks for reading.