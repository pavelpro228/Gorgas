const express = require('express');
const connectDB = require('./db.js');
const usersModel = require('./models/Users.js');
const cors = require('cors');
const multer = require('multer');

const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.listen(PORT, () => {
    console.log(`Сервер запущений на порту: ${PORT}`);
})

app.get('/', async (req, res) => {
    const response = await usersModel.find();
    return res.json({items : response});
})

// Добавление нового пользователя
app.post('/add-user', async (req, res) => {
    try {
        const { name, surname, age, email, password } = req.body;

        // Проверка, что все поля заполнены
        if (!name || !surname || !age || !email || !password) {
            return res.status(400).json({ error: `Всі поля обов'язкові` });
        }

        // Создание нового пользователя
        const newUser = new usersModel({
            name,
            surname,
            age,
            email,
            password,
        });

        // Сохранение в MongoDB
        const savedUser = await newUser.save();
        return res.status(201).json({ message: 'Користувача успішно додано', user: savedUser });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Помилка при збереженні користувача' });
    }
});

// var database;

// app.post('/api/AddUsers', multer().none(),(request, response) => {
//     database.collection("users").count({}, function(error, numOfDocs){
//         database.collection("users").insertOne({
//             id:(numOfDocs + 1).toString(),
//             description: request.body.newUsers
//         });
//         response.json("Added Succesfully");
//     })
// })

// app.delete('/api/DeleteUsers', (request, response) => {
//     database.collection("users").deleteOne({
//         id: request.query.id
//     });
//     response.json("Deleted Succesfully")
// })

// var Express = require('express');
// var MongoClient = require('mongodb').MongoClient;
// var cors = require('cors');
// var multer = require('multer');

// var app = Express();
// app.use(cors());

// var CONNECTION_STRING = "mongodb+srv://buylin399pavel:qwerty123@cluster.u5hve.mongodb.net/Gorgas?retryWrites=true&w=majority&appName=Cluster";
// var DATABASE_NAME = "Gorgas";
// let database;
// const PORT = process.env.PORT || 5000;

// MongoClient.connect(CONNECTION_STRING)
// .then(client => {
//     database = client.db(DATABASE_NAME);

//     app.listen(PORT, () => {
//         console.log(`Сервер запущений`);
//     })
// })

// // app.listen(5000, () => {
// //     MongoClient.connect(CONNECTION_STRING, (error, client) => {
// //         database = client.db(DATABASE_NAME);
// //         console.log(`Сервер запущений`);
// //     })
// // })

// app.get('/api/GetUsers', async (req, res) => {
//     database.collection("users").find({}).toArray((error, result) => {
//         res.send(result);
//     })
// })

app.get('/api/questions', (req, res) => {
    res.json([
        {
            message: "Запитання 1"
        },
        {
            message: "Запитання 2"
        },
        {
            message: "Запитання 3"
        },
        {
            message: "Запитання 4"
        },
    ])
})

app.get('/api/users', (req, res) => {
    res.json([
        {
            id: 1,
            name: "Pavlo",
            surname: "Buylin",
            email: "pavlobuylin@gmail.com",
            isBanned: false
        },
        {
            id: 2,
            name: "Petro",
            surname: "Shevchenko",
            email: "petroshevchenko@gmail.com",
            isBanned: true
        },
        {
            id: 3,
            name: "Alex",
            surname: "Kravchenko",
            email: "alexkravchenko@gmail.com",
            isBanned: false
        },
        {
            id: 4,
            name: "Dmytro",
            surname: "Melnik",
            email: "dmytromelnik@gmail.com",
            isBanned: true
        },
        {
            id: 5,
            name: "Volodymyr",
            surname: "Oliynik",
            email: "volodymyroliynik@gmail.com",
            isBanned: false
        },
    ])
})