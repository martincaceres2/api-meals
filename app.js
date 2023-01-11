import express, { json } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import createError from 'http-errors';
import path from 'path';
import { fileURLToPath } from 'url';

import 'dotenv/config';

import loginRoute from './routes/login.js';
import registerUser from './routes/register.js';
import mealsRoute from './routes/meals.js'
import usersRoute from './routes/users.js'
import categoriesRoute from './routes/categories.js';
import { dbConnection } from './db/config.js';

const app = express();

app.use(express.json());

//DB connection
dbConnection();

//Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(json());

//Routes
app.use('/register', registerUser);
app.use('/login', loginRoute);
app.use('/meals', mealsRoute);
app.use('/users', usersRoute);
app.use('/categories', categoriesRoute);

app.use(express.static('public'));

app.get('/', (req, res) => {

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    console.log(__dirname)

    res.sendFile(`${__dirname}/index.html`)
})

app.get('*', (req, res) => {
    res.status(404).send('This page does not exist');
});

// Catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404))
});

// Error handler
app.use((err, req, res, next) => {

    //Render the error page
    res.status(err.status || 500);
    res.json({ error: err });
});


export default app;