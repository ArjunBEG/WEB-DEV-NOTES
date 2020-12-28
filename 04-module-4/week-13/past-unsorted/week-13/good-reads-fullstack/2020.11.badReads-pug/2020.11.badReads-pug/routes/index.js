const express = require("express");
const csrf = require("csrf");
const { decodeBase64 } = require("bcryptjs");
const router = express.Router();

const csrfProtection = csrf({ cookie: true });
const asyncHandler = (handler) => (req, res, next) =>
  handler(req, res, next).catch(next);

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const books = await db.Book.findAll();
    res.render("home", { title: "badReads", books });
  })
);

module.exports = {
  express,
  router,
  csrfProtection,
  asyncHandler,
};
