# Contributing

## Install

You need Node 20 or newer. The library has no dependencies, so cloning is enough:

```sh
git clone https://github.com/lickybuay/tt-factory-sandbox.git
cd tt-factory-sandbox
```

## Run the tests

```sh
npm test
```

This runs `node --test`. Tests live next to the code (`index.test.js`). Add or update a test
for every change you make, and make sure `npm test` passes before you open a pull request.

## Open a pull request

1. Create a branch from `main`.
2. Make your change with its test, and commit it with a short imperative subject.
3. Push the branch and open a pull request against `main`. Describe what changed and why, and
   say how you tested it.
4. Keep each pull request to one change; it is squash-merged into a single commit.
