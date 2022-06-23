// External dependencies
const express = require('express');

const router = express.Router();

const NotifyClient = require('notifications-node-client').NotifyClient;

const notifyClient = new NotifyClient(process.env.API_KEY);

const axios = require('axios');

// Add your routes here - above the module.exports line

router.post('/email-address', (req, res) => {
    notifyClient
        .sendEmail(
          templateId='77168d68-46a1-44fb-90ea-c52173122c5d',
          emailAddress=req.body.emailAddress,
          {reference: 'covid pass email'}
        )
        .then(response => console.log(response))
        .catch(err => console.error(err))

    axios
      .post('https://documents.cloudapps.digital/allow-email', {
        'email-address': req.body.emailAddress
      })
      .then(res => {
        console.log(`statusCode: ${res.status}`);
        console.log(res);
      })
      .catch(error => {
        console.error(error);
      });

    res.redirect('/confirmation');
  });

module.exports = router;
