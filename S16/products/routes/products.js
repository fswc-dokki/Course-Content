const router = require("express").Router();

/**
 * @type array
 */
const data = require("../products.json");
const Product = require("../models/product");

// Routes
router.get("/", (req, res) => {
  Product.find({}, (err, data) => {
    if (err) {
      console.error(err);
    }
    res.status(200).send(data);
  });
});

router.get("/:id", (req, res) => {
  if (req.params.id > data.length) {
    res.sendStatus(404);
  } else {
    res.send(data[req.params.id]);
  }
});

router.post("/", (req, res) => {
  const { name, price, amount } = req.body;
  if (name === undefined || price === undefined || amount === undefined) {
    res.sendStatus(400);
    return;
  }
  data.push(req.body);
  console.log(data);
  res.sendStatus(200);
});

router.put("/:id", (req, res) => {
  if (req.params.id >= data.length) {
    res.sendStatus(404);
    return;
  }

  const { name, price, amount } = req.body;
  if (name === undefined && price === undefined && amount === undefined) {
    res.sendStatus(400);
    return;
  }

  console.log("data before: ", data[req.params.id]);
  for (let k in data[req.params.id]) {
    if (req.body[k] !== undefined) data[req.params.id][k] = req.body[k];
  }
  console.log("data after: ", data[req.params.id]);
  res.sendStatus(200);
});

router.delete("/:id", (req, res) => {
  if (req.params.id >= data.length) {
    res.sendStatus(404);
    return;
  }
  data.splice(req.params.id, 1);
  console.log(data);
  res.sendStatus(200);
});

module.exports = router;
