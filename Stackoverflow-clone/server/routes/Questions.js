import express from 'express'
import {AskQuestion} from '../controllers/Questions.js'
import {getAllQuestions,deleteQuestion,voteOuestion} from '../controllers/Questions.js'
import auth from '../middlewares/auth.js'
const router =express.Router()
router.post('/Ask',auth,AskQuestion)
router.get('/get',getAllQuestions)
router.delete('/delete/:id',auth,deleteQuestion);
router.patch('/vote/:id',auth,voteOuestion)
export default router