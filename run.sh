#!/usr/bin/env bash
ID=`docker ps -aqf "name=rightflow-web"`
if [ -n "$ID" ]
then
docker kill rightflow-web
docker rm rightflow-web
docker rmi --force rightcom/rightflow-web:latest
fi
docker build -t rightcom/rightflow-web:latest .

docker run -d --name rightflow-web \
-p 9004:9004 \
--restart=always \
rightcom/rightflow-web:latest
