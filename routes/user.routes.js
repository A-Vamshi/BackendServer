import { Router } from "express";

const userRouter = Router();


// GET /users -> gets all users
userRouter.get("/", (req, res) => {
    return res.send({ title: "GET all users" });
});

// GET /users/:id -> gets user by id (dynamic)
userRouter.get("/:id", (req, res) => { 
    return res.send({ title: "GET user details" });
});

userRouter.post("/", (req, res) => {
    return res.send({ title: "CREATE new user" }); 
});

userRouter.put("/:id", (req, res) => {
    return res.send({ title: "UPDATE user by id" });
});

userRouter.delete("/:id", (req, res) => {
    return res.send({ title: "DELETE user by id" });
});

export default userRouter;