const express = require("express");

const router = express.Router();
const stripe = require("stripe")("sk_test_4uTrPeq8JDUTDumv8qDek87x");

router.post("/", (req, res) => {
  const { userID } = req.params;
  const { name, email, amount, id, token } = req.body;
  console.log("====>", email);
  console.log("====>", token);
  if (!token) {
    res.send("there is no token");
  }
  stripe.customers
    .create({ email: email, source: token })
    .then(customer => {
      stripe.charges
        .create({
          amount: 200,
          description: name,
          currency: "usd",
          customer: customer.id
        })
        .then(charge => {
          console.log(charge);
          res.send("successfully");
        })
        .catch(err => res.send(err));
    })

    .catch(err => res.send(err));
});

module.exports = router;
