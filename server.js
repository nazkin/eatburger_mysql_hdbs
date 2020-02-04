const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 8080;




app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const burgerController = require(`./controllers/burgers_control`);
app.use('/burgers', burgerController);

app.listen(PORT, (err)=>{
    if(err) throw err;
    console.log(`Port listening on ${PORT}`);
});