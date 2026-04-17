---
title: "How Automation Saved Me from Oops Moments: Never Skip Tests in Production Again!"
publishDate: 2024-01-28
tags: ["development", "automation", "github", "githubactions"]
---

Every time I have to troubleshoot and fix a unit test (or Cypress test), I end up running just that one test locally - using the `.only` suffix in my test case. This syntax allows me to ignore all other tests in the same file, which is exactly what I need at the moment.

But you might know the feeling - sometimes I am just too excited that I finally managed to fix the problem, and I forget to remove the `.only` from the test case. And since we are all humans, the colleague who does the code review might also just not notice it, and it makes its way to production. As a result, we end up skipping some of tests because of a small mistake. 😬

As a developer, I prefer to write code that helps me avoid all the boring stuff and also spot issues like this. So, I decided I wanted to have some automation in place that would help catch this issue and fit into our project workflow. In this article, I want to share my solution with you; maybe it might inspire you to automate the same or a similar problem you might be facing.

I decided to address this problem on two levels:

- Write a pre-commit hook that will notify the dev-eloper about this issue.
- Write a GitHub action that will run for every pull request.

## Pre-commit hook

We were already using [lint-staged](https://github.com/lint-staged/lint-staged) and have a pre-commit hook in place using [Husky](https://github.com/typicode/husky) in our project for linter and prettier. So it made sense to add a check here.

So first I created a file `pre-commit.sh` which is a bash script that checks all the staged files and looks for the `.only` text.

```bash
#!/bin/bash
# pre-commit.sh
for file in $(git diff --cached --name-only | grep -E '\.(js|jsx|ts|tsx)$'); do
  if grep -q ".only(" "$file"; then
    echo "Error: '.only(' found in $file"
    exit 1
  fi
done
exit 0
```

(You can find the code on [GitHub](https://gist.github.com/hankadev/b7ff6bc63fb99dec62fd74b2e706b4d6#file-pre-commit-sh))

Then I just had to specify for which files I want to run this script in my `lint-staged.config.js` configuration file. In my case I wanted to run the script only for the JavaScript and TypeScript files.

(For simplicity the code snippet below contains only my custom script).

```js
module.exports = {
  "*.{js,jsx}": ["bash pre-commit.sh"],
  "*.{ts,tsx}": ["bash pre-commit.sh"],
};
```

In my case both files, the configuration and the script, were on the same level in my file structure. Otherwise I would have to specify the relative path to the script.

Perfect! Now we have a check in place for every commit made by a developer… but wait, what if a developer decides to just ignore the warning (using the `--no-verify` flag for a commit) or does not install the pre-commit hook locally at all? 🤔

## GitHub action for each Pull Request

This scenario can be addressed by a GitHub Action that runs on every pull request to the main branch. I've added a new job to the workflow to perform a similar check. However, I had to make some adjustments to the script. The one I initially used for pre-commit hooks compares the staged files. Considering that there could be multiple commits in the pull request, and some of them might involve force pushes, I wanted to ensure a thorough comparison of all the JavaScript and TypeScript files modified in the pull request.

```yaml
name: PR checks
on:
  pull_request:
    branches: [main]

jobs:
  check-only:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - name: Check for .only in changed JavaScript and TypeScript files
        run: |
          changed_files=$(git diff --name-only origin/main)
          for file in $changed_files
          do
            if [[ $file == *.js || $file == *.jsx || $file == *.ts || $file == *.tsx ]]
            then
              if grep -q ".only(" $file
              then
                echo "File $file contains .only("
                exit 1
              fi
            fi
          done
```

(You can find the code on [GitHub](https://gist.github.com/hankadev/996c7c7734e66d274b574afc51e6afe1#file-check-only-yaml))

Yes, automation can save us a lot of time and help avoid issues caused by silly mistakes.
