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
docker run \
      --env DB_U=uselss \
      --env DB_P=uP@55 \
      --env DB_H=144.126.222.91 \
      --env DB_C=27017/UUCAPI?retryWrites=true&w=majority \
      -d --net useless-net -p 4444:4444 --name uback \
      shyaboi/uback \
      

docker run -d --net useless-net -p 3000:3000 --name ufront shyaboi/ufront