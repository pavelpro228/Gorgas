const express = require('express')
const connectDB = require('./db.js')
const usersModel = require('./models/Users.js')
const blockedUsersModel = require('./models/BlockedUsers.js')
const cors = require('cors')
const multer = require('multer')

const PORT = process.env.PORT || 5000
const app = express()
app.use(express.json())
app.use(cors())

connectDB()

app.listen(PORT, () => {
  console.log(`Сервер запущений на порту: ${PORT}`)
})

app.get('/users', async (req, res) => {
  const response = await usersModel.find()
  return res.json({ items: response })
})

app.get('/users/blocked', async (req, res) => {
  const response = await blockedUsersModel.find()
  return res.json({ items: response })
})

// Добавление нового пользователя
app.post('/add-user', async (req, res) => {
  try {
    const { name, surname, email, address, tariff, password, isBanned } =
      req.body

    // Проверка, что все поля заполнены
    if (!name || !surname || !email || !address || !password) {
      return res.status(400).json({ error: `Всі поля обов'язкові` })
    }

    // Создание нового пользователя
    const newUser = new usersModel({
      name,
      surname,
      email,
      address,
      tariff,
      password,
      isBanned,
    })

    // Сохранение в MongoDB

    const savedUser = await newUser.save()
    return res.status(201).json(savedUser)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Помилка при збереженні користувача' })
  }
})

// Добавление пользователя в список блокировки
app.post('/add-blocked-user', async (req, res) => {
  try {
    const { name, surname, email, address, tariff, password, isBanned } =
      req.body

    // Проверка, что все поля заполнены
    if (!name || !surname || !email || !address || !password) {
      return res.status(400).json({ error: `Всі поля обов'язкові` })
    }

    // Создание нового пользователя
    const newUser = new blockedUsersModel({
      name,
      surname,
      email,
      address,
      tariff,
      password,
      isBanned,
    })

    // Сохранение в MongoDB
    const savedUser = await newUser.save()
    return res
      .status(201)
      .json({ message: 'Користувача успішно додано', user: savedUser })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Помилка при збереженні користувача' })
  }
})

// Удаление пользователя по ID
app.delete('/delete-from-userlist/:id', async (req, res) => {
  try {
    const userId = req.params.id
    const deletedUser = await usersModel.findByIdAndDelete(userId)

    if (!deletedUser) {
      return res.status(404).json({ error: 'Користувач не знайдений' })
    }

    return res.json({ message: 'Користувач заблокований' })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: 'Помилка при блокуванні користувача' })
  }
})

// Удаление пользователя по ID
app.delete('/delete-from-blocked-userlist/:id', async (req, res) => {
  try {
    const userId = req.params.id
    const deletedUser = await blockedUsersModel.findByIdAndDelete(userId)

    if (!deletedUser) {
      return res.status(404).json({ error: 'Користувач не знайдений' })
    }

    return res.json({ message: 'Користувач розблокований' })
  } catch (error) {
    console.error(error)
    return res
      .status(500)
      .json({ error: 'Помилка при розблокуванні користувача' })
  }
})

app.post('/update-password', async (req, res) => {
  try {
    const { email, password } = req.body
    if (!password) {
      return res.status(400).json({ error: `Поле password обов'язкове!` })
    }
    if (!email) {
      return res.status(400).json({ error: `Поле email обов'язкове!` })
    }

    const newPassword = await usersModel.findOneAndUpdate(
      { email: email },
      { password: password }
    )
    return res.status(201).json(newPassword.password)
  } catch (error) {
    console.error(error)
  }
})

app.post('/update-tariff', async (req, res) => {
  try {
    const { email, tariff } = req.body
    let price = 50, options = 'До 50 куб.м газу на місяць', validUntil = '31.12.2025' 

    switch (tariff.name) {
      case 'Економ':
        price = 200
        options = 'До 50 куб.м газу на місяць'
        break
      case 'Базовий':
        price = 300
        options = 'До 100 куб.м газу на місяць'
        break
      case 'Преміум':
        price = 500
        options = 'До 200 куб.м газу на місяць'
        break
    }

    const newTariff = await usersModel.findOneAndUpdate(
      { email: email },
      { tariff: { name: tariff.name, options: tariff.options, price: tariff.price, validUntil: tariff.validUntil } }
    )
    return res.status(200).json(newTariff.tariff)
  } catch (error) {
    console.error(error)
  }
})

app.get('/api/questions', (req, res) => {
  res.json([
    {
      message: 'Запитання 1',
    },
    {
      message: 'Запитання 2',
    },
    {
      message: 'Запитання 3',
    },
    {
      message: 'Запитання 4',
    },
  ])
})
