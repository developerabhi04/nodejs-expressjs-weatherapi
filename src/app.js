const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const PORT = process.env.PORT || 3000;



const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));



const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials")

app.set('view engine', 'hbs');
app.set('views', template_path)
hbs.registerPartials(partials_path);



app.get("", (req,res) => {
    res.render("index")
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/weather", (req, res) => {
    res.render("weather");
});

app.get("*", (req, res) => {
    res.render("404error", {
        errormsg: 'We are sorry the page you were looking for was not 😒found!....'
    });
});





app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
})