---
title: "Git Battle: YOLO Mode vs. Clean History"
description: "A practical comparison of messy versus clean Git workflows, with tips for using rebase and fixup to keep commit history useful."
publishDate: 2023-06-11
tags: ["development", "git"]
---

If you use Git at work or even for your own projects, you may have encountered a situation where you need to modify one of your previous commits, right? It doesn't matter if it's a typo in a variable name, forgetting to include a file in a commit, or simply needing to change the commit message or anything else.

Be honest, have you ever seen a message history like this?

```
feat: fetch user profile from server
fix: fix error
fix: now really fixing the error
fix: noooow it should work
fix: fix typo
```

So what can you do about it? 🤔 Over the years, I've seen various approaches which I want to share with you.

## Committing Chaos: YOLO Mode

We live only once, so why should you even care about it? If the code works, who cares about the git history, right? Or maybe you just do not know how to fix it in git properly and might fear what can go wrong, so you decide not to care. Frankly, I understand that approach, and if it is 'just' for a personal project, why not? 🤷‍♀️ But if you decide to take this approach at work, you will probably make your colleagues very unhappy.

## One Commit to Rule Them All

If you are in this category, you realize the need for a clean git history but decide to take a shortcut think outside of the box, and come up with the idea to just squash all the commits into one with a nice commit message. This might work very well for some use cases. However, if it means that you are putting more features and bug fixes into one commit, this is not the best approach, and I might even argue that the previous approach would be better in this case. 🙈

## Unleashing the Wizard of Clean Commits

Personally, I think that most developers need to find their way to realize why a clean commit history is beneficial. For me, it was hours of digging into the history and trying to find something, constantly scratching my head because commits that were supposed to fix styling issues also changed business logic. 😢 So let's take a look at how we can achieve a nice and clean commit history using `rebase` and `fixup`.

Imagine that your commit history looks like this:

```
80316d8 (HEAD -> master) style: redesign profile page
95ca0cd feat: fetch user profile
bbf0488 feat: add user authentication
df7c600 initial commit
```

💡I am using `git log --oneline` to see only compact version of the commit history.

Now, you need to make a change that you want to append to one of your previous commits - `95ca0cd feat: fetch user profile` because the changes are related to this commit. First, you need to add the changes to the staged area. You can use `git add .` if you want to commit all files, or add only the files that should be included in your commit. Then, commit changes using the magic word `fixup` with the command:
`git commit --fixup=95ca0cd`.

Git will create a new commit, and the history will look like this:

```
0e09e61 (HEAD -> master) fixup! feat: fetch user profile
80316d8 style: redesign profile page
95ca0cd feat: fetch user profile
bbf0488 feat: add user authentication
df7c600 initial commit
```

💥 Most likely you need to adjust your git configuration in order to make the autosquash work. I recommend doing it globally. You can do it in your terminal by typing

```
git config --global rebase.autosquash true
```

Now you can easily rebase your branch using `git rebase -i --autosquash HEAD~4` (you can specify how many commits you want to include in the rebase process). The fixup commit will be moved up and then automatically squashed into the right commit.

This is how it will look like in case you are using a terminal and text editor. In case you are using some GUI I guess your result will look similar. At this point you can also select what other changes you want to do during the rebase. You can reword the commit message, squash commits into one and more!

```
pick bbf0488 feat: add user authentication
pick 95ca0cd feat: fetch user profile
fixup e5bf471 fixup! feat: fetch user profile
pick a183fc0 style: redesign profile page
```

Git rebase is very powerful and if you mix it with the fixup commits you have a very powerful tool at hand. I hope you will give it a try next time you will need to solve a similar problem. 😎
