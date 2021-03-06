# Lost in Translation
The application translates english words in to sign language symbols.

## About the project
When navigating to the root page of the project for the first time, you are asked to create a user.
A 'user' is just a username string which is stored in the browsers local storage. '/profile' and '/translator' paths are guarded,
and they wont be accessible before creating a user.

In the translator page you can translate words in to sign language. The 'translate' button fires the translation event, and corresponding sign language images will be displayed.

The 'profile' page shows your latest translations, limited to max. 10 translation and ordered from newest to oldest. Clicking 'log out' button the application will clear the data from your localstorage and redirect you back to root.

![image of app](https://i.imgur.com/iBj1eZQ.png)

The project is built using [React](https://reactjs.org).

Project was made by Mikko Siukola and Okko Partanen

A live demo of the project can be found at vercel:
https://lostin-translation.vercel.app

## Running the application locally
First clone the repository and then run the following commands in root directory:
### `npm install`
followed by
### `npm start`
