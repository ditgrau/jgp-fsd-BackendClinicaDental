const express = require ('express');
const app = express();
const PORT = 5000;


app.use (express.json());
app.listen (PORT, () => {
    console.log(`levantado el servidor en el puerto ${PORT}, bienvenida a tu clinica`);
})