// server/app.js

/*require dependencies **/

const express = require("express");
const routes = require("./routes/");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");

const app = express();
const router = express.Router();

let port = 3000;

/* set up middlewares */
app.use(cors());
app.use(bodyParser.json)
app.use(helmet());

app.use('/api',router);


/** Start server */
app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});