const router = require('express').Router();
const ORM = require('../config/orm');

router.get('/', (req,res)=> {
    res.redirect('/burgers');
});

router.get('/burgers', (req,res)=> {
    ORM.selectAll("burgers", values=> {
        const left = [];
        const right = [];
        values.forEach(val => {
            if(!val.devoured){
                left.push(val);
            }else {
                right.push(val);
            }
        })
        const burgerList = {
            toEat: [...left],
            eatten: [...right]
        }
        res.render('index', burgerList); 
    });     
});

router.post('/burgers/add', (req, res)=> {
    const burgerNew = req.body.burger;
    ORM.insertOne("burgers", "burger_name","devoured", burgerNew, 0, (val)=> {
        res.redirect('/');
    });
});

router.get('/burgers/:id', (req, res)=> {

    ORM.selectAll("burgers", values=> {
        const burgerId = req.params.id;
        const burgers = [...values];
        let burgerUpdate = null;
        console.log(burgers);
        for(let i =0; i < burgers.length; i++){
            if(burgerId == burgers[i].id){
                burgerUpdate = burgers[i];
                break;
            }
        }
        console.log(burgerUpdate);
      res.render("update", burgerUpdate) 
    }); 
});

router.post('/burgers/devour/:id', (req, res)=> {
    const burgerId = req.params.id;
    ORM.updateOne("burgers","devoured", 1, "id", burgerId, (val)=>{
        res.redirect('/');
    });
});
router.post('/burgers/update/:id', (req, res)=> {
    const burgId = req.params.id;
    const burgNew = req.body.burgerChange;
    ORM.updateOne("burgers","burger_name", burgNew, "id", burgId, (val)=> {
        res.redirect('/');
    });
});
module.exports = router;