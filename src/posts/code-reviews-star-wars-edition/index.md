---
title: "Code Reviews in a Galaxy Far, Far Away"
publishDate: 2024-03-17
tags: ["development"]
---

Code reviews are a huge part of our day-to-day job and over the years I realized it takes time to learn how to write them in a way that is helpful and also encouraging. As developers we tend to be very direct when we communicate, but when it is not done face to face or when we work on remote team and do not know each other well, very direct communication can make an impression of being rude or harsh. Also sometimes the feedback is just too vague or cryptic or reflects a personal preference, making it hard to understand what should be fixed. Let me demonstrate how bad comments might look like and then suggest how we can do better.

Let’s start by thinking about what comments might have different characters from Star Wars write.

## Chewbacca

Chewbacca would probably not bother to attach his comment to a specific line of code. He would just leave all comments together. Just by reading it, you see a Wookiee screaming at you.

> Argh... Coding style. Grrrr! Argh! Not working code. Argh! Code duplication. Grrrr! Argh! Inconsistent naming. Argh! Performance. Grrrr!

This feedback is too generic, missing a context and does not help anyone to understand how to fix it. It also does not indicate how big the issue is - does it have to be fixed, is it just a suggestion for improvement or should it be fixed in separate PR because it may be something that is not related entirely to your changes and needs to be solved in generic way? Moreover it may just make the author of the changes demotivated because he may feel like every single line is bad.

Wookiees make great companions and loyal friends. But when writing your reviews, please remember, let's not channel our inner Chewbacca.

![Chewbacca](https://media.tenor.com/wtyxL0UlmOIAAAAC/star-wars-chewbacca.gif)

## Master Yoda

Master Yoda is the kind of reviewer who gives you cryptic advice. You will have to spend a lot of time figuring out what to do.

> Hmm, indentation, consistent it must be. Readable code leads to the light side, it does.

> Ah, error handling missing, it seems. Prepared for failure, your code must be. Robust it shall become.

> Ah, magic numbers found. Constants, you should define. Understandable code, it will make.

Sometimes it may be very generic without any hint what is wrong - leaving you in complete dark.

> Hmm, design patterns overlooked, they are. Powerful tools, they can be. Study them, you must.

> Refactoring, a continuous process it is. Keep improving, you must. Stronger your codebase will become

Master Yoda is very wise, but remember to provide constructive feedback. Leaving your colleagues in the dark, similar to Luke leaving Dagobah before completing his training, does not help anyone. May the Force of clear communication be with you.

![Master Yoda](https://media.tenor.com/nXhfMzITuB8AAAAC/yoda-you-must-unlearn-what-you-have-learned.gif)

## Darth Vader

Darth Vader would give you feedback in the form of commands, and you would be scared to ask any questions or to explain why you may disagree.

> Your lack of error handling disturbs me. Correct it immediately, or face the consequences.

> Unit tests are a shield against the weaknesses of your code. Write them, or face the full power of the dark side.

> Duplication is a sign of your weakness. Eliminate it, or face my anger.

This kind of feedback is not helpful at all. Instead of relying on your inner Darth Vader, try to awaken your inner Anakin instead. Write your reviews with ambition and empathy.

## Anakin

Anakin would strive for the best code possible. He would motivate everyone to think creatively and not rely on repeating the same thing over and over again. He would ensure that you fix all the issues that may lead to problems and make sure that the code will be easy to maintain going forward. Most likely, he may suggest new ways of doing things, teaching his Padawans not to be afraid to evolve and become more powerful.

> Commented-out code is a relic of the past. Remove it, and let the Force guide your refactoring efforts.

> Long functions are like tangled webs in the Force. Let's break them down into manageable, focused units of logic.

> Your commit messages are as vague as a Jedi prophecy. Provide clear and informative messages that leave no room for ambiguity or misinterpretation.

![Anakinn](https://media.tenor.com/iLOinbnejJcAAAAC/anakin-ahsoka-anakin.gif)

## Conventional comments

For me, the most important thing is to be clear about what is an actual issue, what is an improvement, and what is just a nitpick. This helps the author of the PR to know where to focus and what they can omit if they don't agree with me. To make this easier, I started using conventional comments.

You may find several articles and specifications about how to approach it, for example, [this one](https://www.conventionalcommits.org/en/v1.0.0/). The main idea is to use prefixes to indicate the type and importance of your comment (if you are familiar with conventional commits, this is very similar).

Here is the list of prefixes I use with my own descriptions:

- `issue` - for raising problems like non-working code, not fixing the bug properly, or when the implementation has significant flaws.
- `fix` - for smaller issues that need to be addressed.
- `suggestion` - when the code works but can be improved, such as for refactoring or using an alternative approach.
- `nitpick` - just comments I have when reading the code, but they can be omitted, mostly reflecting my personal preferences.

I also like the idea of using `praise` to give positive feedback. However, personally, I prefer leaving a positive overall comment with emojis and a personal message. When I'm very impressed, I might even leave a haiku praising the code.

## So, what makes a good review?

- Utilizing conventional commits.
- Providing feedback and information when it makes sense. If there is an issue, explain why it is an issue and how it can be fixed. Include links to related documentation or articles.
- Ensuring the tone is not too direct (no Darth Vader). Adding an emoji or two can often soften the tone.
- If you know the other person, don't be afraid to use internal jokes or speak in a familiar tone.
- Remember that the goal is not for everyone to write code the same way you would. There are multiple ways to reach the destination, and usually, more than one of them is correct.
- Avoid nitpicking excessively, especially if there are many other comments.
- When reviewing the work of a junior developer, take the time to leave some positive feedback, even when approving the changes. It can make a difference.
- I'm sure there are many other things that may contribute to better and more constructive feedback. Feel free to share yours in the comments!

**May the conventional comments be with you!**
