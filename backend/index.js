const express = require('express');

const PORT = process.env.PORT || 5000;
const app = express();

app.listen(PORT, () => {
    console.log(`Сервер запущений на порту: ${PORT}`);
})

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