const express = require('express')
const app = express();


// conncecting to database
const connectDB = require('./db/connect')

// importing dotenv file
require('dotenv').config();

// tasks route
const tasks = require('./routes/tasks')

// middleware
app.use(express.json());

// routes
app.get('/hello', (req, res) => {
    res.send("Task Manager App");
})

// using tasks route
app.use('/api/v1/tasks', tasks);

// not found middleware
const notFound = require('./middleware/not-found')
app.use(notFound);


const port = process.env.PORT;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);

        app.listen(port, () => {
            console.log(`Server is running....`)
        })
    } catch (error) {
        console.log(error);
    }
}


start()