### RightFlow Web app

The app is build on top of the following framework and tools:

- ReactJs(https://github.com/facebook/create-react-app)  
  A javascript library for building modern web app  
  This project is intend to use react-hooks as base

- React Hooks (https://reactjs.org/docs/hooks-intro.html)  
  Let us use state and other React features without writing a class.  
  *** Warning ***  
  All components must be writing with hooks styles  

- Tailwindcss (https://tailwindcss.com/)    
  A utility-first CSS framework for rapidly building custom designs.

- Storybook (https://www.learnstorybook.com/)  
  An open source tool for developing UI components in isolation of framework.  
  We use Storybook for react for this project  
  We have integrated Component live data with `storybook/addon-knobs` for editing component props inside storybook panel (https://github.com/storybookjs/storybook/tree/master/addons/knobs)  
  We have integrated Testing along with Component and display result inside storybook interface `storybook-addon-specifications` (https://github.com/mthuret/storybook-addon-specifications)  

- Unit Test  
    - Enzyme (https://airbnb.io/enzyme/)  
      A JavaScript Testing utility for React that makes it easier to test your React Components' output (https://create-react-app.dev/docs/running-tests#option-1-shallow-rendering)  

    - Jest (https://jestjs.io/)  
      A delightful JavaScript Testing Framework with a focus on simplicity.  

    We recommand use Enzyme to test component for the project. But you can use Jest if you're more confortable with it.  

    
- End to end Test  
    - Cypress (https://www.cypress.io/how-it-works) - [Not yet implemented]
      Fast, easy and reliable testing for anything that runs in a browser.

- Linter  
  We use default CRA eslint (located inside package.json -> eslintConfig)  

  For foratter we use Prettier in local development.  
  We recommand to install Editor Extension for Eslint and Prettier for fast development

- Git hooks  
  We use Prettier to format the code we write automatically to ensure a code style within project.  
      - Prettier  
        An opinionated code formatter with support for JavaScript, CSS and JSON.  
        It'll be run before commits

      - husky  
        Makes it possible to use githooks as if they are npm scripts.  

      - lint-staged  
        allows us to run scripts on staged files in git  

  - Styles components (https://www.styled-components.com)  
  Visual primitives for the component age.  
  We use for styling scoped our components.  

  - CSS Modules (https://create-react-app.dev/docs/adding-a-css-modules-stylesheet)  
    We use CSS Modules to scoped css for our component. It's the main css style for the project.  

- tailwindcss-transitions (https://github.com/benface/tailwindcss-transitions)  
  For css transtion using tailwindcss  

- State management with redux (https://github.com/facebookincubator/redux-react-hook)  
  To manage glabal app state, we use Redux and implement it via React hooks  

- Icons  
  We use materials icons (https://github.com/mui-org/material-ui/tree/master/packages/material-ui-icons) and docs here (https://material-ui.com/components/icons/)  
  Icon list here (https://material-ui.com/components/material-icons/)  

- PropTypes  (https://github.com/facebook/prop-types)
  Runtime type checking for React props and similar objects  

- Internationalization (https://github.com/i18next/react-i18next)
  react-i18next for react done right. Using the i18next i18n ecosystem.  
  ***NOTE** We are using hooks version for react-i18next

### Tutorials for setup tools in project
  - https://dev.to/hagnerd/setting-up-tailwind-with-create-react-app-4jd
  - https://www.learnstorybook.com/intro-to-storybook/react/en/get-started/

### Deployment
  We have built a simple NodeJs server in order to render the app in production.

### Deployment
  We use open source Docker (https://docs.docker.com/get-started/) for app deployment.  
  We have CI/CD triggable from our Jenkins internal Jenkins.  
  We have Docker Swarm (https://docs.docker.com/engine/swarm/) installed inside our servers.  
  We use Git flow (https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) convention four development  
  The deploy branch is ***master***  

## CDe, CI/CD
  1. Create new feature from ***master***, `git checkout master && checkout -b feature/new_feature`  
  2. Create pull request from feature branch to master (on bitbucket on local git)  
  3. Merge PR to master
  4. Access Jenkins online
  5. Run Jenkins (RightFlow web) from jenkins
  6. Create tag when there a stable version in deployment `git tag v1.2`  
  7. Push tag online `git push --tags`

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

