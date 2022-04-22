const express = require("express");
const router = express.Router();

const { createOrder, getAllOrder } = require("../controllers/orderController");

router.route("/order/new").post(createOrder);
router.route("/orders").get(getAllOrder);

module.exports = router;
