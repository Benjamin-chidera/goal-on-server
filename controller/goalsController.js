const GOALS = require("../models/goalsModel")

// to get everything from the database we user - find({}) or find()

// to create a goal we can use the create method

const getAllGoals = async(req, res) => {
    try {
      const goals = await GOALS.find()
      res.status(200).json({message: "success", goals, NumofGoals: goals.length})
    } catch (error) {
        res.status(404).json({message: "failed",error})
    }
}

const getAGoal = async(req, res) => {
    const {goalsId} = req.params
    try {
        const goal = await GOALS.findById({_id: goalsId})
        res.status(200).json({message: "success", goal})
    } catch (error) {
        res.status(404).json({message: "failed",error})
    }
}

const createGoal = async(req, res) => {
    const {title, description} = req.body
    if (!title || !description) {
        return res.status(400).json({message: "Please fill all fields"})
    }
   try {
    const goal = await GOALS.create(req.body)
    res.status(201).json({message: "success", goal})
   } catch (error) {
    res.status(404).json({message: "failed to create",error})
   }
}

const updateGoal = async(req, res) => {
    const {goalsId} = req.params

    try {
        const goal = await GOALS.findByIdAndUpdate({_id: goalsId}, req.body, {new: true, runValidators: true})
        res.status(200).json({message: "success", goal})
    } catch (error) {
        res.status(404).json({message: "failed to create",error}) 
    }
}

const deleteGoal = async(req, res) => {
    const {goalsId} = req.params

    try {
        const goal = await GOALS.findByIdAndDelete({_id: goalsId})
        res.status(200).json({message: "successful", goal})
    } catch (error) {
        res.status(404).json({message: "failed to delete",error}) 
    }
}

module.exports = {getAGoal, getAllGoals, createGoal, updateGoal, deleteGoal}