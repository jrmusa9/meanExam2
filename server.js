let express = require('express');
let app = express();


//BODY PARSER
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//STATIC FOLDER
app.use(express.static(__dirname + '/QandA/dist'));

//MONGO DB
let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/QnASchema');

const path = require('path')

var Schema = mongoose.Schema;



//MODEL SCHEMAS
let UserSchema = new mongoose.Schema({
    name: {type: String},
    _questions: [{type: Schema.Types.ObjectId, ref: 'Question'}]
})

let QuestionSchema = new mongoose.Schema({
    question: {type: String},
    description: {type: String},
    _answerId: [{type: Schema.Types.ObjectId, ref: 'Answer'}],
    _userId: {type: Schema.Types.ObjectId, ref: 'User'}
})

let AnswerSchema = new mongoose.Schema({
    answer: { type: String },
    detail: { type: String },
    likes: { type: 0 },
    _questionId: {type: Schema.Types.ObjectId, ref: 'Question'},
    _userId: {type: Schema.Types.ObjectId, ref: 'User'}
})


//DECLEARING MODELS
mongoose.model('User', UserSchema);
mongoose.model('Question', QuestionSchema);
mongoose.model('Answer', AnswerSchema);
    
let User = mongoose.model('User');
let Question = mongoose.model('Question');
let Answer = mongoose.model('Answer');

//ROUTES

//CREATE QUESTION
app.post("/question", function (req, response){
    console.log('@server Rout /Question', req.body)
    User.findOne({_id:req.body._userId}, function(err, user){
        console.log('found the user!', user)
        var newQuestion = new Question(
            {
                question: req.body.question,
                description: req.body.description,
            })
        newQuestion._userId = req.body._userId

        newQuestion.save(function(err){
            if(err){
                console.log(err)
            } else {
                user._questions.push(newQuestion)
                user.save(function(err){
                if(err){
                    console.log("error saving user")
                    
                }else{
                    return response.json(newQuestion)
                }
            })
        }
        });
    })
})


//CREATE ANSWER
app.post("/answer", function (req, response){
    console.log('@server Rout /ANSWER', req.body)
    Question.findOne({_id:req.body._questionId}, function(err, question){
        console.log('found the QUESTION!', question)
        var newAnswer = new Answer(
            {
                answer: req.body.answer,
                detail: req.body.detail,
            })
        newAnswer._questionId = question._id
        newAnswer._userId = req.body._userId
        console.log("at server after updateing answer",newAnswer)

        newAnswer.save(function(err){
            if(err){
                console.log(err)
            } else {
                question._answerId.push(newAnswer)
                question.save(function(err){
                if(err){
                    console.log("error saving user")
                    
                }else{
                    return response.json(newAnswer)
                }
            })
        }
        });
    })
})
// answer: { type: String },
// detail: { type: String },
// likes: { type: 0 },
// _questionId: {type: Schema.Types.ObjectId, ref: 'Question'},
// _userId: {type: Schema.Types.ObjectId, ref: 'User'}

//CREATE USER
app.post('/users',(req, res)=>{
    User.findOne({name:req.body.name},(err, user)=>{
        if(user){
            return res.json(user)

        }else if(user == null){
            User.create(req.body, (err,user)=>{
                if(err){
                    console.log(err)
                }else{
                    return res.json(user)
                }
            })
        }else{
            console.log(err)
        }
    })
}) 


//GET ALL QUESTIONS
app.get('/getQuestions',(req,res)=>{
    Question.find({},(err, questions)=>{
        if(err){
            console.log(err)
        }else{
            return res.json(questions);
        }
    })
})


//GET ONE QUESTION
app.get('/getOneQuestion/:id',(req,res)=>{
    console.log('question ID', req.params.id)
    Question.findOne({_id:req.params.id},(err, question)=>{
        if(err){
            console.log(err)
        }else{
            return res.json(question);
        }
    })
})

//GET ONE QUESTION
app.get('/getOneAnswer',(req,res)=>{
    console.log('answer ID', req.params.id)
    Answer.findOne({_id:req.params.id},(err, question)=>{
        if(err){
            console.log(err)
        }else{
            return res.json(question);
        }
    })
})

// //UPDATE ONE QUESTION's VOTES
// app.post('/update',(req,res)=>{
//     console.log('at server, updating', req.body)
//     Question.update({_id:req.body._id},req.body,function (err, data){
//         if(err){
//             console.log(err)
//         }else{
//             return res.json(data)
//         }
//     })
// })



// GET ALL USERS
app.get('/getAllUsers',(req,res)=>{
    User.find({},(err, users)=>{
        if(err){
            console.log(err)
        }else{
            return res.json(users);
        }
    })
})

// GET ALL ANSWERS
app.get('/getAllAnswers',(req,res)=>{
        Answer.find({},(err, answer)=>{
            if(err){
                console.log(err)
            }else{
                return res.json(answer);
            }
        })
    })


// // DELETE QUESTIONS
// app.delete('/delete/:id',(req,res, next)=>{
//     console.log('@ server deleting',req.params.id)
//     Question.deleteOne({_id:req.params.id },(err, data)=>{
//         if(err){
//             console.log(err)
//         }else{
//             console.log('deleting')
//             return res.json(data);
//         }
//     })
// })




app.all('*', (req, res, next)=>{
    res.sendfile(path.resolve('./examTest2/dist/index.html'))    
})

//SERVER PORT LISTENING
app.listen(1337, ()=> console.log("Connected to port 1337"))