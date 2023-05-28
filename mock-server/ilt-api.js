const { Router } = require('express');

const router = Router({ mergeParams: true });

let currentUserId = 300;

let users = [];

const addUser = async ({ name }) => {
  users.push({
    id: ++currentUserId,
    name
  });
  return currentUserId;
}

const getUsers = async () => {
  return users;
}

const getOrder = (id) => {
  return {
    date: new Date(),
    id: parseInt(Math.random() * 10000),
    price: parseInt(Math.random() * 1000),
    userId: id
  }
}

const getUser = async (id) => {
  const user = users.find((e) => e.id === id);
  return user ? {
    ...user,
    order: getOrder(user.id)
  } : null;
}

router.get('/user/order', (req, res) => {
  const { id } = req.query || {};
  getUser(id).then((user) => {
    res.send(user);
  });
})

router.post('/user', (req, res) => {
  addUser(req.body).then((id) => {
    res.status(201).send(`${id}`);
  });
})

router.get('/users', (req, res) => {
  getUsers().then((users) => {
    res.send(users);
  });
})



module.exports = router;
