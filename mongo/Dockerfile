FROM mongo:latest

# use 'RUN' to execute commands in the container's bash terminal
RUN apt-get update -y
RUN apt-get remove mongodb-org -y
RUN apt-get install mongodb -y
RUN mkdir -p ./data/db
RUN service mongodb start -y

# expose MongoDB's default port of 27017
EXPOSE 27017 