# Deploying a React App* to GitHub Pages

\* created using `create-react-app`

# Introduction

In this tutorial, I'll show you how you can create a React app and deploy it to GitHub Pages.

To create the React app, I'll be using [`create-react-app`](https://create-react-app.dev/), which is a tool people can use to create a React app from scratch. To deploy the React app, I'll be using [`gh-pages`](https://github.com/tschaub/gh-pages), which is an npm package people can use to deploy things to [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages), a free web hosting service provided by GitHub.

If you follow along with this tutorial, you'll end up with a new React app—hosted on GitHub Pages—which you can then customize.

## Translations

This tutorial has been translated from its original English into the following languages:
- [Traditional Chinese](https://github.com/gitname/react-gh-pages/issues/167#issuecomment-1925551338) (credit: [@creaper9487](https://github.com/creaper9487))

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
    - **Repository name:** You can enter any name you want\*.

        > \* For a [project site](https://pages.github.com/#project-site), you can enter any name you want. For a [user site](https://pages.github.com/#user-site), GitHub [requires](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites) that the repository's name have the following format: `{username}.github.io` (e.g. `gitname.github.io`)
        
        > The name you enter will show up in a few places: (a) in references to the repository throughout GitHub, (b) in the URL of the repository, and (c) in the URL of the deployed React app.

        > In this tutorial, I'll be deploying the React app as a project site.

        I'll enter: `react-gh-pages`
        
   - **Repository privacy:** Select _Public_ (or _Private_\*).

        > \* For [GitHub Free](https://docs.github.com/en/get-started/learning-about-github/githubs-products#github-free-for-user-accounts) users, the only type of repository that can be used with GitHub Pages is _Public_. For [GitHub Pro](https://docs.github.com/en/get-started/learning-about-github/githubs-products#github-pro) users (and other paying users), both _Public_ and _Private_ repositories can be used with GitHub Pages.

        I'll choose: _Public_

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

    > #### Branch names: `master` vs. `main`
    > 
    > The Git repository will have one branch, which will be named either (a) `master`, the default for a fresh Git installation; or (b) the value of the Git configuration variable, `init.defaultBranch`, if your computer is running Git version 2.28 or later _and_ you have [set that variable](https://github.blog/2020-07-27-highlights-from-git-2-28/#introducing-init-defaultbranch) in your Git configuration (e.g. via `$ git config --global init.defaultBranch main`).
    >
    > Since I have not set that variable in my Git installation, the branch in my repository will be named `master`. In case the branch in your repository has a different name (which you can check by running  `$ git branch`), such as `main`; you can **replace** all occurrences of `master` throughout the remainder of this tutorial, with that other name (e.g. `master` → `main`).

2. Enter the newly-created folder:
  
    ```shell
    $ cd my-app
    ```

At this point, there is a React app on your computer and you are in the folder that contains its source code. All of the remaining commands shown in this tutorial can be run from that folder.

### 3. Install the `gh-pages` npm package

1. Install the [`gh-pages`](https://github.com/tschaub/gh-pages) npm package and designate it as a [development dependency](https://docs.npmjs.com/specifying-dependencies-and-devdependencies-in-a-package-json-file):
 
    ```shell
    $ npm install gh-pages --save-dev
    ```

At this point, the `gh-pages` npm package is installed on your computer and the React app's dependence upon it is documented in the React app's `package.json` file.

### 4. Add a `homepage` property to the `package.json` file

1. Open the `package.json` file in a text editor.
   
    ```shell
    $ vi package.json
    ```

    > In this tutorial, the text editor I'll be using is [vi](https://www.vim.org/). You can use any text editor you want; for example, [Visual Studio Code](https://code.visualstudio.com/).

2. Add a `homepage` property in this format\*: `https://{username}.github.io/{repo-name}`

    > \* For a [project site](https://pages.github.com/#project-site), that's the format. For a [user site](https://pages.github.com/#user-site), the format is: `https://{username}.github.io`. You can read more about the `homepage` property in the ["GitHub Pages" section](https://create-react-app.dev/docs/deployment/#github-pages) of the `create-react-app` documentation.

    ```diff
    {
      "name": "my-app",
      "version": "0.1.0",
    + "homepage": "https://gitname.github.io/react-gh-pages",
      "private": true,
    ```
At this point, the React app's `package.json` file includes a property named `homepage`.

### 5. Add deployment scripts to the `package.json` file

1. Open the `package.json` file in a text editor (if it isn't already open in one).
   
    ```shell
    $ vi package.json
    ```

2. Add a `predeploy` property and a `deploy` property to the `scripts` object:

    ```diff
    "scripts": {
    +   "predeploy": "npm run build",
    +   "deploy": "gh-pages -d build",
        "start": "react-scripts start",
        "build": "react-scripts build",
    ```

At this point, the  React app's `package.json` file includes deployment scripts.

### 6. Add a "remote" that points to the GitHub repository

1. Add a "[remote](https://git-scm.com/docs/git-remote)" to the local Git repository.

    You can do that by issuing a command in this format: 
    
    ```shell
    $ git remote add origin https://github.com/{username}/{repo-name}.git
    ```
    
    To customize that command for your situation, replace `{username}` with your GitHub username and replace `{repo-name}` with the name of the GitHub repository you created in Step 1.

    In my case, I'll run:

    ```shell
    $ git remote add origin https://github.com/gitname/react-gh-pages.git
    ```

    > That command tells Git where I want it to push things whenever I—or the `gh-pages` npm package acting on my behalf—issue the `$ git push` command from within this local Git repository.

At this point, the local repository has a "remote" whose URL points to the GitHub repository you created in Step 1.

### 7. Push the React app to the GitHub repository

1. Push the React app to the GitHub repository

    ```shell
    $ npm run deploy
    ```

    > That will cause the `predeploy` and `deploy` scripts defined in `package.json` to run.
    >
    > Under the hood, the `predeploy` script will build a distributable version of the React app and store it in a folder named `build`. Then, the `deploy` script will push the contents of that folder to a new commit on the `gh-pages` branch of the GitHub repository, creating that branch if it doesn't already exist.

    > By default, the new commit on the `gh-pages` branch will have a commit message of "Updates". You can [specify a custom commit message](https://github.com/gitname/react-gh-pages/issues/80#issuecomment-1042449820) via the `-m` option, like this:
    > ```shell
    > $ npm run deploy -- -m "Deploy React app to GitHub Pages"
    > ```

At this point, the GitHub repository contains a branch named `gh-pages`, which contains the files that make up the distributable version of the React app. However, we haven't configured GitHub Pages to _serve_ those files yet.

### 8. Configure GitHub Pages

1. Navigate to the **GitHub Pages** settings page
   1. In your web browser, navigate to the GitHub repository
   1. Above the code browser, click on the tab labeled "Settings"
   1. In the sidebar, in the "Code and automation" section, click on "Pages"
1. Configure the "Build and deployment" settings like this: 
   1. **Source**: Deploy from a branch
   2. **Branch**: 
      - Branch: `gh-pages`
      - Folder: `/ (root)`
1. Click on the "Save" button

**That's it!** The React app has been deployed to GitHub Pages! :rocket:

At this point, the React app is accessible to anyone who visits the `homepage` URL you specified in Step 4. For example, the React app I deployed is accessible at https://gitname.github.io/react-gh-pages.

### 9. (Optional) Store the React app's _source code_ on GitHub

In a previous step, the `gh-pages` npm package pushed the distributable version of the React app to a branch named `gh-pages` in the GitHub repository. However, the _source code_ of the React app is not yet stored on GitHub.

In this step, I'll show you how you can store the source code of the React app on GitHub.

1. Commit the changes you made while you were following this tutorial, to the `master` branch of the local Git repository; then, push that branch up to the `master` branch of the GitHub repository.

    ```shell
    $ git add .
    $ git commit -m "Configure React app for deployment to GitHub Pages"
    $ git push origin master
    ```

    > I recommend exploring the GitHub repository at this point. It will have two branches: `master` and `gh-pages`. The `master` branch will contain the React app's source code, while the `gh-pages` branch will contain the distributable version of the React app.

### 10. (Optional) Automate deploying the React app when _source code_ is pushed to `master` branch

In a previous step, the source code of the React app is pushed to GitHub. 

In this step, I'll show you how you can set up a GitHub workflow to automate running the command that pushes the distributable version of the React app to the `gh-pages` branch in the GitHub repository. Setting this up will cause pushing updated source code to the `master` branch to trigger the command `npm run deploy -- -m "Deploy React app to GitHub Pages"` from step 7 to run. 

If you complete step 9 and this step (step 10) before completing step 7, you can then complete step 8 and forego completing step 7 as will be run automatically.

1. In the top-level the directory storing your React app source code, add a file at the path `.github\workflows\deploy.yml`. In this file, copy the following code:

    ```yml
    name: Deploy React App

    on:
      push:
        branches:
          - master
    
    jobs:
      deploy:
        runs-on: ubuntu-latest
    
        steps:
        - name: Checkout repository
          uses: actions/checkout@v2
    
        - name: Set up Node.js
          uses: actions/setup-node@v2
          with:
            node-version: '14'
    
        - name: Install dependencies
          run: npm install
          env:
            CI: false
    
        - name: Configure Git
          run: |
            git config --local user.name "${{ github.actor }}"
            git config --local user.email "${{ github.actor }}@users.noreply.github.com"
            git remote set-url origin https://x-access-token:${{ secrets.GITHUB_TOKEN }}@github.com/${{ github.repository }}.git
    
        - name: Run deploy script
          run: npm run deploy -- -m "Deploy React app to GitHub Pages"
          env:
            CI: false
            GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    ```
    
2. Allow workflow to have write permissions to the repository:  
    1. Navigate to the **General Actions** settings page
       1. In your web browser, navigate to the GitHub repository
       1. Above the code browser, click on the tab labeled "Settings"
       1. In the sidebar, in the "Code and automation" section, click on "Actions" > "General"
    1. Configure the "Workflow permissions" settings like this: 
       1. Select the "Read and write permissions" option
    1. Click on the "Save" button

3. Push the updated source code with the deploy workflow to the GitHub repository.  
   
   ```shell
   $ git add .
   $ git commit -m "Created workflow to automate deployment to GitHub Pages on pushes to master"
   $ git push origin master
   ```

# References

1. [The official `create-react-app` deployment guide](https://create-react-app.dev/docs/deployment/#github-pages)
2. [GitHub blog: Build and deploy GitHub Pages from any branch](https://github.blog/changelog/2020-09-03-build-and-deploy-github-pages-from-any-branch/)
3. [Preserving the `CNAME` file when using a custom domain](https://github.com/gitname/react-gh-pages/issues/89#issuecomment-1207271670)

# Notes

- Special thanks to GitHub (the company) for providing us with the GitHub Pages hosting service for free.
- And now, time to turn the default React app generated by `create-react-app` into something unique!
- This repository consists of two branches: 
    - `master` - the _source code_ of the React app
    - `gh-pages` - the React app _built from_ that source code

 # Contributors

Thanks to these people for contributing to the maintenance of this tutorial.

<!--

Template:
---------

<a href="https://github.com/____" target="_blank" title="____">
  <img src="https://github.com/____.png?size=40" height="40" width="40" alt="____" />
</a>

Instructions:
-------------

1. Copy the template and paste it below.
2. Replace the four "____" strings with the contributor's GitHub username.

Note: I specified the avatars using HTML because, when I did so using Markdown,
      only the _custom_ avatars appeared at the size I specified via the URL
      (e.g. 40px squared, for `https://github.com/gitname.png?size=40`);
      the GitHub-generated avatars seemed to ignore the size parameter and,
      instead, appear at their full size (approximately 420px squared).
      By using HTML, I can force _both_ types to appear at 40px squared.

-->

<a href="https://github.com/gitname" target="_blank" title="gitname">
  <img src="https://github.com/gitname.png?size=40" height="40" width="40" alt="gitname" />
</a>
<a href="https://github.com/rhulse" target="_blank" title="rhulse">
  <img src="https://github.com/rhulse.png?size=40" height="40" width="40" alt="rhulse" />
</a>
<a href="https://github.com/AbhishekCode" target="_blank" title="AbhishekCode">
  <img src="https://github.com/AbhishekCode.png?size=40" height="40" width="40" alt="AbhishekCode" />
</a>
<a href="https://github.com/adnjoo" target="_blank" title="adnjoo">
  <img src="https://github.com/adnjoo.png?size=40" height="40" width="40" alt="adnjoo" />
</a>
<a href="https://github.com/thebeatlesphan" target="_blank" title="thebeatlesphan">
  <img src="https://github.com/thebeatlesphan.png?size=40" height="40" width="40" alt="thebeatlesphan" />
</a>
<a href="https://github.com/valerio-pescatori" target="_blank" title="valerio-pescatori">
  <img src="https://github.com/valerio-pescatori.png?size=40" height="40" width="40" alt="valerio-pescatori" />
</a>
<a href="https://github.com/jackweyhrich" target="_blank" title="jackweyhrich">
  <img src="https://github.com/jackweyhrich.png?size=40" height="40" width="40" alt="jackweyhrich" />
</a>

This list is maintained manually—for now—and includes (a) each person who submitted a pull request that was eventually merged into `master`, and (b) each person who contributed in a different way (e.g. providing constructive feedback) and who approved of me including them in this list.
