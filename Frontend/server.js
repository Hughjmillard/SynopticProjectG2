const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('Public'));

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

const secondRouter = require('./routes/symptoms');
app.use('/symptoms', secondRouter);

const thirdRouter = require('./routes/contact');
app.use('/contact', thirdRouter);

const fourthRouter = require('./routes/learning');
app.use('/learning', fourthRouter);

app.listen(port,(error)=>{
    if(error){
        console.log(`error`,error);
    }else{
        console.log(`port is running on ${port}!`);
    }
});
