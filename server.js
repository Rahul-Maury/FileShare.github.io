const express=require('express');
const app= express();
require('dotenv').config();
const path=require('path');
const routerfile=require('./routes/files');
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());
const connectDB=require('./config/db');
connectDB();
app.set('views',path.join(__dirname,'/views'));
app.set('view engine','ejs');
const PORT=process.env.PORT||3000;

app.use('/api/files',routerfile)
app.use('/files', require("./routes/show"));
app.use('/files/download',require('./routes/download'))
app.listen(PORT,()=>{
    console.log(`Listing on port ${PORT}`);
})