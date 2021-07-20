:: This Will build an image of the app and server it on localhost:4000
docker build -t "express:app" ./
docker run --rm -d -p 4000:4000 express:app