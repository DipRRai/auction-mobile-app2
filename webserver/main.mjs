import express from "express";
import mysql from "mysql2/promise";
const app = express();
const port = 3000;

//DATABASE SCRIPT
const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "auctions",
  password: "0377",
});

try {
  const [results] = await connection.query("SELECT * FROM products");
  // console.log(results);
} catch (err) {
  console.error(err);
}

app.get("/", async (req, res) => {
  console.log("attempting to access database");
  try {
    const [results] = await connection.query("SELECT * FROM products");
    // console.log(results);
    res.json(results); // Send the fetched data as JSON response
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" }); // Return error response
  }
});

app.listen(port, () => {
  console.log(`Backend app listening on port ${port}`);
});
