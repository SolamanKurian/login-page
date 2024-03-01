var express=require("express")
var router=express.Router();



const credentials={
    email:"solaman@gmail.com",
    password:"admin@7"
}

//login rout
const message='Invalid Entry'

router.post('/login',(req,res)=>{
    if(req.body.email == credentials.email && req.body.password == credentials.password){
        req.session.user=req.body.email;
        res.redirect('/route/dashboard')
        
    }
    else{
        
        res.redirect('/')

    }
})

// route to dashboard

router.get('/dashboard',(req,res)=>{
    if(req.session.user){
        res.render('dashboard', {title : req.session.user})
    }
    else{
        
        res.redirect("/")
    }
})

// route to logout

router.get('/logout',(req,res)=>{
    req.session.destroy(function(err){
        if(err){
            res.send("Error")
        }
        else{
           
            res.redirect("/")
           
        }
    })
})


module.exports=router;