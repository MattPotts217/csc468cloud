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

## Build Process
### Dockerfile
I chose node:18-alpine so that I would have a Node container running without having to do a lot of work to get it started as opposed to using something like Ubuntu. After that I copy in the package.json and package-lock.json files so that when I run "npm install" (next line) the packages required are already known. Finally, I copy in the rest of the server folder so it has access to the server.js file, and then run server.js after exposing port 3000.

## Networking
Both containers are under the "csc468cloud" Docker network server. As Node is exposed on port 3000, it is able to be connected to from outside using the CloudLab url. Since both containers are running in the same network, I do not need to worry about exposing the Redis port to the outside world, and connection can be handled by server.js.

## File Structure
### root
Contains profile.py, provides the information for starting the node in CloudLab. Provided by Dr. Ngo.
### docker
Contains install_docker and other files related to Docker. install_docker is provided by Dr. Ngo, with changes made by me to start the container on installation and made some changes to file paths.
#### containerd
Contains the file config.toml provided by Dr. Ngo. Contains runtime information.
##### docker_config
Contains all files related to docker:
 - daemon.json:
    Contains information for the Docker daemon. File provided by Dr. Ngo.
 - docker-compose.yml:
    Contains information for docker-compose. Maps port 3000 for connection outside of the container.
 - Dockerfile:
    Contains information for creating new images in Docker. When a container is created, it runs src/server/server.js to start the server.

### server
Contains files for the server. 