const express = require('express')
require('./db/mongoose')
// const User = require('./models/user')
// const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT 


//const multer = require('multer')
// const upload = multer({
//     dest: 'images',
//     limits: {
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb){
//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('Please upload a Word document'))
//         }
//         cb(undefined, true)
//     }
// })

// app.post('/upload', upload.single('upload'), (req, res) =>{
//     res.send()
// }, (error, req, res, next)=>{
//     res.status(400).send({error: error.message})
// })

// app.use((req, res, next) =>{
//     if(req.method === 'GET'){
//         res.send('GET requests are disabled')
//     } else{
//         next()
//     }
// })

// app.use((req, res, next)=>{
//     res.status(503).send('Site is currently down. Check back soon')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

// const router = new express.Router()
// router.get('/test', (req, res) =>{
//     res.send('This from other router')
// })

//app.use(router)

app.listen(port,()=>{
    console.log('Server is up on port '+ port)
})

//const bcrypt = require('bcryptjs')
// const jwt = require('jsonwebtoken')
// const myFunction = async () =>{
//     const token = jwt.sign({_id: 'abc123'}, 'thisismynewcourse', {expiresIn: '7 days'})
//     console.log(token)

//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data)
    // const password = 'Red12345!'
    // const hashedPassword = await bcrypt.hash(password, 8)

    // console.log(password)
    // console.log(hashedPassword)

    // const isMatch = await bcrypt.compare('Red12345!', hashedPassword)
    // console.log(isMatch)
// }

// myFunction()

// const Task = require('./models/task')
// const User = require('./models/user')

//const main = async()=>{
    // const task = await Task.findById('5f0446bdab30913ec4f19dcc')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    // const user = await User.findById('5f0446bdab30913ec4f19dcc')
    // await user.populate('tasks').execPopulate()
    // console.log(user.tasks)

//}

//main()