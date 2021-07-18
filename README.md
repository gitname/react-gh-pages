# Deploying a React App* to GitHub Pages

\* created using `create-react-app`

# Introduction

In this tutorial, I'll show you how I deployed a React app—which I created using `create-react-app`—to GitHub Pages.

You can visit the deployed app, at [https://gitname.github.io/react-gh-pages/](https://gitname.github.io/react-gh-pages/).

This repository contains the files related to the app. The `master` branch contains the app's source code (i.e. the code the app's developers edit), and the `gh-pages` branch contains a *built* version of the app (i.e. the files that GitHub Pages sends to visitors' web browsers when they visit [https://gitname.github.io/react-gh-pages/](https://gitname.github.io/react-gh-pages/)).

The remainder of this document contains a tutorial on creating a React app (using `create-react-app`) and deploying that app to GitHub Pages.

# Tutorial

## Prerequisites

1. [Node.js](https://nodejs.org/) (i.e. `node`), `npm`, and `npx` are installed. Here are the versions I used when writing these instructions:

    ```sh
    $ node --version
    v14.17.0

    $ npm --version
    6.14.13

    $ npx --version
    6.14.13
    ```
    
    > Note: According to [this page about Create React App](https://reactjs.org/docs/create-a-new-react-app.html#recommended-toolchains) on the React.js website, the minimum compatible versions are `node >= 10.16` and `npm >= 5.6` (they do not indicate a minimum compatible version of `npx`).

1. You have a [GitHub](https://www.github.com) account. :octocat:

1. You have a command-line [Git client](https://help.github.com/articles/set-up-git/) that you can use to `push` code to GitHub.

## Procedure

1. **Create a new, *empty* repository on GitHub.** (2 minutes)

    * You can create a new, empty repository by logging into your GitHub account and filling out [this form](https://github.com/new). By *empty*, I mean *without* a `README.md` file, a `.gitignore` file, a `LICENSE` file, or any other files.

        > **Example:**  Enter the repository name, "`my-github-repo`".

2. **Create a new React app on your computer.** (5 minutes)

    1. Issue the following command, replacing `{appname}` with the name you want your React app to have. This name does _not_ have to match the name of the GitHub repository.

        ```sh
        $ npx create-react-app {appname}
        ```

        > This will create a new folder named `{appname}` (i.e. whatever you named your app) in the current folder. The newly-created folder will contain the source code of a basic React app you will _build_ and deploy in a later step.

        > **Example:** `$ npx create-react-app my-react-app` will create a folder named `my-react-app`.

3. **Install the [`gh-pages`](https://www.npmjs.com/package/gh-pages) package as a "dev-dependency" of the app.** (1 minute)

    1. Issue the following commands to install the package, replacing `{appname}` with the name of your newly-created React app.

        ```sh
        $ cd {appname}
        $ npm install gh-pages --save-dev
        ```

        > **Example:** If your React app is named `my-react-app`, the first command above would be `$ cd my-react-app`.

4. **Add some properties to the app's `package.json` file.** (3 minutes)

    1. At the top level of the JSON object, add a "`homepage`" property having the value shown below. Replace `{username}` with your GitHub username, and replace `{reponame}` with the name of the GitHub repository you created in step 1.
    
        ```diff
        {
           "name": "{appname}",
        +  "homepage": "https://{username}.github.io/{reponame}",
           "version": "0.1.0",
        ```
        
        > **Example:** Since my GitHub username is `gitname` and the name of the GitHub repository I created in step 1 is `my-github-repo`, I would give the "`homepage`" property the value: `"https://gitname.github.io/my-github-repo"`
   
    1. In the existing "`scripts`" property, add a "`predeploy`" property and a "`deploy`" property, each having the values shown below:

        ```diff
          "scripts": {
        +   "predeploy": "npm run build",
        +   "deploy": "gh-pages -d build",
            "start": "react-scripts start",
        ```
    
    _Side note:_ The above `"homepage"`, `"predeploy`", and `"deploy`" values will enable you to deploy the React app as a GitHub _project_ page (e.g. `https://username.github.io/reponame`). If you want to deploy it as a GitHub _user_ page (e.g. `https://username.github.io`) or as a _custom domain_ page (e.g. `https://example.com`), you can do so by modifying the `"homepage"` value as described [here](https://create-react-app.dev/docs/deployment/#step-1-add-homepage-to-packagejson) and modifying the `"deploy"` value as described [here](https://create-react-app.dev/docs/deployment/#step-2-install-gh-pages-and-add-deploy-to-scripts-in-packagejson).

6. **Add the GitHub repository as a "remote" in your local Git repository.** (1 minute)

    1. In the root folder of your app, issue the following command, replacing `{username}` with your GitHub username, and `{reponame}` with the name of the GitHub repository you created in step 1.

        ```sh
        $ git remote add origin https://github.com/{username}/{reponame}.git
        ```
    
        >**Example:**  Since my GitHub username is `gitname` and the name of the GitHub repository I created in step 1 is `my-github-repo`, I would issue the command: `$ git remote add origin https://github.com/gitname/my-github-repo.git`

        > _Note:_ This URL will be used by both Git and the `gh-pages` package. Git will, as always, use it to determine where to push your source code when you run `$ git push`. The [`gh-pages`](https://github.com/tschaub/gh-pages#command-line-utility) package will use it to determine where to upload the _built_ app files during the deployment process.

7. **Generate a *production build* of your app, and deploy it to GitHub Pages.** (2 minutes)

    1. In the root folder of your app, issue the following command:

        ```sh
        $ npm run deploy     
        ```

        > That will run the `predeploy` and `deploy` scripts (in that order) defined in `package.json`. Specifically, it will build a "distributable" (i.e. production) version of your React app and store that in the `dist` folder; then, it will deploy the contents of the `dist` folder to GitHub Pages.

        > **Troubleshooting:**
        >
        > - **Windows users:** When running the above command within Cmder, the operation may fail with the following error message: 
        >   ```
        >   git-upload-pack '.': git-upload-pack: command not found`.
        >   ```
        >   To work around that, you can update your `PATH` environment variable so it contains the folder in which `git-upload-pack.exe` resides on your computer, then run the above command again; like this:
        >
        >   ```sh
        >   λ PATH="$PATH:/your/path/to/cmder/vendor/git-for-windows/mingw64/bin/"
        >   λ npm run deploy
        >   ```
        >   Thanks to everyone who reported this symptom (see Issues [#8](https://github.com/gitname/react-gh-pages/issues/8#issuecomment-405699418) and [#10](https://github.com/gitname/react-gh-pages/issues/10)) and provided a workaround! :pray:

        * That's it! Your app is now accessible at the URL you specified in the `"homepage"` property of your `package.json` file.

    Congratulations! You just deployed a _built_ version of your app to GitHub Pages. :tada:

8. **Optionally, store your app's _source code_ on GitHub.** (2 minutes)

    At this point, your local Git repository has a `master` branch (this was created automatically when you ran `create-react-app` in step 2) which contains your app's source code. In contrast, your remote GitHub repository has either a `gh-pages` branch (if you deployed your app as a GitHub _project_ page) or a `master` branch (if you deployed it as either a GitHub _user_ page or a _custom domain_ page), which contains the deployed, _built_ version of your app.

    **In other words, at this point, your app's source code only exists on your computer.**
    
    In this step, you will push your app's source code to GitHub for safe-keeping.

    1. In the root folder of your app, issue the following commands. 
        
        If you deployed your app as a **GitHub _project_ page**, replace `{branch}` with `master`.
        
        On the other hand, if you deployed your app as either a **GitHub _user_ page** or a **_custom domain_ page**, replace `{branch}` with `master:src`. That will prevent Git from trying to push your local `master` branch (which contains your app's source code) onto your remote `master` branch (which contains the deployed, _built_ version of your app). Note: You can replace `src` with any branch name you want, except for `master`.

        ```
        $ git add .
        $ git commit -m "Create a React app and publish it to GitHub Pages"
        $ git push origin {branch}
        ```

        > **Example:** Since I deployed my app as a GitHub _project_ page, I would run the command `$ git push origin master` instead of `$ git push origin master:src`

    Congratulations again! In addition to deploying a _built_ version of your app to GitHub Pages, you have also stored the app's source code on GitHub! :tada: :tada:

# References

In addition to the references linked within the instructions, here are some other references I used when writing the instructions:

1. The official [GitHub Pages deployment guide](https://create-react-app.dev/docs/deployment/#github-pages) within the Create React App documentation
