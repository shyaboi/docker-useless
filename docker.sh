#!/bin/bash

# build the app containers
docker build -t shyaboi/uback .

docker build -t shyaboi/ufront .

# create the network
docker network create useless-net

docker run -d --net useless-net -p 27017:27017 --name mong \
      -e MONGO_INITDB_ROOT_USERNAME=useless \
      -e MONGO_INITDB_ROOT_PASSWORD=uP%4055 \
      mongo
# start the node app containers
# DB_H="144.126.222.91"
docker run -d --net useless-net -p 4444:4444 --name uback -e DB_H="localhost" -e DB_C="27017/UUCAPI?retryWrites=true&w=majority" shyaboi/uback 

docker run -d --net useless-net -p 3000:3000 --name ufront shyaboi/ufront