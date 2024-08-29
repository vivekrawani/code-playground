method 1:
before running the index.js file

```bash
    export KEY=value
```
value can be put in quotes or without quotes

now how to pass env to Docker image

method 1: 
put it in the Dockerfile  ------> not safe

method 2:
pass it when running the instance of the image

```bash
docker run -p 3000:3000 -e key=value image-name
```