const express = require('express');
const router = express.Router()
const { faker } = require('@faker-js/faker');

router.get("/:categoryId/products/:productId", (req, res) => {
  const { categoryId, productId } =  req.params;
  res.json({
    categoryId,
    productId,
  })
})

module.exports = router;