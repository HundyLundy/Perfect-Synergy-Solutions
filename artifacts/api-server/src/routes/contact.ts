import { Router } from "express";
import { logger } from "../lib/logger";

const WEBHOOK_URL = "https://hook.make.com/inN/webhook-trigger/Upp1pos3mL7UjdCVKsJp";

const contactRouter = Router();

contactRouter.post("/contact", async (req, res) => {
  const { firstName, lastName, email, phone, propertyType, message } = req.body;

  if (!firstName || !lastName || !email || !propertyType) {
    res.status(400).json({ ok: false, error: "Missing required fields." });
    return;
  }

  const payload = {
    firstName,
    lastName,
    email,
    phone: phone || "",
    propertyType,
    message: message || "",
    source: "perfect-synergy-solutions",
    division: "perfect-combo",
    submittedAt: new Date().toISOString(),
  };

  logger.info(payload, "New contact form submission — forwarding to webhook");

  try {
    const webhookRes = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!webhookRes.ok) {
      logger.error({ status: webhookRes.status }, "Webhook returned non-OK status");
      res.status(502).json({ ok: false, error: "Webhook delivery failed." });
      return;
    }

    res.json({ ok: true });
  } catch (err) {
    logger.error({ err }, "Failed to reach webhook");
    res.status(502).json({ ok: false, error: "Could not deliver submission." });
  }
});

export default contactRouter;
