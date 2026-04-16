---
title: "Level up: 10 Tips for Writing Better Code"
publishDate: 2023-07-03
tags: ["development"]
---

You've probably heard about clean code - whether you're an experienced developer or a total newbie. But what the heck is clean code, and why should you even care? If you ask Google or ChatGPT, you might get several definitions, but in a nutshell, clean code is the kind of code that's **easy to read, easy to understand, and easy to maintain**. It makes debugging, changing, or extending the code in the future easier. So, by writing clean code, you're doing a huge favor not only to your coworkers but also to your future self. I'd like to share 10 tips that, in my opinion, are a good starting point if you're beginning your journey to writing better code. 👩‍💻

1. [Naming variables and functions](#1-naming-variables-and-functions)
2. [Avoid using magic values](#2-avoid-using-magic-values)
3. [Guard statements](#3-guard-statements)
4. [Ternary & nullish coalescing operators](#4-ternary--nullish-coalescing-operators)
5. [Optional chaining](#5-optional-chaining)
6. [Default parameters](#6-default-parameters)
7. [Single responsibility functions](#7-single-responsibility-functions)
8. [DRY - Don’t Repeat Yourself](#8-dry---dont-repeat-yourself)
9. [Object destructuring](#9-object-destructuring)
10. [Minimize unnecessary comments](#10-minimize-unnecessary-comments)

💡 The code snippets are written in JavaScript. Almost all of the principles are applicable for other programming languages as well.

## #1 Naming variables and functions

When it comes to naming variables and functions, it's important to choose names that are descriptive. Even though the computer doesn't care about the names you use, opting for **descriptive names** makes your code easier to understand. Sure, using a single character as a variable name might save you a few seconds of typing, but it'll make your code really hard to read.

You can declare your variables like this:

```js
let a = "Mario";
let b = 5;
const c = 50;
```

However, when you later need to change the values stored in those variables, you'll have no clue what should be stored there. So, it's better to use more meaningful names like `name` and `level` because they clearly indicate what values they hold.

In addition, when dealing with constants, it's useful to use uppercase names. This convention makes it evident that the value is a constant. I also strongly recommend using underscores as separators to enhance readability. In our example, `MAX_LEVEL` is much easier to read than `MAXLEVEL`.

```js
let name = "Mario";
let level = 5;
const MAX_LEVEL = 50;
```

The same logic applies to naming functions. Imagine a function that looks like this:

```js
function x(a, b) {
  return a + b;
}
```

Later in your code, if you see this function being called as `x(13, 21)`, it's not clear what it does, and you'll have to check its implementation. It would be much better if you can call the function like this: `sum(13, 21)`. This way, it's obvious what the function does. Here's an example of how the implementation might look:

```js
function sum(number1, number2) {
  return number1 + number2;
}
```

## #2 Avoid using magic values

Whenever you are having a constant in your code, create a variable with a descriptive name and do not just use it as a magic value.

Imagine following code.

```js
if (level < 50) {
  // do something
}
```

Well what is so special about number 50? Why not 49 or 51? Let’s now create a variable and make the code easier to understand.

```js
const MAX_LEVEL = 50;

if (level < MAX_LEVEL) {
  // do someting
}
```

## #3 Guard statements

You don't want to have excessive nesting of if statements in your code. Too much indentation makes the code hard to read. Guards are a simple pattern that allows you to exit the code execution early, with the main logic not being nested in the else statement.

Let’s have a look at the following example:

```js
function onUploadFile(event) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    if (!isFileSupported(file)) {
      throw new Error("Wrong file format.");
    } else {
      // main logic
    }
  }
}
```

As you can see, there is excessive nesting, requiring considerable effort to understand what is happening. Let's rewrite the same code, but this time we will utilize guard statements.

```js
function onUploadFile(event) {
  if (!event.target.files.length) {
    throw new Error("No file was selected.");
  }
  const file = event.target.files[0];
  if (!isFileSupported(file)) {
    throw new Error("Wrong file format.");
  }
  // main logic
}
```

Now the code is more linear, with reduced nesting, making it easier to read. Just by looking at the code, you immediately know the cases where the function will throw an error due to invalid input parameters.

## #4 Ternary & nullish coalescing operators

Another way to avoid nesting in your code is by using [ternary operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator), which provide a shorthand for writing simple if/else statements. Consider the following scenario:

```js
function greetUser(user) {
  if (user.name) {
    return `Hello, ${name}`;
  } else {
    return "Hello, stranger";
  }
}
```

The first improvement is that we can omit the `else` statement if we are using `return` in the `if` clause.

```js
function greetUser(user) {
  if (user.name) {
    return `Hello, ${name}`;
  }
  return "Hello, stranger";
}
```

However, we can further improve the code by utilizing the ternary operator, which allows us to express the logic in just one line of code.

```js
function greetUser(user) {
  return user.name ? `Hello, ${name}` : "Hello, stranger";
}
```

Sometimes, you may need to conditionally assign a value to a variable. This can also be achieved using the ternary operator:

```js
const GREETING = user.name ? `Hello, ${name}` : "Hello, stranger";
```

Now let's assume you only want to store the value of the user name and assign a fallback in case the user name is `undefined` or has `null` value. In such situations, you can use the [nullish coalescing operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing) to simplify your code even further.

```js
const DISPLAY_NAME = user.name ?? "stranger";
```

## #5 Optional chaining

[Optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining) is especially useful when working with nested objects or accessing properties that may or may not exist. It simplifies your code and makes it more readable by avoiding excessive null checks.

You have probably come across a condition written like this:

```js
if (user && user.preferences && user.preferences.theme === "dark") {
  // do something
}
```

This condition is a result of having optional keys in the schema. However, with optional chaining, you can express this condition in a cleaner manner:

```js
if (user?.preferences?.theme === "dark") {
  // do something
}
```

Furthermore, there are use cases where you might combine optional chaining with the nullish coalescing operator:

```js
const THEME = user?.preferences?.theme ?? "dark";
```

## #6 Default parameters

In some cases, you may have a function with one or more optional parameters, and it becomes necessary to specify a fallback value. Let's begin by writing the code like this:

```js
function splitText(text, separator) {
  const SEPARATOR = separator ?? ";";
  return text.trim().split(SEPARATOR);
}
```

Instead of declaring the fallback separator within the function, we can utilize [default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters) to initialize the value of the separator in case the function is called without passing this parameter or if the value is `undefined`.

```js
function splitText(text, separator = ";") {
  return text.trim().split(separator);
}
```

By doing this, your IDE will also display the function signature, making it clear which parameter is optional and what the default value is.

## #7 Single responsibility functions

Each function in the code should do just one thing and do it right. If you are using descriptive names for your functions, it should help you with this principle as well. If you are struggling to find a name that accurately describes the behavior of a function, it is a sign that the function might be performing multiple tasks. Therefore, it's a good idea to break down such function into smaller, more focused functions. This approach brings several advantages: it helps with code reusability and simplifies the testing process.

Let's imagine the following code snippet.

```js
async function createComment(request, comment) {
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie"),
  );
  const userId = session.get("userId");
  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }

  if (!comment.length) {
    return new Response("Comment can't be empty", { status: 400 });
  }

  return prisma.prescriptions.create({
    data: {
      userId,
      comment,
    },
  });
}
```

As you can see this function gets `userId` from a session, validates the input and then saves data to database. This clearly breaks the single responsibility principle. So let’s improve it by breaking it down into multiple functions.

```js
async function getUserIdFromSession(request) {
  const session = await sessionStorage.getSession(
    request.headers.get("Cookie"),
  );
  const userId = session.get("userId");
  if (!userId) {
    throw new Error("Unauthorized", { status: 401 });
  }
  return userId;
}

export function validateComment(comment) {
  if (!comment.length) {
    throw new Error("Comment can't be empty", { status: 400 });
  }
}

async function createComment(request, comment) {
  try {
    const userId = await getUserIdFromSession(request);
    validateComment(comment);
    return prisma.prescriptions.create({
      data: {
        userId,
        comment,
      },
    });
  } catch (error) {
    return new Response(error.message, error.status);
  }
}
```

Now we have 3 functions. You probably see that the function to get the `userId` might be helpful somewhere else in the code as well. Also the `validateComment` function might be used for example if we add the edit feature as well. By splitting the code we got smaller pieces that we can reuse elsewhere, which brings me to another principle - DRY.

## #8 DRY - Don’t Repeat Yourself

Avoid duplicating code segments. If you encounter a situation where you need to reuse the same logic that already exists elsewhere in the code, extract that logic into a separate function and reuse it. This might require some refactoring to make it more generic, but it is worth the effort. By doing so, if you need to modify the behavior later on, you will only have to make changes in one place instead of multiple places. By following the DRY principle, you are writing code that is easier to maintain in the long run.

## #9 Object destructuring

[This JavaScript syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) allows you to extract values from an object and assign them to variables. You can also rename the variables or provide fallback values if needed.

Imagine you have an `user` object. By using distinct variables, you can avoid the need to prefix `user`. every time you access a property.

Let's examine the following code snippet:

```js
let { id: userId, name, verified = false } = user;
```

In this case, we are creating 3 variables:

- `userId` will be assigned the value of `user.id`
- `name` will be assigned the value of `user.name`
- `verified` will be assigned the value of `user.verified`, and if it is not specified, the value will default to `false`

This is very powerful syntax as it enables you to write clean and concise code.

## #10 Minimize unnecessary comments

Cut down on unnecessary comments - the code itself should ideally be self-explanatory, reducing the need for comments that just describe what the code does.

Comments should primarily explain why the code is written in a particular way. This can include cases where a workaround is implemented due to an ongoing issue with a dependency. By focusing on the reasoning behind the code, comments become more valuable and meaningful.

Another scenario where comments are typically used is when indicating what needs to be done in the future. To differentiate these types of comments, it is common practice to use prefix `TODO:` at the beginning of the comment. Your IDE most likely has extensions that can list all those comments which might be very helpful.
