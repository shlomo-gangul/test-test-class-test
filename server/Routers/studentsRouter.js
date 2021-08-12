const studentRouter= require('express').Router()
const studentCotroller= require('../Controllers/studentController')

studentRouter.get('/',studentCotroller.getAllStudent)
studentRouter.post('/register',studentCotroller.createNewStudent)
// studentRouter.delete('/',studentCotroller.deleteStudent)
// studentRouter.put('/',studentCotroller.updateStudent)

module.exports= studentRouter; 