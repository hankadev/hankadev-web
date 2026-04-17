---
title: "Copilot: Weapon For Laid Back Developers"
description: "Real-world GitHub Copilot workflows that boost developer productivity, from smarter autocomplete to code explanations and debugging help."
publishDate: 2023-11-12
tags: ["development", "ai"]
---

Lately, we've seen an explosion of AI tools that help us to be more effective and productive. Luckily, so far, they are here to help us and not to replace us. As a developer one of the tools I am using the most is [Copilot](https://github.com/features/copilot). GitHub advertises it as “Your AI pair programmer” and this is exactly what it is to me: a junior colleague who writes the code with me. Yay, finally not feeling alone while writing code all day.

I recently presented at [FrontKon](https://www.frontkon.tech/), a Czech conference for frontend developers, where I showcased some of my most common use cases. And since the talk was in Czech, I decided to write an article about it in English as well.

Fun fact - I even gave my Copilot name - Alfred. Why? Because I am still the superhero (yes, this is Batman reference) and he is here to guide me, support me and help me.

## #1 Advanced autocomplete

Most of the time I use Copilot “just” as advanced autocomplete in my IDE. It might seem kind of trivial, but, in my opinion, this is where it truly excels. Sometimes it just drops in a line or two, while other times it goes all out and suggests an entire code block. As a frontend developer it saves me time mostly when writing logic related to state management or any utility functions.

In my example I am using [Redux Toolkit](https://redux-toolkit.js.org/) and I got a prompt for actions to `login` and `logout` the user. If I need more functions, I can simply start typing the name, and Copilot provides the completion. For instance, in the example, I'm adding a function to update the user. And of course at the end of the file it suggests the exports.

To be honest I did not realize how much I am used to the autocomplete until the GitHub has an outage and my IDE stop being so powerful.

<div class="video-embed">
  <iframe
    src="https://www.youtube-nocookie.com/embed/r6tfOZP5I4g?rel=0&modestbranding=1&vq=hd1080"
    title="GitHub Copilot - advanced autocomplete example"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>

## #2 Explaining code

Copilot now offers also chat interface perfect for asking code-related questions. I'm not just talking about basic questions, you can also ask Copilot to explain a code snippet or decode error messages. This feature is a game-changer and can help a lot while learning a new technology or tackling unfamiliar parts of your code base.

In my example you can see some code written in [Go](https://go.dev/) and I have highlighted the function I am interested in. On the left side I have my Copilot Chat interface opened and all I have to do is type `/explain` and Copilot will explain what the function does. And since this is chat interface, it is of course possible to ask follow up questions. Pretty powerful, right?

<div class="video-embed">
  <iframe
    src="https://www.youtube-nocookie.com/embed/rGd6buTEcgE?rel=0&modestbranding=1&vq=hd1080"
    title="GitHub Copilot - explain code example"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>

## #3 Terminal commands

I love using my terminal for as much as possible, but I have trouble to remember the commands. This is where Copilot can be very helpful as well. And when using the chat interface to ask for the right command, there is also an option to paste the suggested command to my terminal right away.

<div class="video-embed">
  <iframe
    src="https://www.youtube-nocookie.com/embed/iboow3t921A?rel=0&modestbranding=1&vq=hd1080"
    title="GitHub Copilot - terminal example"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>

## #4 Unit tests

Unit tests are important, but who actually enjoys writing them? It's definitely not the part of my job I enjoy. Luckily, Copilot is able to generate unit tests pretty well, especially for not very complex code. So, whenever I have a function or UI component, I simply ask Copilot to generate unit tests for me, and then I do the review. This way, the process is more fun. I just check if the tests might be improved or if some of them are redundant or missing.

And the chat interface again has a very useful option to just insert the generated code at the current position of the cursor. Cool, right?

<div class="video-embed">
  <iframe
    src="https://www.youtube-nocookie.com/embed/EfFgmffXAaU?rel=0&modestbranding=1&vq=hd1080"
    title="GitHub Copilot - unit tests generation example"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>

## #5 Generating code

Copilot can also generate a whole block of code. I find it very useful, for example, when writing a [GitHub workflow](https://docs.github.com/en/actions/using-workflows). Because I am still learning, it is very helpful to request the code in plain English and then reverse engineer the solution. This way, I am able to deliver the automation I need and also learn something new.

Yes, Copilot is an amazing tool for learning as well. The chat interface enables me to ask questions and follow-up questions. If needed, I can also ask questions about my code, and it has the context of the file I am working on. This is much more powerful than just using Google.

In my example, I am asking Copilot to _"write a GitHub workflow that will run lint for a React application and then generate a unit test coverage report using the yarn coverage-ci command and upload the result to Codecov."_ I receive not just the code itself, but also a reminder to set up the environment variable on GitHub.

<div class="video-embed">
  <iframe
    src="https://www.youtube-nocookie.com/embed/n7F5SAVKZzk?rel=0&modestbranding=1&vq=hd1080"
    title="GitHub Copilot - code generation example"
    loading="lazy"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>

Co-pilot can be very powerful and speed up the development process. You can use it as an advanced autocomplete, as your pair programming buddy, or as a learning tool. Or all of it! But you need to keep in mind that it does not always write the best code - the code might fail, be outdated, or not optimal. Remember, you are the Batman, and Co-pilot is your Alfred.

Here is GitHub repository with the code samples in case you wanna try same commands yourself: https://github.com/hankadev/frontkon2023.
