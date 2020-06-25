# Getting started

First off we will need to install `git` . Head on over to https://git-scm.com/downloads and download git command line tools for windows.

After you go through the install process open up a terminal and navigate to a place where you want to store and download this project. Remember `cd ../` navigates up a directory as well as `cd ./someFolder` will navigate downwards.

Once you are in a spot where you want to download this project, run this command in your terminal:

```
git clone https://github.com/vkbrad/our-app.git
```

You may or may not have to enter in your github credentials. When the download is complete navigate into the app:

```
cd ./our-app
```

Now we get to install a new package manager because `npm` kinda sucks. We are going to use `yarn` for this project. So do this:

```
npm i -g yarn
```

After that finishes we need to install all of the packages on your machine to run this react app and server (create-react-app does this by default so you never had to do this by hand):

```
yarn install
```

Now we are ready to run the app!

```
yarn start
```

This command above will start the react app. Go ahead and open that up and follow the instructions to run the server!

Enjoy!
