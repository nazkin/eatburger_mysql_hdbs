const ORM = require('../config/orm');

const viewBurgers = () => ORM.selectAll("burgers");

const devourBurger = (id)=> ORM.updateOne("burgers","devoured", TRUE, "id", id);

const createBurger = (name)=> ORM.insertOne("burgers", "burger_name","devoured", name, FALSE);

module.exports = {
    viewBurgers, 
    devourBurger,
    createBurger
}