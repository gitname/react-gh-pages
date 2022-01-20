# Deploying a React App* to GitHub Pages

\* created using `create-react-app`

# Introduction

In this tutorial, I'll show you how I created a React app, then deployed that React app to GitHub Pages.

To create the React app, I used the [`create-react-app`](https://create-react-app.dev/) npm package. To deploy the React app to [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages), I used the [`gh-pages`](https://github.com/tschaub/gh-pages) npm package.

You can visit the deployed React app, here: [https://gitname.github.io/react-gh-pages](https://gitname.github.io/react-gh-pages)

## This repository

This repository consists of two branches: 

- The `master` branch contains the app's **source code**. This is the code the app's developers edit.
- The `gh-pages` branch contains the **app** _built from_ that source code. This is the web page the app's visitors see.

# Tutorial

## Prerequisites

1. [`Node.js` and `npm`](https://nodejs.org/en/download/) are installed. Here are the versions I used while writing this tutorial:

    ```shell
    $ node --version
    v16.13.2

    $ npm --version
    8.1.2
    ```
    > Note: During the `Node.js` installation process, I opted to install `npm` automatically. Installing `npm` adds both the `npm` and `npx` commands to my system.

1. [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) is installed. Here's the version I used while writing this tutorial:

    ```shell
    $ git --version
    git version 2.29.1.windows.1
    ```
    > Note: I will be using the _command-line_ Git client in this tutorial.

1. You have a [GitHub](https://github.com/signup) account. :octocat:

## Procedure

### 1. Create an **empty** repository on GitHub

- In this step, I'll use a form on GitHub to create an empty repository in my GitHub account.

    > By "empty," I mean one that contains no files.

    To do that, I'll sign into my GitHub account, then fill out the following form: 

    - :writing_hand: [**Create a new repository**](https://github.com/new)

    When filling out the form, I'll enter the name I want the repository to have.

    > In this tutorial, I'll use a repository named `react-gh-pages`. In case you're using a repository that has a different name, you can replace all occurrences of `react-gh-pages` in these instructions with the name of the repository you're using.

    In the "Initialize this repository with" section of the form, I'll leave all the checkboxes empty so GitHub does **not** initialize the repository with any files (i.e. `README.md`, `.gitignore`, or `LICENSE`).

    At this point, my GitHub account will contain an empty repository named `react-gh-pages`.

### 2. Create a React app

- In this step, I'll use `create-react-app` to create a React app named `my-app`.

    ```shell
    $ npx create-react-app my-app
    ```

    > That command will create a React app written in **JavaScript**. To create one written in [**TypeScript**](https://create-react-app.dev/docs/adding-typescript/#installation), you can issue _this_ command instead:
    > ```shell
    > $ npx create-react-app my-app --template typescript
    > ```

    > Either command will create a new folder named `my-app`, which will contain the newly-created React app.

    I'll enter the new folder.

    ```shell
    $ cd my-app
    ```
    All of the remaining commands shown in this tutorial can be run from this new folder.

    > Foreshadowing: In addition to containing the files that make up the React app, that new folder is also a Git repository. I will utilize that characteristic in step 6.

### 3. Install the `gh-pages` package as a development dependency

- In this step, I'll install the `gh-pages` package in a way that also designates it as a [development dependency](https://nodejs.dev/learn/npm-dependencies-and-devdependencies) of the React app.

    ```shell
    $ npm install gh-pages --save-dev
    ```

### 4. Add the deployment destination to the `package.json` file

- In this step, I'll add the deployment destination to the `package.json` file. 

    To edit the file, I'll use a code editor such as [vi](https://www.vim.org/) or [Visual Studio Code](https://code.visualstudio.com/).

    ```shell
    $ vi package.json
    ```

    The deployment destination is the URL of the repository I created in step 1.

    I'll add a property named `homepage` that has that URL as its value, like this:

    ```diff
    {
      "name": "my-app",
      "version": "0.1.0",
    + "homepage": "https://gitname.github.io/react-gh-pages",
      "private": true,
    ```

    > That URL format will allow me to deploy the React app as a GitHub [**_project_ page**](https://pages.github.com/#project-site). If, instead, I wanted to deploy the React app as a GitHub [**_user_ page**](https://pages.github.com/#user-site) and/or I wanted it to have a [custom domain name](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site), I could do so by using one of the URL formats shown in the [official `create-react-app` GitHub Pages deployment guide](https://create-react-app.dev/docs/deployment/#github-pages).

### 5. Add deployment scripts to the `package.json` file

- In this step, I'll add some deployment scripts to the `package.json` file. 

    I'll add these two scripts to the `scripts` object:
    ```diff
    "scripts": {
    +   "predeploy": "npm run build",
    +   "deploy": "gh-pages -d build",
        "start": "react-scripts start",
        "build": "react-scripts build",
    ```

    > That `deploy` script will allow me to deploy the React app as a GitHub [**_project_ page**](https://pages.github.com/#project-site). If, instead, I wanted to deploy the React app as a GitHub [**_user_ page**](https://pages.github.com/#user-site) (regardless of domain name), I could do so by using the `deploy` script shown in the [official `create-react-app` GitHub Pages deployment guide](https://create-react-app.dev/docs/deployment/#github-pages).

### 6. Add the GitHub repository as a **remote**

- In this step, I'll add a [remote](https://git-scm.com/docs/git-remote) to the local repository, designate the repository I created in step 1, as a  named `origin` in the local Git repository.

    ```shell
    $ git remote add origin https://github.com/gitname/react-gh-pages.git
    ```

    > That will make it so that, when I (or the `gh-pages` npm package acting on my behalf) perform a `git push`, the payload is pushed to _that_ repository.

### 7. Deploy the React app to GitHub

- In this step, I will do two things:

    1. Build a distributable version of the React app
    2. Deploy that version to GitHub

    To do both of those things, I'll issue this single command:

    ```shell
    $ npm run deploy
    ```

    > That will cause the `predeploy` and `deploy` scripts defined in `package.json` to run.
    >
    > Under the hood, the `predeploy` script will build a distributable version of the React app and store it in a folder named `build`. Then, the `deploy` script will push the contents of that folder to the `gh-pages` branch of the GitHub repository.

    GitHub Pages will automatically detect that files have been pushed to the `gh-pages` branch of the GitHub repository. Once it detects that, it will begin serving those files — in this case, the distributable version of the React app — to anyone that visits the URL I specified in step 4.

    **That's it!** The React app is now accessible at the URL I specified in step 4: https://gitname.github.io/react-gh-pages :rocket:

### 8. (Optional) Commit the React app's **source code** to the `master` branch

- In the previous step, the `gh-pages` npm package pushed the distributable version of the React app to a branch named `gh-pages` in the GitHub repository.

    In this step, I will push the **source code** of the React app to a branch named `master` in the GitHub repository.

    To do that, I'll issue the following commands:

    ```shell
    $ git add .
    $ git commit -m "Create a React app and deploy it to GitHub Pages"
    $ git push origin master
    ```

    > I recommend exploring the GitHub repository at this point. It will have two branches: `master` and `gh-pages`. The `master` branch will contain the React app's source code, while the `gh-pages` branch will contain the distributable version of the React app.

# References

1. [The official `create-react-app` deployment guide](https://create-react-app.dev/docs/deployment/#github-pages)

# Notes

* Special thanks to GitHub (the company) for providing us with the GitHub Pages hosting service for free.
* And now, time to turn the default React app generated by `create-react-app` into something unique!
