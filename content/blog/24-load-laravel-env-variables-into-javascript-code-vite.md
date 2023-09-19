---
id: 24
title: Load Laravel ENV Variables Into Javascript With Vite
---

Lets imagine that we need to handle an api public key, Laravel by default ships with an env file to set this types of properties, there are times where these values should be access from the backend and from the frontend site.

Of course with InertiaJS we can set a value with key and value in the `HandleInertiaRequest` middleware, but it would be much cleaner to directly call these values from the ENV file through the code.

Lets set an api public key as an example:

```dotenv
VITE_API_PUBLIC_KEY=123
```

Then in your Javascript component or any frontend file you can get the value as:

```javascript
console.log(import.meta.env.VITE_API_PUBLIC_KEY)
```

Hope it helps, Happy Coding!