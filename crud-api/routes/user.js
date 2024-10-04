const express = require('express')
const {check, validationResult, body} = require('express-validator')
const User = require('../models/User')
const bodyParser = require('body-parser')

const router = express.Router()
router.use(bodyParser.urlencoded({extended: true}))

// @route   GET  users
// @desc    fetches all users
// @access  Public
router.get('/', async (req, res)=>{
    try {
        const users = await User.find()

        res.json(users)
    } catch (err) {
        res.status(500).json({error: err.message})
    }
})

// @route   GET  users/id
// @desc    fetches all users
// @access  Public

router.get('/:id', async(req, res)=>{
    const id = req.params.id
    console.log(id)
    try {
        const user = await User.findOne({id})
        res.json(user)
    } catch (err) {
        res.status(500).json({error: err.message})
    }
})

// @route   POST  users
// @desc    add new user
// @access  Public


router.post('/', [
    check("name", "name is required").not().isEmpty(), 
    check("id", "id is required").not().isEmpty(), 
    check("email", "email is required").isEmail(), 
    check('gender', 'gender is required').not().isEmpty()
], async (req, res)=>{
    const errors = await validationResult(req)
    if (!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
        // console.log("errors are there")
        
    }
    console.log(req.body)
    const {id, name, email, gender} = req.body
    try {
        const user = await User.findOne({id})
        const user2 = await User.findOne({email})
        if(user || user2){
            return res.status(400).json({error: "user with the id/email already exists!!"})
            
        }
        const currUser = User({
            id,
            name,
            email,
            gender
        })

        await currUser.save();
        res.json({currUser})

    } catch (err) {
        res.status(400).json({error:err.message})
    }
})


// @route DELETE
// @desc delete user
// @access Public
router.delete('/:id', async (req, res)=>{
    const id = req.params.id

    try {
        const user = await User.deleteOne({id})
        res.json(user)
    } catch (err) {
        res.status(500).json({error: err.message})
    }
})

// @route PUT
// @desc updates a user
// @access Public
router.put('/:id', async (req, res)=>{
    const id = req.params.id
    try {
        const user = await User.findOne({id})
        if(!user){
            return res.status(400).json({error:'user not found with the given id!!'})
        }
        
        const updatedUser = await User.updateOne({id}, {$set:{...req.body}})
        res.json(updatedUser)
    } catch (err) {
        res.status(400).json({error: err.message})
        
    }
})

module.exports = router


