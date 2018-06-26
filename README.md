## Where is David?
### [David Eliason](http://davethemaker.com/)
### June 26, 2017

### Description

**General:** 

My ultimate goal is to create a raspberry pi server rendering real-time data using React components, using data from connected sensors (like GPS module). This would include node.js and express on the backend, with React/Redux on the front-end. 

This application's goal is to create a sandbox working towards that goal - it will use node and express, and will serve the front-end react UI, using webpack. Data will be in the form of hard-coded JSON objects mirroring that of a GPS device. React/Redux functionality will be explored. This will be hosted on Heroku.

By the way, the reason why data persistence will be using state/store is because the next level would be to enable data persistence using a variety of options, depending on the env and/or project: possibly cloud hosting or a local instance of a db (on the rpi for example.) But connecting these dots will be a great first step :)

**Sepcifically:**

The goals of this app will be the following:
1. work with node.js and express to spin up a server
2. serve up an index.html file that will be populated with data using React and Redux, using state and props for unidirectional data flow.
3. Use webpack and babel (not using CRA)
4. The app will use input fields to allow the user to add sample GPS data, this will act like a sensor providing data updates. This data will be added to the React state. 
5. Possible addition: use of react-router to build out single page app (parse different data points)


**Areas To Learn:**

- working with react, redux
- Heroku deployment with node.js, etc
- tying everything together


#### Steps


#### Lessons Learned

