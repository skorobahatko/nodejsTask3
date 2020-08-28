const express = require('express');
const exHand = require('express-handlebars');
const app = express();
const path = require('path');
const apiRouter = require('./routes');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(path.join(process.cwd(), 'views')));

app.set('view engine', '.hbs');
app.engine('.hbs', exHand({
    defaultLayout: false
}));
app.set('views', path.join(process.cwd(), 'views'));

app.use('/api', apiRouter.apiRouter);

app.listen(8080, (err) => {
    if (err) console.log (err)

    console.log ('server start 8080');
});
