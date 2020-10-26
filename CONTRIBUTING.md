# Contributing

Here are a few guidelines that will help you along the way.


## Your first Pull Request

Working on your first Pull Request? You can learn how from this free video series:

[How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github)

## Sending a Pull Request

Before working on a large change, it is best to open an issue first to discuss it with the maintainers.

When in doubt, keep your Pull Requests small. To give a Pull Request the best chance of getting accepted, don't bundle more than one feature or bug fix per Pull Request. It's often best to create two smaller Pull Requests than one big one.

1. Fork the repository.

2. Clone the fork to your local machine and add upstream remote:

```sh
git clone https://github.com/<your username>/svelte-library.git
cd svelte-library
git remote add upstream https://github.com/nurdiansyah/svelte-library.git
```

3. Synchronize your local `next` branch with the upstream one:

```sh
git checkout next
git pull upstream next
```

4. Install the dependencies with yarn (npm isn't supported):

```sh
yarn install
```

5. Create a new topic branch:

```sh
git checkout -b my-topic-branch
```

6. Make changes, commit and push to your fork:

```sh
git push -u origin HEAD
```

7. Go to [the repository](https://github.com/nurdiansyah/svelte-library) and make a Pull Request.

The core team is monitoring for Pull Requests. We will review your Pull Request and either merge it, request changes to it, or close it with an explanation.


### The documentation site

[TODO]

To get started:

```sh
yarn
yarn docs
```

You can now access the documentation site [locally](http://localhost:3000).
Changes to the docs will hot reload the site. If you make changes to TypeScript files
in the docs run `yarn docs:typescript --watch` in a separate terminal.

Where possible, please add tests for any changes you make.
Tests can be run with `yarn test`.

### Updating the component API documentation
[TODO]

```sh
$ yarn proptypes
$ yarn docs:api
```

### Coding style

[TODO]
