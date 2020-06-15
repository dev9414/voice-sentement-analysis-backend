const express=require('express');
//const ejsLint = require('ejs-lint');
const app=express();

//const path = require('path');
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(express.json());

app.get('/h',function(req,res){
//   var stack = new Error().stack
// console.log( stack )
   let key= req.params.text;
   let spawn = require("child_process").spawn; 
  //  var stack = new Error().stack
  //  console.log( stack )
   let process=spawn('python',["./hello.py"] );
  //   var stack = new Error().stack
  //  console.log( stack )
   process.stdout.on('data', function(data) { 
     console.log(data.toString());
    res.send(data.toString()); 
    //
   
        });

});
// if (process.env.NODE_ENV !== 'production'){
//   require('longjohn');
// }
// var stack = new Error().stack
// console.log( stack )
app.timeout =0;
app.listen(process.env.PORT||3000,()=>{
    console.log('3000');
});