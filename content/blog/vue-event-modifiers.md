---
id: 5
title: Vue Event Modifiers Example
published: true
description: Catch when user press enter with VueJS modifiers
tags: VueJS
cover_image: https://dev-to-uploads.s3.amazonaws.com/i/k98qpqsfyghh2k8kj2b1.png
---

# Vue Event Modifiers Example

## Modifiers

In VueJS we have `v-on` or `@` directives to get an event and display something:

```html
<script setup>
    const message = ref('');
    
    const showMessage = function () {
        console.log(message);
    }
</script>

<template>
    <input v-model="message">
    <button type="submit" @click="showMessage">click me</button>
</template>
```

In this case the directive `@click` fired the method `showMessage`

## How to fire a method with press-key event?

Well, there is another modifier for this behavior, lets supposed that we need to tight a press-enter event and fire `showMessage`:

```html
<script setup>
    const message = ref('');

    const showMessage = function () {
        console.log(message);
    }
</script>

<template>
    <input v-model="message" @keyup.enter="showMessage">
    <button type="submit" @click="showMessage">click me</button>
</template>
```

When user press enter and key up event is fired, it would catch the event and execute the method `showMessage`, 
well this would be ok in many scenarios like a search-box

## Handle events in regular forms

For regular forms the event submit and it's modifiers like `prevent` are pretty useful an Eg:

```html
<script setup>
    const message = ref('');

    const showMessage = function () {
    console.log(message);
}
</script>

<template>
    <form @submit.prevent="showMessage">
        <input v-model="message">
        <button type="submit">click me</button>
    </form>
</template>
```

I hope this little introduction to Vue event modifiers was useful, 
as always thanks for reading & Happy Coding!.