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

$ npm run install
$ npm run start
```

Navigate to http://localhost:8080/ in browser to view project in development environment.

### Testing 
Project uses Jest to test functions and components: 

```
$ yarn test

or

$ npm run test
```
#### Activate eslint
To activate eslint - go to webpack.config.js file and comment in the "eslint-loader" section.

## Build project
Compile development files @ **src** into production files @ **dist**:
```
$ yarn build

or

$ npm run build
```

