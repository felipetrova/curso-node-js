# NodeJS server

A simple base for servers with the technologies:
![enter image description here](assets/nodejs.svg) ![enter image description here](assets/docker.svg) ![enter image description here](assets/mongodb.svg)

## How to run
 - Access your path: `cd navigate/to/your/path`;
 - Run and installing packages with `npm install`;
 - Install [Docker](https://www.docker.com/) in your machine;
 - After install Docker, install MongoDB VM with: `docker pull mongo`;
 - Up a new container with: `docker run --name mongodb -p 27017:27017 -d mongo`. To run this container after restart system, run: `docker start mongodb`
 - Check in your browser if [http://localhost:27017/](http://localhost:27017/) return a message like `It looks like you are trying to access MongoDB over HTTP on the native driver port.`;
 - Download and install [Robo 3T](https://robomongo.org/) to test and connect in your database to see the schemas, tables, etc...;
 - Finally, run: `npm run dev`