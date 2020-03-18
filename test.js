const request = require('request');
require('dotenv').config();

    let url = process.env.PRIORITY_URL 
    
    let Authorization = process.env.PRIORITY_AUTHORIZATION

    url += "ORDERS?$filter=LABN_ORDWEBNAME eq '255420'"

    request({
      url,
      method: 'GET',
      headers: {
        Authorization,
        'Content-type': 'application/json'
      }
    }, async (err, res, body) => {

        if (err)
          console.error('error' ,err);
        console.log('priority response body' ,body);

      });

