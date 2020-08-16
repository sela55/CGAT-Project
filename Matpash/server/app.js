const express = require("express");
const upload = require("express-fileupload");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
const uploadRoute = require('./routes/upload.route');
const tablesRoute = require('./routes/tables.route');

//middleware
app.use(cors());
app.use(express.json());
app.use(upload());

app.use('/upload', uploadRoute);
app.use('/tables', tablesRoute);


//assigning server to port 5000
app.listen(5000,()=> {
    console.log("Server has started on port 5000");
}); 



