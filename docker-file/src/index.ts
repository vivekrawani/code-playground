
import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();
app.use(express.json());

const client = new PrismaClient();

app.get("/", (req, res) => {
    console.log((new Date()).toString(), ":", req.url , ":",  req.method,  ":", req.ip);
    res.send("Server is healthy!");
})

app.post("/", async (req, res) => {
    console.log((new Date()).toString(), ":", req.url , ":",  req.method,  ":", req.ip);

    await client.user.create({
        data: {
            email: req.body.email,
            name: req.body.name
        }
    })

    res.json({
        message: "Done signing up!"
    })
})

app.listen(3000);