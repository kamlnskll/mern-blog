# Fullstack Blog App

## Project Description

This is the first full stack application that I built from scratch without following a tutorial over the summer of 2022. It is a relatively simple blog that features a login page and CRUD functionality available to admin users that allow them to edit, delete and create posts, and all users can read them.

### Technologies used

#### Frontend

* React
* TailwindCSS
* Axios

#### Backend

* Express.js
* Node.js
* MongoDB (Mongoose)

## Project Goals

The goal of this project for me was to breakout of the so-called "Tutorial Hell" and create my first full stack app without following a tutorial of any kind, which I had been until this point. This project was extremely difficult for me because I learned so much including how to implement CRUD functionality, how to effectively communicate with a backend and frontend using APIs and how to create a user auth system. There were many times that I had become stuck for days, sometimes weeks, on some of the features here.

## Features

* Multipage blog application with responsive design
* Login and register system with the ability to create an admin at registration
* Conditionally rendered navbar that changed depending on if user was admin or not
* Admin panel accessible from navbar with full CRUD functionality for Admin users only
# Ability to click on and view posts dynamically in a blog format

## Setup

To setup, you need a MongoDB account and to fill out your details in the .env file. Furthermore, the server and client are seperated in two different folders so you will need to run two terminals for each one.

### Starting the backend

`cd api`

then

`nodemon app.js`

### Starting the frontend

`cd client`

then

`npm start`

## Project Status

This project is done and I have moved onto other, more challenging projects. To be honest, this is not extremely polished because this was my first "real" project, but it is functional with the features I listed above. There will be some bugs in this.

Thank you for checking out this project!
