## Polling List App

The Polling List App is a React application that periodically polls for new posts from the API. It fetches new posts every 10 seconds and displays them in a table along with their title, URL, created_at, and author.

## Usage:-

The app automatically fetches new posts every 10 seconds from the API.
The fetched posts are displayed in a table, showing their title, URL, created_at, and author.
New posts are added to the existing list.


## Technologies Used:-

React: A JavaScript library for building user interfaces.
Axios: A promise-based HTTP client for making API requests.


## FOLDER Structure:-

src/components/PostList.js: The main component responsible for fetching and displaying the posts.
src/App.js: The entry point of the application that renders the main component.
src/index.js: The file that renders the App component and sets up the root DOM element.
src/index.css: CSS styles for the application.
package.json: The configuration file for npm dependencies and scripts.
README.md: This file you're currently reading.
