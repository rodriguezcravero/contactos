const express = require("express");
const connectDB = require("./config/db");

const app = express();

//Conectar a la base de datos
connectDB();

//Iniciar Middleware

app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.json({ msg: "Bienvenidos a mi primera app" }));

//Definir las rutas

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
