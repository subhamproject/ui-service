const { Router } = require('express');
const axios = require('axios');
const baseURL = process.env.BASE_URL || 'http://localhost:8070/api';

const router = Router({mergeParams: true});

router.all('*', async (req, res) => {
  const method = req.method;
  const url = req.url;
  console.log(`${(new Date()).toISOString()} Requesting ${method} ${url}`);
  try {
    const response = await axios({
      method: method,
      params: req.query,
      baseURL,
      data: req.body,
      url
    });
    // console.log(response.status, response.data);
    const data = typeof response.data !== 'number' ? response.data : `${response.data}`;
    res.status(response.status).send(data);
  } catch (error) {
    console.log(`Error while requesting ${method} ${url}`, error);
    res.status(500).send({message: 'Something went wrong, please contact admin'});
  }
});

module.exports = router;
