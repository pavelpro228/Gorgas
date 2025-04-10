import React, { useState, useEffect } from 'react'
import './Styles/Cabinet.css'
import gas_service from './Images/handshake.webp'
import personal from './Images/personal.jpg'

const Cabinet = () => {
  const [users, setUsers] = useState([])

  const tariffOptions = [
    {
      name: 'Економ тариф',
      price: 200,
      options: 'До 50 куб.м газу',
      validUntil: '31.12.2025',
    },
    {
      name: 'Базовий тариф',
      price: 300,
      options: 'До 100 куб.м газу на місяць',
      validUntil: '31.12.2025',
    },
    {
      name: 'Преміум тариф',
      price: 500,
      options: 'До 200 куб.м газу',
      validUntil: '31.12.2025',
    },
  ]

  const [showPasswordChange, setShowPasswordChange] = useState(false)
  const [newPassword, setNewPassword] = useState('')

  const user =
    JSON.parse(localStorage.getItem('registered-user-admin')) ||
    JSON.parse(localStorage.getItem('logged-user-admin')) ||
    JSON.parse(localStorage.getItem('registered-user')) ||
    JSON.parse(localStorage.getItem('logged-user'))

  const filtered = users.filter((item) => item.email == user.email)
  const object = filtered[0]

  const changeTariff = async (name, price, options) => {
    try {
      const response = await fetch('http://localhost:5000/update-tariff', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.email,
          tariff: {
            name: name,
            price: price,
            options: options,
            validUntil: '31.12.2025',
          },
        }),
      })
      const result = await response.json()

      alert(`Ви змінили поточний тариф на "${name}"`)
      window.location.href = '/cabinet'
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    try {
      const response = await fetch('http://localhost:5000/users')
      const data = await response.json()
      setUsers(data.items)
    } catch (error) {
      console.log(error)
    }
  }

  const handlePasswordChange = async () => {
    if (!newPassword) alert(`Введіть новий пароль!`)
    else {
      const response = await fetch('http://localhost:5000/update-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: user.email, password: newPassword }),
      })
      const result = await response.json()

      alert(`Пароль змінено на: ${newPassword}`)
      setNewPassword('')
      setShowPasswordChange(false)
    }
  }

  return (
    <div className="cabinet">
      <h1>Особистий кабінет</h1>
      {localStorage.getItem('registered-user-admin') ||
      localStorage.getItem('logged-user-admin') ||
      localStorage.getItem('registered-user') ||
      localStorage.getItem('logged-user') ? (
        <>
          <div className="user-info">
            <img
              src={personal}
              alt="Фото користувача"
              className="personal-photo"
            />
            <p>
              <strong>Ім’я:</strong> {user.name}
            </p>
            <p>
              <strong>Прізвище:</strong> {user.surname}
            </p>
            <p>
              <strong>Пошта:</strong> {user.email}
            </p>
            <p>
              <strong>Адреса проживання:</strong> {user.address}
            </p>
          </div>

          <div className="password-section">
            <button onClick={() => setShowPasswordChange(!showPasswordChange)}>
              {showPasswordChange ? 'Скасувати' : 'Змінити пароль'}
            </button>
            {showPasswordChange && (
              <div className="password-change">
                <input
                  type="password"
                  placeholder="Новий пароль"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <button onClick={handlePasswordChange}>Підтвердити</button>
              </div>
            )}
          </div>

          {object && object.tariff && <div className="tariff-section">
            <h2>Активний тарифний план</h2>
            {(
              <div>
                <p>
                  <strong>Назва:</strong> {object.tariff.name}
                </p>
                <p>
                  <strong>Умови:</strong> {object.tariff.options}
                </p>
                <p>
                  <strong>Ціна:</strong> {object.tariff.price} грн/міс
                </p>
                <p>
                  <strong>Дійсний до:</strong> {object.tariff.validUntil}
                </p>
              </div>
            )}

            {tariffOptions.length > 0 && (
              <>
                <h3>Інші доступні тарифи</h3>
                <div className="tariff-list">
                  {tariffOptions.map((option, index) => (
                    object.tariff.name !== option.name ? <div className="tariff-option" key={index}>
                      <strong>{option.name}</strong>
                      <span>
                        {option.options}, {option.price} грн/міс
                      </span>
                      <button
                        onClick={() =>
                          changeTariff(
                            option.name,
                            option.price,
                            option.options
                          )
                        }
                      >
                        Обрати
                      </button>
                    </div>
                    : null
                  ))}
                </div>
              </>
            )}
          </div>}

          <div className="cabinet-image">
            <img src={gas_service} alt="Газовий сервіс" />
          </div>
        </>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <strong style={{ color: 'red', fontSize: '30px' }}>
            Ви не авторизовані!
          </strong>
        </div>
      )}
    </div>
  )
}

export default Cabinet
