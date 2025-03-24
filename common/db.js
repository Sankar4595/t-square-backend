require("dotenv").config();

DB_NAME = "TSquare";
DB_URL = `${process.env.DATABASE}`;

module.exports = DB_URL;
