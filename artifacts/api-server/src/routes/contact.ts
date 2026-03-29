import { Router } from "express";
import { logger } from "../lib/logger";

const contactRouter = Router();

contactRouter.post("/contact", async (req, res) => {
  const { firstName, lastName, email, phone, propertyType, message } = req.body;

  if (!firstName || !lastName || !email || !propertyType) {
    res.status(400).json({ ok: false, error: "Missing required fields." });
    return;
  }

  logger.info(
    { firstName, lastName, email, phone, propertyType, message },
    "New contact form submission"
  );

  res.json({ ok: true });
});

export default contactRouter;
