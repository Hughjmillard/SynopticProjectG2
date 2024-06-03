const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('Public'));

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

const secondRouter = require('./routes/symptoms');
app.use('/symptoms', indexRouter);

const thirdRouter = require('./routes/doctors');
app.use('/doctors', indexRouter);

const fourthRouter = require('./routes/learning');
app.use('/learning', indexRouter);

app.listen(port,(error)=>{
    if(error){
        console.log(`error`,error);
    }else{
        console.log(`port is running on ${port}!`);
    }
});
