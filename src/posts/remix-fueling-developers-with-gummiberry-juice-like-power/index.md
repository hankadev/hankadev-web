---
title: "Remix: Fueling Developers with Gummiberry Juice-Like Power"
description: "Why Remix feels powerful in practice, from routing and data loading to error handling and full-stack workflows in one framework."
publishDate: 2023-05-25
tags: ["web-development", "remix"]
---

I have to admit, at first, I was quite skeptical when yet another framework was introduced, and I thought it was just another hype that would be over soon, and it didn't seem worth checking out. Oh God, how wrong I was! 😅 However, after several months, people were still excited about [Remix](https://remix.run/), and it became a huge thing within my social media bubble. So, I finally decided to give it a try, and... I was absolutely blown away and fell in love with it. Now, whenever I'm building a full-stack web application, I ask myself: Can I use Remix? Today, I'll share why I'm so enthusiastic about it and how writing a Remix app feels like having your skills boosted by gummiberry juice.

## If you know React and Node, it is easy to start

Remix is a full-stack framework that lets you write your front-end code in React and your back-end code in Node. What is really nice is that it offers routing for web applications out of the box. Since `react-router` is built by the Remix team, this is really good news for every React developer.

## File-base routing

In practice, all you need is a `routes` folder where you can add files that determine the URL. There is support for nested routes and dynamic routes as well. This approach is very easy to understand, as it abstracts a lot of complexity. When you look into an existing project, it is easy to find out which file is rendered at a particular URL. It definitely makes onboarding new developers faster and speeds up development in new projects.

## Fast data loading

The fact that Remix loads data in parallel makes you think that the data is loaded almost instantly. Remix is all about providing an amazing user experience, and this is one of the best things about it. Let's be honest, nobody likes looking at spinners while waiting for data to load.

## Error handling

Error handling is the part that I personally do not like implementing. Let's be honest - when you are under pressure, it can be easy to miss catching an error, and voila! - the application crashes. But with Remix, this process is insanely easy. It lets you catch errors at the root level and also overwrite the error component in any route. Additionally, in the case of nested routing, if only the lowest level has a problem, then only that part will be in an error state, while the rest of the application will show the data and components. Crazy, right?

## Full-stack components

In Remix, you can write full-stack components; meaning, that in one file you have your component together with the logic for retrieving and sending data to a server. Remix decides behind the scenes, which parts will be executed on the server and which parts will be sent to the browser. Personally, I find this approach super clear, especially when debugging the code, as all the logic is contained within one file.

Of course, if the server-side logic is more complicated, it is better to call the function in the component and implement it in a separate file. Another great feature is that if you use a `.server` in the file name (for example, `user.server.ts`), the functions inside that file can only run on the server. This is incredibly useful, especially when there are multiple collaborators on the project, some of whom might be junior developers. By simply looking at the file name, they can easily identify that it should run exclusively on the server.

## Working with forms is easy

Does anyone love writing form-related code? Usually, we need to write the UI, add front-end validation, submit the data to the server, add server-side validation (because we cannot trust anything that comes to the server, right?), and then we can process the data as needed. And that is supposed to be the happy path... well, remember what I wrote about full-stack components? If so, you may have guessed that in Remix, we can write our validation just once and use it on the front-end and back-end. 🤯 Yes, you heard that correctly - you write your validation just once. You don't need to think about synchronizing what you validate on the client and on the server—you simply write it once.

You can also easily detect if the form is being submitted or not using the `useTransition` hook in your component, so loading states are a piece of cake.

## Clean code

So far, almost all the Remix applications I have written were either hackathon projects or had very strict deadlines, requiring me to deliver them quickly. This would usually mean that I need to spend a day or two refactoring the code. However, with Remix, I end up with code that I am actually satisfied with, no big refactoring is needed.

## Amazing documentation

Developers do not like reading the documentation. I admit that I usually use other resources than official documentation, but I have to say that the current [Remix documentation](https://remix.run/docs/en/main) is absolutely amazing. When I need something, my first instinct is to check the documentation instead of googling the answer (although, to be completely honest, I might first use my Copilot chat). But jokes aside, the documentation is very comprehensive and answers most of the things you need to know to write amazing applications.

I hope that it will spark some excitement in those who are not familiar with Remix or haven't used it yet. In one of my upcoming posts, I will explore it deeper and and get my hands dirty by providing some practical examples. Stay tuned! 💪
