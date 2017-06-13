# Deploying a React App to GitHub Pages

# Introduction

Today, I deployed a React app to GitHub Pages. You can visit the deployed app, at [https://gitname.github.io/react-gh-pages/](https://gitname.github.io/react-gh-pages/).

This repository contains the files involved in that endeavor. Specifically, it contains the source code files (e.g. `App.js`, `index.js`, `package.json`, and the `README.md` document you're reading now) and the files that consitute a *build* of the app.

The source code files are stored in this repository's `master` branch, while the files that constitute the *build* are stored in this repository's `gh-pages` branch.

The remainder of this document contains a tutorial on creating a React app (using `create-react-app`) and deploying that app to GitHub Pages.

# Tutorial

## Prerequisites

1. An adequate version of [`Node.js`](https://nodejs.org/) is installed. Here's the adequate version I use:

    ```sh
    $ node --version
    v6.10.1
    ```

2. An adequate version of  [`npm`](https://nodejs.org/) is installed. Here's the adequate version I use:

    ```sh
    $ npm --version
    3.10.10
    ```
3. An adequate version of [`create-react-app`](https://github.com/facebookincubator/create-react-app) is installed. Here's the adequate version I use:

    ```sh
    $ path/to/create-react-app --version
    1.3.1
    ```

    In the case of `create-react-app`, you can either install it globally (i.e. `$ npm install -g create-react-app`) or install it locally (i.e. `$ npm install create-react-app`). I personally install it locally.

## Procedure

1. Coming soon...

# References

1. Facebook's own tutorial on deploying a React app to GitHub Pages: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#github-pages

# Notes

I created this React app using [`create-react-app`](https://github.com/facebookincubator/create-react-app). By default, apps created using `create-react-app` have a README.md file that looks like [this](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md). Indeed, the README.md file you're now reading originally looked like that. I have since changed it to look the way it looks today.
