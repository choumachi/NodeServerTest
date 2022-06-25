let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.listen(3000, () => {
    console.log("Express server running on port 3000");
});

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/main.html");
});

app.get('/main', (req, res) => {
    res.sendFile(__dirname + "/public/main.html");
});

app.post('/email_post', (req, res) => {
    // get: req.param('email'); GET이라면 이렇게 받을 수 있다.
    // res.send(req.body.email);
    // res.send("post method operated");
    res.render('email.ejs', {'email' : req.body.email});
});