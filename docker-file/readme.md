```bash
    docker build -t image-name .
```


npx prisma migrate dev --name init

```bash
    docker run -p 3000:3000 DATABASE_URL=postgresql://postgres:password@localhost:5432/mydb?schema=public postgres-express-app
```

without docker-compose we have to start postgress manully
```bash
    docker run --name some-postgres -e POSTGRES_PASSWORD=password -d postgres
```
