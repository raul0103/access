# Access Project

Этот проект состоит из двух частей:

- **Backend** (Laravel)
- **Frontend** (React/Vite)

## Требования

- [Lando](https://lando.dev/) должен быть установлен на вашей системе

## Запуск Backend

1. Настройте подключение к базе данных в `.env`:

   ```env
   DB_CONNECTION=mysql
   DB_HOST=database
   DB_PORT=3306
   DB_DATABASE=access
   DB_USERNAME=<ваш_пользователь>
   DB_PASSWORD=<ваш_пароль>

   ```

2. Установите зависимости и запустите Lando:

   ```bash
   lando start
   ```

3. Сгенерируйте ключ приложения Laravel:

   ```bash
   lando artisan key:generate
   ```

4. Запустите миграции базы данных:

   ```bash
   lando artisan migrate
   ```

5. Backend будет доступен по адресу:
   ```
   http://access.lndo.site
   ```

## Запуск Frontend

1. Установите зависимости (включая axios для работы с API):

   ```bash
   lando npm install
   ```

2. Запустите сервер разработки:

   ```bash
   lando npm run dev
   ```

3. Frontend будет доступен по адресу (обычно):
   ```
   http://localhost:5173
   ```

## Структура проекта

```
├── backend/          # Laravel приложение
│   ├── app/          # Модели, контроллеры, middleware
│   ├── routes/       # API маршруты
│   └── ...
├── frontend/         # React/Vite приложение
│   ├── src/
│   │   ├── api/      # Axios конфигурация и сервисы
│   │   └── pages/    # React компоненты
│   └── ...
└── .lando.yml        # Конфигурация Lando
```

## API

- **Backend API**: `https://access.lndo.site/api`
- **Frontend**: настроен для работы с backend через axios
- **Тестовые запросы**: доступны на главной странице frontend

## Доступные команды

### Backend команды (через Lando)

- `lando artisan migrate` - запуск миграций
- `lando artisan key:generate` - генерация ключа приложения
- `lando artisan serve` - запуск сервера разработки

### Frontend команды (через Lando)

- `lando npm install` - установка зависимостей
- `lando npm run dev` - запуск сервера разработки
- `lando npm run build` - сборка для продакшена

## Примечания

- Убедитесь, что Lando установлен и запущен перед выполнением команд
- Backend использует proxy через Lando для доступа к приложению
- Frontend запускается в режиме разработки с hot reload
