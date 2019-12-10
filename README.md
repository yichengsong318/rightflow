### RightFlow Web app

The app is build on top of the following framework and tools:
- ReactJs(https://github.com/facebook/create-react-app)
  A javascript library for building modern web app

- Tailwindcss (https://tailwindcss.com/)
  A utility-first CSS framework for rapidly building custom designs.

- Storybook (https://www.learnstorybook.com/)
  Storybook is an open source tool for developing UI components in isolation of framework.
  We use Storybook for react for this project

- Unit Test
  - Enzyme (https://airbnb.io/enzyme/)
    Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output

  - Jest (https://jestjs.io/)
    Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
    
- End to end Test
  - Cypress (https://www.cypress.io/how-it-works)
    Fast, easy and reliable testing for anything that runs in a browser.

- Linter
  We use default CRA eslint (located inside package.json -> eslintConfig)

  For foratter we use Prettier in local development. We recommand to install Editor Extension for Eslint and Prettier for fast development

### Tutorials for setup tools in project
  - https://dev.to/hagnerd/setting-up-tailwind-with-create-react-app-4jd
  - https://www.learnstorybook.com/intro-to-storybook/react/en/get-started/

### Deployment
  We have built a simple NodeJs server in order to render the app in production.

### Deployment
  We use open source Docker (https://docs.docker.com/get-started/) for app deployment.
  We have CI/CD triggable from our Jenkins internal Jenkins.
  We have Docker Swarm (https://docs.docker.com/engine/swarm/) installed inside our servers.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn runapp`

Render app in production

