// function add(a,b)
// {
//     return a+b;

// }
// var add = (a , b) => {return a + b;}
// var add =(a,b) => a+b;
// var result= add(9,7);
// console.log(result);

// callback function
// function callback()
// {
//     console.log("Now adding successful complete");

// }
// const add = function(a, b, callback)
// {
//     var result= a+b;
//     console.log('result:' +result);
//     callback();

// }
// add (3, 4, callback);
//File example
// var fs= require('fs');
// var os = require('os');
// var user = os.userInfo();
// console.log(user.username);
// fs.appendFile('geeting.txt','Hi'+user.username + '!\n', ()=>{
//     console.log('file is created');
// })

// const notes= require('./notes.js');
// console.log('server file is avilable');
// var age= notes.age;
// var result = notes.addNumber(age+18,10);
// console.log(age);
// console.log('result is now ' +result);

//load example
// var _ = require('lodash');
// var data= ["person", "person", "ajit", '4', '4',4,3,2,2];
// var filter= _.uniq(data);
// console.log(filter);
// console.log(_.isString(3));

const express = require('express')
const app = express()
const db= require('./db')

const bodyParser = require('body-parser');

app.use(bodyParser.json());
// const MenuItem= require('./models/MenuItem');

app.get('/', function (req, res) {
  res.send('Hello World ttt')
})
// app.get('/chicken', function (req, res) {
//     res.send('Welcome to checken')
// })
// app.get('/mutton', function (req, res)
// {
//     var custmize_mutton = {
//         "name": "Korma",
//         "price": 350,
//         "descripition": "This is made by bihari style"

//     }
//     res.send(custmize_mutton)
// })
// app.post('/item', function (req, res)
// {
//     res.send('Item is saved');
// })

// app.post('/person', function(req, res)
// {
// const data= req.body
// const newPerson = new Person(data);
// newPerson.save(function(err, savedPerson)
// {
//     if(err)
//     {
//         console.log('Error String person', error);
//         res.status(500).json({error: "Internal server error"});
//     }
//     else{
//         console.log('Data Save Successfully');
//         res.status(200).json(savedPerson);
//     }
// })


// });

//Import Person

const personRoutes= require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');
app.use('/person', personRoutes);
app.use('/menu', menuRoutes);


    

    
app.listen(3000, ()=>{
    console.log('Server is running on 3000')
})