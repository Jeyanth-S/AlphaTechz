const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


const app = express();

app.use(cors(
    {
        origin: ["http://localhost:3000"],
        methods: ["POST", "GET"],
        credentials: true
    }
));

app.use(express.json());

app.use(cookieParser());

app.use(bodyParser.json());

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24
    }
}))

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "kyrsignup"
})

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to the database.');
});

app.get('/home', (req, res) => {
    if (req.session.username) {
        return res.json({
            valid: true, username: req.session.username, email: req.session.email

        })
    }
    else {
        return res.json({ valid: false })
    }
});

app.post('/signup', (req, res) => {

    const sql = "INSERT INTO login (`name`,`email`,`password`) VALUES (?)";

    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]

    db.query(sql, [values], (err, data) => {

        if (err) {
            return res.json("Error in connection");
        }
        return res.json(data);
    })
});

app.post('/login', (req, res) => {

    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";

    db.query(sql, [req.body.email,
    req.body.password], (err, data) => {
        if (err) {
            return res.json("Error in connection");
        }

        if (data.length > 0) {
            req.session.username = data[0].name;
            req.session.email = data[0].email;
            console.log("Username: ", req.session.username, "email: ", req.session.email);
            return res.json({ Login: true, username: req.session.username, email: req.session.email });
        }
        else {
            return res.json({ Login: false });
        }

    });
});

app.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.json({ error: "Error logging out" });
        }
        res.clearCookie('connect.sid'); // Ensure the session cookie is cleared
        return res.json({ success: true });
    });
});


app.listen(8081, () => {
    console.log("listening");
})