# Contributing

Thanks for helping out. This is a tiny library, so changes should stay small and focused.

## Install

You need Node 20 or newer. There are no dependencies to install.

```sh
git clone https://github.com/lickybuay/tt-factory-sandbox.git
cd tt-factory-sandbox
```

## Run the tests

```sh
npm test
```

Tests live next to the code (`index.test.js`) and use Node's built-in test runner.
Add or extend a test for every change in behaviour.

## Open a pull request

1. Create a branch from `main`: `git switch -c my-change`.
2. Make your change, with its test, and run `npm test` until it passes.
3. Add a line under `[Unreleased]` in `CHANGELOG.md` if users will notice the change.
4. Commit, push your branch and open a pull request against `main`.
5. Describe what changed and why, and how you tested it.
