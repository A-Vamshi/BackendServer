import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
    return res.send({ title: "GET all subscriptions" });
});

subscriptionRouter.get("/:id", (req, res) => {
    return res.send({ title: "GET subscription details by id" });
});

subscriptionRouter.post ("/", (req, res) => {
    return res.send({ title: "CREATE subscription" });
});

subscriptionRouter.put("/:id", (req, res) => {
    return res.send({ title: "UPDATE subscription by id" });
});

subscriptionRouter.delete("/:id", (req, res) => {
    return res.send({ title: "DELETE subscription by id" });
});

subscriptionRouter.get("/user/:id", (req, res) => {
    return res.send({ title: "GET all user subscriptions" });
});

subscriptionRouter.put("/:id/cancel", (req, res) => {
    return res.send({ title: "CANCEL a subscription by id" });
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
    return res.send({ title: "GET upcoming renewals" });
});

export default subscriptionRouter;