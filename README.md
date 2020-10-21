# Running the Code Challenge

## Instructions for running
1. `npm install` - install packages
1. `ng build --prod` - get a prod build into the `dist` folder
1. `npm run startDev` - starts the backend server and frontend server
   + this starts things with nodemon so that the database will keep up with changes
1. navigate to [http://localhost:5200/](http://localhost:5200/) to see the app

## Disclaimers

I don't advocate for sending usernames/passwords in clear text in the URL AT ALL. I did it in this project to save on time and implementation.. Usually I would use some sort of token system or cookie system with a jwt and then authenticate using that and pass that back and forth using middleware on the back end to check it with each api call (cant trust anything the front end sends).

## Things I learned

1. lowdb is pretty awesome, I've heard of json databases before but I have never used one before. I'll be using this on other projects to quickly prototype database stuff for sure
1. When I first sat down with paper to figure out how I wanted to tackle this project I quickly realized that I let my imagionation run away and needed to scale it back because of one word in the title of the exercise. Simple.. I guess sometimes I get carried away on what could be instead of what the requirements are, even on a quick project
1. I have a "style". I wrote this app in a VERY similar style to several other apps I've written in the last couple months in my own time. I found myself going back to code I had recently written to look things up. While it's good to have a style and something to go back on, I realized that maybe I need to branch out a little bit and put a little more "hot sauce" in my arsenal and spice things up a bit. 

# Simple Developer Exercise 

The savvy cats over at SMART Pump would like to be able to allow users to login to their account, check their balance and update their personal details. Write a simple web application (API and UI) using node.js and lowdb that lets users accomplish those tasks. 

Feel free to use any other libraries or tool chains as long as the core code is javascript and node.js. npm (https://www.npmjs.org) is your friend - no need to recreate the wheel. 

You will find the base data file in `/data`

Wireframes: `assets/wireframes.png`

## Time limits

This exercise is meant showcase your creativity and talent in problem solving against a real world scenario. To that end it should not consume your every waking moment. We recommend at max spending 3 evenings of time on the exercise. 

## Requirements

* Login to the app via email and password
* Restrict access to valid a User
* Once logged in show the details of the user on the page
* Authorized users can check their account balance
* Allow the user to change their details
* lowdb (DB) -> https://github.com/typicode/lowdb
* node.js -> http://nodejs.org/ 

## Bonus Points

* Fully responsive UI
* Unit Tests of the API
* Functional Tests of the UI
