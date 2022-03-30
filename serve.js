const express = require("express"); // utilise express
const app = express();
const PORT = 8080; // le port utiliser de base

app.set("view engine", "ejs"); // utilise ejs
app.set("views", __dirname + "/app/views"); // utilise ejs dans les fichier du doss "views"

app.use(express.static("statics")); // css/js dans doss "statics"

const router = require("./app/routes/route"); // va chercher les fichier a partire de routeur

app.use(router);

app.listen(PORT, () => {
    console.log(`Le serve est lancer et ecoute a : http://localhost:${PORT}`);
});
