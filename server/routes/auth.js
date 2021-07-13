const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../keys')
const requireLogin = require('../middleware/requireLogin')



router.get('/', (req,res) => {
    res.send("hello route")
})

router.post('/signup', (req,res) => {
    const {name,email,password} = req.body
    if(!name || !email || !password) {
       return res.status(422).json({error: "please fill all the fields"})
    }

    User.findOne({email:email})
    .then((savedUser)=> {
        if(savedUser){
            return res.status(422).json({error: "You are already registered"})

        }
        bcrypt.hash(password,12)
        .then(hashedpassword => {
            const user = new User({
                email,
                password: hashedpassword,
                name
            })
            user.save()
            .then(user => {
                res.json({message: "User saved succesfully"})
            })
            .catch(err => {
                console.log(err)
            })
        })
      
    })
    .catch(err => {
        console.log(err)
    })
})

router.post('/signin', (req,res) => {
      const{email,password} = req.body
      if(!email || !password) {
          res.status(422).json({error: "Fill the fields"})
      }
      User.findOne({email:email})
      .then(savedUser => {
          if(!savedUser) {
          return res.status(422).json({error: "Invalid user"})
          }
          bcrypt.compare(password, savedUser.password)
          .then(doMatch => {
              if(doMatch) {
                 // res.json({message: "logged in"})
                 const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
                 const {_id,name,email} = savedUser
                 res.json({token,user:{_id,name,email}})
              }
              else {
                return res.status(422).json({error: "Invalid user"})  
              }
          })
          .catch(err => {
              console.log(err)
          })
      })
})






module.exports = router