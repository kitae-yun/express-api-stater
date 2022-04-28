const express = require('express');

const router = express.Router();

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};
router.get('/', async (req, res) => {
  res.json(['😀', '😳', '🙄']);
});

router.get('/token', async (req, res) => {
  console.log('/token path get methods');
  await sleep(500);
  // res.json(["😀", "😳", "🙄"]);
  res.json({
    data: {
      token: 'dkjfkdajksdlfkjsdsdlfkklfsd',
      refreshToken: 'ljsdflerkjkjrekjrkejr',
    },
  });
});

module.exports = router;
