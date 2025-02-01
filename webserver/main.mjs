import express from 'express';
import mysql from 'mysql2/promise';
const app = express()
const port = 3000

app.get('/', async (req, res) => {
  try {
    const [results] = await connection.query('SELECT * FROM products');
    res.json(results); // Send the fetched data as JSON response
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' }); // Return error response
  }
});

//DATABASE SCRIPT
const connection = await mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'auctions',
  password: '0377'
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})