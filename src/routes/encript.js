import express from "express";
import { encript, descri, setAlgoritm } from "../encript/consol";
import { createHash, useHash } from "../password/password";
const router = express.Router();

router.post("/encript", (req, res) => {
  const { text, algoritm } = req.body;
  try {
    setAlgoritm(algoritm);
    const result = encript(text);
    res.render("index/index", { result });
  } catch (error) {
    console.log(error);
    const result = null;
    res.render("index/index", { result });
  }
});

router.get("/", (req, res) => {
  const result = "";
  res.render("index/index", { result });
});

router.post("/desencri", (req, res) => {
  const response = descri(req.body.enc);
  console.log(response);
  res.render("index/des", { response });
});

router.get("/password", (req, res) => {
  res.render("password/index");
});

router.post("/hash", (req, res) => {
  const createhash1 = createHash(req.body.password);

  res.render("password/index", { createhash1 });
});

router.post("/ver", (req, res) => {
  const { password, hash } = req.body;
  const response = useHash(password, hash);
  const createhash1 = true;
  res.render("password/index", { response, createhash1 });
});
module.exports = router;
//export default router;
