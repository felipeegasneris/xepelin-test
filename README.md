

# XepelinTest

## Requirements

 > Create an app in React using the given API with the given requirements:

- Have a left sidebar with two buttons: New Post and List posts
- New Posts tab should:
- Be able to Create a new posts with title, body and userId, to the API
- Validate fields as required, except the userId that is hidden.
- Show an error if the requirements are not met.
- List Posts tab should have:
- List all the users in the api (Eg: [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts))
- If a Post is clicked, it should send you to the post details page
- Post detail
- It should show all the info of the post (from the API)
  (Eg: [https://jsonplaceholder.typicode.com/posts/2](https://jsonplaceholder.typicode.com/posts/2))

For the API you can use [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)

- Extra credit:
- Paginate the list of post with infinite scroll (5 posts per page)
- Use prebuilt components like material ui, bootstrap, etc._

## Solution

This project was generated using [Nx](https://nx.dev).
 I try to implement a CLEAN architecture for the core lib and a simple react SPA app 
for the presentation layer, without global state management, just reactQuery  lib for the REST API, and hooks.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.




