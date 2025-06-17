require('dotenv').config();
const http = require('http');
const https = require('https');
const express =  require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const {PORT} =  process.env;
const fs = require('fs');
const userRoute = require('./Router/User')





app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.use("/api",userRoute)

if (process.env.USE_HTTPS === 'true') {
  const sslOptions = {
    key: fs.readFileSync('./certs/key.pem'),
    cert: fs.readFileSync('./certs/cert.pem'),
  };

  https.createServer(sslOptions, app).listen(PORT, () => {
    console.log(`✅ HTTPS server running on https://localhost:${PORT}`);
  });
} else {
  http.createServer(app).listen(PORT, () => {
    console.log(`✅ HTTP server running on http://localhost:${PORT}`);
  });
}








