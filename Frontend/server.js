const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('Public'));

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

const secondRouter = require('./routes/second');
app.use('/second', indexRouter);

const thirdRouter = require('./routes/third');
app.use('/third', indexRouter);

const fourthRouter = require('./routes/fourth');
app.use('/fourth', indexRouter);

app.listen(port,(error)=>{
    if(error){
        console.log(`error`,error);
    }else{
        console.log(`port is running on ${port}!`);
    }
});
