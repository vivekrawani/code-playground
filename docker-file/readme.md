```bash
    docker build -t image-name .
```


npx prisma migrate dev --name init

```bash
    docker run -p 3000:3000 DATABASE_URL=postgresql://postgres:password@localhost:5432/mydb?schema=public postgres-express-app
```

without docker-compose
1.  we have to start postgress manully

```bash
    docker run --name some-postgres -e POSTGRES_PASSWORD=password -d postgres
```
2. create volumes and attach it manully
3 . create network and attach



## compose 


[source](https://raw.githubusercontent.com/bezkoder/docker-compose-nodejs-postgres/master/README.md)

remeber to migrate in local manully