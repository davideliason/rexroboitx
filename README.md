## Where is Rex?
### [David Eliason](http://davethemaker.com/)
### June 26, 2017

### Description

**General:** 

My ultimate goal is to create a raspberry pi server rendering real-time data using React components, using data from connected sensors (like GPS module). This would include node.js and express on the backend, with React/Redux on the front-end. 

This application's goal is to create a sandbox working towards that goal - it will use node and express, and will serve the front-end react UI, using **webpack** (which will bundle the client-side clode into static files). Data will be in the form of hard-coded JSON objects mirroring that of a GPS device. **React/Redux** functionality will be explored. This will be hosted on Heroku.

By the way, the reason why data persistence will be using state/store is because the next level would be to enable data persistence using a variety of options, depending on the env and/or project: possibly cloud hosting or a local instance of a db (on the rpi for example.) But connecting these dots will be a great first step :)

**Sepcifically:**

The goals of this app will be the following:
1. work with node.js and express to spin up a server
2. serve up an index.html file that will be populated with data using React and Redux, using state and props for unidirectional data flow.
3. Use webpack and babel (not using CRA)
4. The app will use input fields to allow the user to add sample GPS data, this will act like a sensor providing data updates. This data will be added to the React state. 
5. Possible addition: use of react-router to build out single page app (parse different data points)
6. Possible use of mLab for MongodB


**Areas To Learn:**

- working with react, redux
- Heroku deployment with node.js, etc
- tying everything together


#### Steps
1. create repo with package.json, set up Git tracking
2. Folder structure: src --> client [react,css,js] server
3. create .babelrc file to config Babel, which will be used to work with ES6 and React in regular browsers. Presets are needed plugins to work: 
	- preset **'env'** allows us to use babel-preset-es2015, babel-preset=es2016, and babel-preset-es2017 ==> es5
	- preset **'react'** allows us to use JSX ==> regular JS
4. Install [ESLint](https://eslint.org/docs/user-guide/getting-started) and config with .eslintrc.json file
5. Install nodemon and config in nodemon.json file
	- nomeon monitors server code and restarts the server on such changes, good for dev not productions
	- watching the files in 'src/server'
6. spin up **Express server** at src/server/index.js

#### Lessons Learned

- 

#### Resources
[Heroku related](https://medium.com/@katestamas/heroku-deployment-with-react-node-mongoose-and-webpack-ff37bd80d7af)
[Webpack related](https://hackernoon.com/full-stack-web-application-using-react-node-js-express-and-webpack-97dbd5b9d708)

