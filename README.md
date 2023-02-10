# PickUp - Basketball Game Finder

LINK TO WEBSITE  


## [Back-end API Github link](https://github.com/ZacharyHLong/pickup-api)

## [Front-end React Github link](https://github.com/harryrw/pickup-frontend)

## Description

The PickUp app is a simple application used to help you create and find local basketball games. This app is designed for people who want to play basketball, but might not have a regular group of people to play with. You can search for local games, and express your interest in joining the game. PickUp also provides users with information for any locally registered courts, along with the ability to register a court of their own. Users can filter registered courts by state.  
  
The following README is for both the front-end and back-end portions of the full-stack application. Links to the front-end and back-end repositories are provided at the top of the README file.

---

## Libraries Used

* React
  * A front-end JavaScript library for building user interfaces, predominantly used in the construction of web applications, like this one. React includes numerous features for UI construction such as reusable components, state and prop management, and a virtual DOM. The virtual DOM (Document Object Model) allows the UI to updated without requiring a complete render of the entire component tree. The front-end of the application was built using React, and many of the subsequent libraries mentioned are React dependent.
* react-router-dom
  * A React based library that enables developers to add routing to their React apps. React-router-dom is used to define the different routes in the PickUp app, and provides components like 'Link' to allow users to flow seamlessly between pages.
* Mongoose
  * A ODM (Object Data Modeling) library for MongoDB in Node.js applications. It is used to manage the relationships between the data in the database. Mongoose provides the ability for developers to define a schema and validate it. A Mongoose API provides all the CRUD functionality necessary to interact with the database. The back-end API was built using Mongoose, with all the queries necessary to fetch the appropriate data being defined there.
* CORS
  * Cross-Origin Resource Sharing (CORS) is security based middleware for Node.js applications, and used in conjunction with Express. CORS allows the developer to configure the API's web security to help control access to the query parameters in the API.
* dotenv
  * A Node.js library used to manage environment variables. Typically, environment variables store important information that should not be shared with the public. In the case of the PickUp application, the database connection string has been stored in the .env file, preventing the database from being accessible from unwanted sources. In the application, dotenv is used to load the connection string from the .env file.
* jest
  * A JavaScript testing library that is used in both the front-end and back-end environments (that use JavaScript code). For the PickUp app, the jest library was used for back-end testing. Jest contains several tools to allow developers to check their code coverage and assertions. Jest allows developers to identify and resolve any bugs early on in the development of the application.
* supertest
  * A testing library used testing HTTP endpoints. Using supertest, allows developers to simulate HTTP requests in a testing environment and make assertions about the response. All CRUD functionalities can be mocked with supertest. Naturally, supertest was used in the testing of the back-end of the application.
* react-testing-library
  * A testing library designed for React applications, with a focus for testing components from the user's perspective. The react-testing-library was used in conjunction with vitest to write tests for several components in the front-end application.
* jsdom
  * A JavaScript library that allows developers to use the DOM within a Node.js environment. There are several uses for this, but in the case of developing PickUp, jsdom was used to mock HTML elements in the testing environment. This allowed the react-testing-library to test the components in a similar environment to the browser, all while operating from within Node.js.

---

## Tech Stack

* IDE: VScode
* Front-end framework: React
* Back-end framework: Express
* Node.js
* Database: MongoDB
* Libraries: Mongoose, CORS, dotenv, jest, supertest, react-testing-library, vitest, jsdom, react-router-dom
* Atlas DB
* Version control: Git
* Project management software: Trello

---

## Project Management Methodology

For the current project we employed an Agile project management methodology. Entering into this project, we placed an emphasis on keeping the project organised and structured. Having never completed a full-stack application before, we wanted to ensure that the project management methodology we choose was flexible, allowing us to adjust and adapt the plan when necessary.  
  
In planning, we initially broke down the application into smaller components and features, each with their own trello card. each component had a checklist that broke down the necessary (and sometimes not necessary) elements of the component. These components were used as a guide to help execute the coding of the project. In completing the project, if we identified that certain elements of the component were absent, or found potential improvements, we would discuss and then adjust the card as necessary.
  
We conducted daily morning meetings consisting of:

* Sprint planning (task delegation)
* Check-ins
* Code reviews
* Alterations to any cards on the trello board

Once our sprint(s) had been decided the card was moved to the sprint board. This would then make the card(s) in the sprint board our priority focus, and once completed the card was then moved to the 'quality assurance' board - for review the next meeting. Some tasks were not entirely completed, or in some situations put on hold, in favour of another sprint. These tasks were added to the 'in progress' board.

The following is a link to our trello board:  
### [Trello Board](https://trello.com/b/GObk5Xc6/pickup)

Photos of how our trello board progressed can be found here:
INSERT FOLDER OF PICS

---

## Project Task Delegation

Task delegation was determined and discussed in our morning meetings. Being a group of two people, and both with an interest on all aspects of a full-stack application, we decided to keep the task delegation relatively flexible and adaptive. On initialising the application we each set up either the front-end (Harry) or back-end (Zac), with Harry expressing more of an interest in front-end work and Zac in the back-end work. As the project progressed, we both needed to work on all aspects of the project, but many tasks were delegated in accordance with the initial division of work. Harry worked on many of the front-end components and styling, whilst making back-end changes when necessary. Zac developed the back-end API, and designed a few front-end components. Several life events out of our control (i.e. job interviews and health) affected our task delegation, with the group member not affected by any life events taking charge of the current sprint. Tasks were assigned in Trello, but with a lot flexiblity in the delegation of tasks there was quite a bit of overlap. For any tasks that either of us were struggling with, we would either meet in person, or screen share on discord to troubleshoot the issue.

---

## User Production Testing

User production testing was conducted both in the intial development of the application, and after the application had been deployed. As features were developed, the developers would then test the flow to ensure it worked as intended and within a logical sense. Several issues were identified during this process, like the 'state' not being passed through, or certain components not displaying correctly (either in mobile view or desktop). 

---

## User Development Testing

As the API was being devloped, user testing was conducted using the API platform -  Postman. Postman allows the developer to conduct API testing by sending HTTP requests to the API, and receive the relative requests from it. Status codes and error messages were used to identify any issues with the API. Several issues were resolved using the Postman platform, and the API was tested using Postman throughout the development of the application. The following is a link to the Postman collection: 

[Postman Collection]()

---
