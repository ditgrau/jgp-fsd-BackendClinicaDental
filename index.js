const express = require ('express');
const app = express();
const PORT = 5000;
const db = require ('./db');
const router = require ('./router');

app.use (express.json());
app.use (router);

db.then ( () => {
    app.listen (PORT, () => {
        console.log(`levantado el servidor en el puerto ${PORT}, bienvenida a tu clinica`);
    })
}
)
.catch (
    error => console.error (error)
)
