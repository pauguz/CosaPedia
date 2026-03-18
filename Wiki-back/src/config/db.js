import mysql from 'mysql2/promise'; // Usamos /promise para poder usar async/await
import dotenv from 'dotenv';

dotenv.config();

// DIAGNÓSTICO:
console.log("Intentando conectar con:");
console.log("User:", process.env.DB_USER);
console.log("Host:", process.env.DB_HOST);

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  namedPlaceholders: true ,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;