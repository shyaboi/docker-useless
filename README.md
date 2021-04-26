# [Docker UseLess API](https://uselessapi.com "UseLess API")
[UseLessAPI.com](https://uselessapi.com "UseLess API")

UseLess API is a serverless lambda type endpoint, with a code editor to create your route and customize the code at your endpoint.

# Useage

If you are familier with Express and the app.get function parameter, you can use UseLess in a very similar way.

You can use the function section of this route making API similar in the way you use an app.get function parameter.

So in your code you create you can utilize the response, and request parameters from an app.get 

A typical UseLess API function will be similar to the example below.

`response.json({geeting:"hello world"})`

This will sent the string 'hello world' to the endpoint chosen by the user.
# Documentation 
You can find more documentaion on usesage of UseLess API in the [UseLessAPI.com/docs](https://uselessapi.com/docs "UseLess API docs")

# Technology Used

The server is made with <img src="https://img.shields.io/badge/node.js%20-%2343853D.svg?style=plastic&logo=node.js&logoColor=white"/>|<img alt="Express.js" src="https://img.shields.io/badge/express.js%20-%23404d59.svg?&?style=plastic"/>

The routeing other than the express routes is being handled by <img alt="Nginx" src="https://img.shields.io/badge/nginx%20-%23009639.svg?style=plastic&logo=nginx&logoColor=white"/>

The Front end is made with <img alt="React" src="https://img.shields.io/badge/react%20-%2320232a.svg?style=plasticfor-the-badge&logo=react&logoColor=%2361DAFB"/>|<img alt="Bootstrap" src="https://img.shields.io/badge/bootstrap%20-%23563D7C.svg?style=plastic&logo=bootstrap&logoColor=white"/>


I have included the body and cookie parser to the back end route function so users have access to that currently; along with the response and request parameters of the express app.get route.

# Roadmap
I am currently working on containerizing the routing process so that users will basically have a whole server on their route.

Working on making the editor more responsive and with more options.

Implimenting sercuirty fixes as they come up. In it's current state it is a very vunarable application, but the current level of containerization helps, but we want to seperate routes further by making each route fully in its own docker container.
