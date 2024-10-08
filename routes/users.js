const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    console.log(req.query.name)
    res.send('User List');
    });
    
router.get('/new',(req,res)=>{
    res.render('users/new.ejs',{firstName: 'test'});

    });

router.post('/',(req,res)=>{
    const isValid = true
    if(isValid){
    users.push({firstName: req.body.firstName})
    res.redirect(`/users/${users.length-1}`)
    }else{
        console.log('error')
        res.render('users/new',{firstName:req.body.firstName})
    }
    
});    

router.use(logger);

router.route('/:id')
.get((req,res)=>{
    console.log(req.user);
    res.send(`get user with id: ${req.params.id}`);
})
.put((req,res)=>{
    res.send(`put user with id: ${req.params.id}`);
})
.delete((req,res)=>{
    res.send(`delete user with id: ${req.params.id}`);
})

const users=[{name:'kyle'},{name:'sara'}];
router.param('id',(req,res,next,id)=>{
    req.user=users[id];
    next();
});

function logger(req,res,next){
    console.log(req.originalUrl);
    next();
}
    module.exports = router;