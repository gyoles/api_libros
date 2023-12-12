const express = require("express");
const app = express();
app.use(express.json());

const librosRoutes = require("./routes/libros");
const errorHandler = require("./middlewares/errorHandler");

app.use("/libros", librosRoutes);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});