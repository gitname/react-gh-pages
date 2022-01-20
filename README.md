# Deploying a React App* to GitHub Pages

\* created using `create-react-app`

# Introduction

In this tutorial, I'll show you how you can create a React app and deploy it to GitHub Pages.

To create the React app, I'll be using [`create-react-app`](https://create-react-app.dev/), which is a tool people can use to create a React app from scratch. To deploy the React app, I'll be using [`gh-pages`](https://github.com/tschaub/gh-pages), which is an npm package people can use to deploy things to [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages), a free web hosting service provided by GitHub.

If you follow along with this tutorial, you'll end up with a new React app—hosted on GitHub Pages—which you can then customize.

# Tutorial

## Prerequisites

1. [Node and npm](https://nodejs.org/en/download/) are installed. Here are the versions I'll be using while making this tutorial:

    ```shell
    $ node --version
    v16.13.2

    $ npm --version
    8.1.2
    ```
    > Installing npm adds two commands to the system—`npm` and `npx`—both of which I'll be using while making this tutorial.

2. [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) is installed. Here's the version I'll be using while making this tutorial:

    ```shell
    $ git --version
    git version 2.29.1.windows.1
    ```

3. A [GitHub](https://github.com/signup) account. :octocat:

## Procedure

### 1. Create an **empty** repository on GitHub

1. Sign into your GitHub account.
2. Visit the [Create a new repository](https://github.com/new) form.
3. Fill in the form as follows:
   - **Repository name:** You can enter any name you want.

        > The name you enter will show up in a few places: (a) in references to the repository throughout GitHub, (b) in the URL of the repository, and (c) in the URL of the deployed React app.

        For this tutorial, I'll enter: `react-gh-pages`.
        
   - **Repository privacy:** Select _Public_ (or _Private_\*).

        > \* For [GitHub Free](https://docs.github.com/en/get-started/learning-about-github/githubs-products#github-free-for-user-accounts) users, the only type of repository that can be used with GitHub Pages is _Public_. For [GitHub Pro](https://docs.github.com/en/get-started/learning-about-github/githubs-products#github-pro) users (and other paying users), both _Public_ and _Private_ repositories can be used with GitHub Pages.

        For this tutorial, I'll choose: _Public_.

   - **Initialize repository:** Leave all checkboxes empty.

        > That will make it so GitHub creates an empty repository, instead of pre-populating the repository with a `README.md`, `.gitignore`, and/or `LICENSE` file.
4. Submit the form.

At this point, your GitHub account contains an empty repository, having the name and privacy type that you specified.

### 2. Create a React app

1. Create a React app named `my-app`:

    > In case you want to use a different name from `my-app` (e.g. `web-ui`), you can accomplish that by replacing all occurrences of `my-app` in this tutorial, with that other name (i.e. `my-app` --> `web-ui`).
  
    ```shell
    $ npx create-react-app my-app
    ```

    > That command will create a React app written in JavaScript. To create one written in [TypeScript](https://create-react-app.dev/docs/adding-typescript/#installation), you can issue this command instead:
    > ```shell
    > $ npx create-react-app my-app --template typescript
    > ```

    That command will create a new folder named `my-app`, which will contain the source code of a React app.

    > In addition to containing the source code of the React app, that folder is also a Git repository. That characteristic of the folder will come into play in Step 6.    

2. Enter the newly-created folder:
  
    ```shell
    $ cd my-app
    ```

At this point, there is a React app on your computer and you are in the folder that contains its source code. All of the remaining commands shown in this tutorial can be run from that folder.

### 3. Install the `gh-pages` package as a development dependency

- In this step, I'll install the `gh-pages` package in a way that also designates it as a [development dependency](https://nodejs.dev/learn/npm-dependencies-and-devdependencies) of the React app.

    ```shell
    $ npm install gh-pages --save-dev
    ```
    
    > That command both (a) installs the `gh-pages` package and (b) adds its name and version number to the `devDependencies` section of the `package.json` file. 

### 4. Add the app's base URL to the `package.json` file

- In this step, I'll add a `homepage` property to the `package.json` file.

    To edit the file, I'll use a code editor such as [vi](https://www.vim.org/) or [Visual Studio Code](https://code.visualstudio.com/).

    ```shell
    $ vi package.json
    ```

    The value of the `homepage` property is the URL at which I want people to be able to access the React app.

    Since I'll be deploying the React app as a GitHub [**_project_ page**](https://pages.github.com/#project-site), I'll use this URL format: `https://{username}.github.io/{repo-name}`

    Here's what the resulting property looks like:

    ```diff
    {
      "name": "my-app",
      "version": "0.1.0",
    + "homepage": "https://gitname.github.io/react-gh-pages",
      "private": true,
    ```

    > That URL format will allow me to deploy the React app as a GitHub **_project_ page**. If, instead, I wanted to deploy the React app as a GitHub [**_user_ page**](https://pages.github.com/#user-site) and/or I wanted it to have a [custom domain name](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site), I could do so by using one of the URL formats shown in the [official `create-react-app` GitHub Pages deployment guide](https://create-react-app.dev/docs/deployment/#github-pages).

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

    > That `deploy` script will allow me to deploy the React app as a GitHub **_project_ page**. If, instead, I wanted to deploy the React app as a GitHub [**_user_ page**](https://pages.github.com/#user-site) (regardless of domain name), I could do so by using the `deploy` script shown in the [official `create-react-app` GitHub Pages deployment guide](https://create-react-app.dev/docs/deployment/#github-pages).

### 6. Add the GitHub repository as a **remote**

- In this step, I'll add a [remote](https://git-scm.com/docs/git-remote) to the local repository. 

    That remote will be named `origin` and will point to the repository I created in Step 1. The URL format is: `https://github.com/{username}/{repo-name}.git`

    ```shell
    $ git remote add origin https://github.com/gitname/react-gh-pages.git
    ```

    > That will make it so that, when I (or the `gh-pages` npm package acting on my behalf) perform a `git push`, Git knows where it can send the files being pushed.

### 7. Deploy the React app to GitHub

- In this step, I will do two things:

    1. Build a distributable instance of the React app
    2. Deploy that distributable instance of the React app to GitHub

    To do both of those things, I'll issue this one command:

    ```shell
    $ npm run deploy
    ```

    > That will cause the `predeploy` and `deploy` scripts defined in `package.json` to run.
    >
    > Under the hood, the `predeploy` script will build a distributable version of the React app and store it in a folder named `build`. Then, the `deploy` script will push the contents of that folder to the `gh-pages` branch of the GitHub repository.

    GitHub Pages will automatically detect that files have been pushed to the `gh-pages` branch of the GitHub repository. Once it detects that, it will begin serving those files — in this case, the distributable version of the React app — to anyone that visits the URL I specified in Step 4; i.e. the app's base URL.

    **That's it!** The React app is now accessible at its base URL: https://gitname.github.io/react-gh-pages :rocket:

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

- Special thanks to GitHub (the company) for providing us with the GitHub Pages hosting service for free.
- And now, time to turn the default React app generated by `create-react-app` into something unique!
- This repository consists of two branches: 
    - `master` - the _source code_ of the React app
    - `gh-pages` - the React app _built from_ that source code

