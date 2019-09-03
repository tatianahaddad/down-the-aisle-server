module.exports = {
  NEWS_ENDPOINT: 'https://newsapi.org/v2/top-headlines?country=us',
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_KEY: process.env.API_KEY,
  API_BASE_URL: process.env.REACT_APP_API_BASE_URL || "http://localhost:3000/api",
  DB_URL: process.env.DB_URL || "postgresql://tatianahaddad1@localhost/down-the-aisle",
  JWT_SECRET: process.env.JWT_SECRET || 'change-this-secret',
  JWT_EXPIRY: process.env.JWT_EXPIRY || '3h',
}