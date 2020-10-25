The movie box
=======================

This is a simple web application build from scratch to display the movie information getting from TheMovieDb (https://themoviedb.org).

## Installation

* Clone Project
```bash
git clone https://github.com/nic269/the-movie-box.git
```
* Create environment file
```bash
cp .env.example .env
```

* Install dependencies
```bash
yarn or npm install
```

## Run development

```bash
yarn start or npm start
```

## Build production

```bash
yarn build or npm run build
```

## Technical stack
- **Core Technologies**: [React](https://facebook.github.io/react/), [Redux](http://redux.js.org/), [Redux saga](https://redux-saga.js.org/), [Webpack](http://webpack.github.io/)
- **Ant Design**: A design system for react elements. [Link](https://ant.design/)
- **Immer**: For handling immutable state. [Link](https://immerjs.github.io/)
- **Styled components**: For styling react component. [Link](https://styled-components.com/)
- **Reselect**: For creating selectors with memoize. [Link](https://github.com/reduxjs/reselect)
- **Connected-react-router & react-router-dom**: For handling router. [connected-react-router](https://github.com/supasate/connected-react-router) , [react-dom](https://reactrouter.com/)
- **Lodash**: A JavaScript utility library delivering consistency, modularity, performance, & extras. [Link](https://lodash.com/)
- **Dotenv** Allows developers to specify environment variables locally via the `.env` file placed at project root folder. An example has been placed in the root of the project under: `.env.example`, to make use of it simply copy it over to `.env` and configure it as required. [Link](https://github.com/motdotla/dotenv)
