const express = require("express")
const router = express.Router()
const {getAGoal, getAllGoals, createGoal, updateGoal, deleteGoal} = require("../controller/goalsController")



router.route("/").get(getAllGoals).post(createGoal)
router.route("/:goalsId").get(getAGoal).patch(updateGoal).delete(deleteGoal)

module.exports = router