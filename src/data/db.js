import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",        // apna MySQL username
  password: "",        // apna MySQL password (agar hai)
  database: "blog_db"  // apna database name
});

db.connect((err) => {
  if (err) throw err;
  console.log("✅ MySQL Connected");
});

export default db;
