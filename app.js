import express from "express";
import { PORT } from "./config/env.js"
import connectToDatabase from "./database/mongodb.js";

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to a private server API!");
});

app.listen(PORT, async () => {
    console.log(`Backend server running on http://localhost:${PORT}`);
    await connectToDatabase();
});

export default app;
