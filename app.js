import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Welcome to a private server API!");
});

app.listen(3000, () => {
    console.log("Backend server running on http://localhost:3000");
});

export default app;