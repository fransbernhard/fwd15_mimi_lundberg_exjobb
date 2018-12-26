# magdenmagden
This is a responsive website that presents information about the artist Magda Lundberg and the products she provides. The website is built with the JavaScript framework React.js and the technical solution include HTML5, CSS3, ES6, jQuery, Webpack2 and Jest for testing.

## Installation
*Project requires Node.js v6+ to run.*

Clone the project to you're local repository. Install the dependencies + devDependencies and start backend server:
```
$ cd yourLocalRepositoryRoot
$ yarn install
$ yarn start

or

$ npm install
$ npm run start
```

Navigate to http://localhost:8888/ in browser to view project in development environment.

### Testing with Jest
Project uses Jest to test functions and components:

```
$ yarn test

or

$ npm run test
```

### Visual regression testing with backstop.js
Project uses backstopJS to visually present edits to client. Navigate to *magdenmagden/node_modules/backstopjs/* in terminal and run:

```
$ npm run reference
```

this will generate a folder in *magdenmagden/backstopdata* called "bitmaps_reference" that contains images of projects current state. After you've made edits, run:

```
$ npm run test
```

this will generate another folder called "bitmaps_test" and inside there will be a date-named folder with the differences and your browser will automatically open and display comparisons from initial state to edited state.

#### Activate eslint
To activate eslint - go to webpack.config.js file and comment in the "eslint-loader" section.

## Build project
Compile development files @ **src** into production files @ **dist**:
```
$ yarn build

or

$ npm run build
```
