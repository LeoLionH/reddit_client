#Reddit client

## Table of contents

- About Reddit client
- design and architecture
- Installation

### About Reddit client

The Reddit client is a project created to search reddit for specific keywords and return formatted results within the UI. 
It exists as part of a Codecademy project to show understanding of technologies such as React and Redux. 

### design and architecture

Architectural diagrams can be found in the folder ~/designDocs. The technology stack is based on:

- Reddit API for retrieving posts
- Node server who's primary use is to retrieve, cache and format the API results
- Redux state management that is responsible for storing the search and its results client side 
- React client which requests and renders the search results from the Redux store

### Installation

Installation should be as simple as: 

- Downloading the git repo
- Navigating to the directory
- Run 'git install' for dependencies
- Run 'npm run test' to initalize both the server and react-app
