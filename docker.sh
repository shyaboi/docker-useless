#!/bin/bash

# build the app containers
docker build -t shyaboi/uback .

docker build -t shyaboi/ufront .

# create the network
docker network create useless-net

docker run -d --net useless-net -p 27017:27017 --name mong \
      -e MONGO_INITDB_ROOT_USERNAME=uP@55 \
      -e MONGO_INITDB_ROOT_PASSWORD=useless \
      mongo
# start the node app containers
docker run -d --net useless-net -p 4444:4444 --name uback shyaboi/uback

docker run -d --net useless-net -p 3000:3000 --name uhome shyaboi/ufront