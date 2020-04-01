## What this project is about

This app is a TicketSwap clone - a full-stack app for reselling tickets for different events.
- Any user can see events and tickets with fraud risk percentage.
- Only logged in user can add events and tickets. 
- Fraud risk gets constantly renewed based on ticket price, its time added, its seller activity, etc.
- User can choose the ticket considering fraud risk percentage.

## Table of contents

- [Technologies used](#Technologies-used)
- [Setup](#Setup)
- [Create React App](#Create-React-App)

## Technologies used

- React
- Redux
- Redux-Thunk
- PostgreSQL
- Express
- Sequelize

## Setup

In order to run this App please ensure you have running both client and server.

1. First clone the project
- git clone git@github.com:viktoriachernykh/ticket-swap.git

2. Connect server to database
- cd server
- npm install
- docker run -p 5432:5432 --name ticketswap -e POSTGRES_PASSWORD=secret -d postgres

3. Run the server
- nodemon

4. Run the client
- cd client
- npm install
- npm run start

5. There will be no events on the page because the database is empty right now. Add your events and tickets.

## Create React App

This project was built using the create-react-app cli. 


