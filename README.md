# CSC 468: Intro to Cloud Computing

## Vision
![Project Diagram](/src/diagram.png "Project Diagram")

## Project Proposal
**Project Idea is taken from "Project Overview" Lecture**

### The Visitor Counter
I plan on using a Node.js web server that will communicate with a Redis database to interact with an integer "visitor_counter" that will increment and return a value when a user connects to the web server. 

#### Component 1: Node.js Web Server
A simple web server that will display the integer X. The web server will communicate with Redis to retrieve the value, increment it, replace it and finally display it to the user.

#### Redis
A database that will be storing the integer value for Node.js to interact with. It will store the value "visitor_counter" for the Node.js web server to interact with.