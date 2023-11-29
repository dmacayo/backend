const express = require('express');
const router = express.Router()
const { faker } = require('@faker-js/faker');

router.get('/', (req, res) => {
  const users = [];
  const {size} = req.query;
  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
    users.push({
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
      image: faker.image.imageUrl(),
    });
  }
  res.json(users);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  res.json({
    id,
    name: faker.name.firstName(),
    lastName: faker.name.lastName(),
    image: faker.image.imageUrl(),
  });
});

router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'Creation',
    data: body
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const body = req.body
  res.json({
    message: 'update',
    data:body,
    id,
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  res.json({
    message: 'deleted user',
    id,
  })
})

module.exports = router