# Mountain Horses API

## Requirements

- Node.js
- MySQL 8.0+

## Setup

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env` file in the project root:

```env
DB_HOST=localhost
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=mountainhorses
```

### 3. Initialize the database

Create the database and import the schema with sample data:

```bash
mysql -u your_mysql_user -p -e "CREATE DATABASE IF NOT EXISTS mountainhorses;"
mysql -u your_mysql_user -p mountainhorses < Dump20260409.sql
```

### 4. Run the API

```bash
# Production
npm start

# Development (with auto-reload)
npm run dev
```

The API will be available at `http://localhost:8080`.

## Endpoints

| Method | Path               | Description         |
|--------|--------------------|---------------------|
| GET    | /v1/horses         | List all horses     |
| POST   | /v1/horses         | Create a horse      |
| PUT    | /v1/horses/:id     | Update a horse      |
| DELETE | /v1/horses/:id     | Delete a horse      |
