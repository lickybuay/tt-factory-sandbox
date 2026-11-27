# Contributing

Thanks for helping out. This is a small testing repository, so the process is short.

## Install

You need Node 20 or newer. There are no dependencies, so there is nothing to install beyond cloning:

```sh
git clone https://github.com/lickybuay/tt-factory-sandbox.git
cd tt-factory-sandbox
```

## Run the tests

```sh
npm test
```

All tests must pass before you open a pull request. If you change behaviour, add or update a
test in `index.test.js` first.

## Open a pull request

1. Create a branch from the default branch: `git switch -c my-change`.
2. Make your change and commit it with a short, descriptive message.
3. Run `npm test` again.
4. Push the branch and open a pull request on GitHub.
5. Describe what changed and why, and note the tests you ran.
