---
id: 5
title: Create a press "enter" Event on VueJS
published: true
description: Catch when user press enter with VueJS modifiers
tags: VueJS
cover_image: https://dev-to-uploads.s3.amazonaws.com/i/k98qpqsfyghh2k8kj2b1.png
---

## Modifiers

In VueJS we have "v-on" or "@" directives to get an event and display something:

```js
<input v-model="message">
<button type="submit" @click="showMessage">click me</button>
<script>
...
data: () => ({
    message: '',
}),
methods: {
    showMessage() {
        return console.log(this.message)
    }
}
</script>
```

In this case the directive throws the method "showMessage", then it displays a console with the message.


But if I need to set an event to execute the "showMessage" method by press enter on input?

Well there is another modifier for this behavior:

```js
<input v-model="message" @keyup.enter="showMessage">
<button type="submit" @click="showMessage">click me</button>
<script>
...
data: () => ({
    message: '',
}),
methods: {
    showMessage() {
        return console.log(this.message)
    }
}
</script>
```

By simple adding a directive "keyup" and adding the modifier ".enter" then it would catch the event and execute the method "showMessage", well this would be ok in many scenarios a most easy way to handle this situation is with a regular form tag:

```js
<form @submit.prevent="showMessage">
    <input>
    <button type="submit">click me</button>
</form>
<script>
...
data: () => ({
    message: '',
}),
methods: {
    showMessage() {
        return console.log(this.message)
    }
}
</script>
```

In this case we are still using a modifier but this time it is used in the form tag by adding "@submit" directive and the modifier ".prevent", this would make a prevent default on submit to avoid refreshing the page and then execute the "showMessage" method.

In this post I show a little example of the VueJS modifiers but there are a lot more, just search in the docs, thanks for reading.