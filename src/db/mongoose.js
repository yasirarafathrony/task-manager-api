const mongoose = require('mongoose')
//const validator = require('validator')

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})



// const me = new User({
//     name: '   Arafath  ',
//     email: '   Yasir.Arafath@metropolia.fi   ',
//     password: 'Phone123'
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log('Error!', error)
// })

// const Task = mongoose.model('Task',{
//     description: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     }
// })
// const task = new Task({
//     description: 'Learning Mongoose Library',
//     //completed: false
// })

// task.save().then(()=>{
//     console.log(task)
// }).catch((error)=>{
//     console.log(error)
// })