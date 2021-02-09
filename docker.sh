#!/bin/bash

# build the app containers
docker build -t shyaboi/uback .

docker build -t shyaboi/ufront .

# create the network
docker network create useless-net


# start the node app containers
docker run -d --net useless-net -p 4444:4444 --name uback shyaboi/u-api-back

docker run -d --net useless-net -p 3000:3000 --name uhome shyaboi/u-api-home
