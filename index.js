const express=require('express');
const bodyParser=require('body-parser');
const Swal=require('sweetalert2');

const port=3000;
const app=express();

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

let list=["Bring Milk","Read Gita","Gym"];
let desc=["From Sector 45","At temple","Take preWorkout"];
let time=["07:00","08:00","04:00"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

app.get("/",(req,res)=>{
    let today = new Date();
     const Day=daysOfWeek[today.getDay()];
     const Month=months[today.getMonth()];
     const Year=today.getFullYear();
     const TodayDate=today.getDate();
    

    res.render("list",{items:list,day:Day,month:Month,date:TodayDate,year:Year,Desc:desc,Time:time});
});
app.post("/submit",(req,res)=>{
    const task=req.body.task;
    const description=req.body.description;
    const Time =req.body.time;
    list.push(task);
    desc.push(description);
    time.push(Time);
    res.redirect("/");
    
});
app.post("/",(req,res)=>{
    res.render("addTask");
//    const enterItem=req.body.newItem;
//    list.push(enterItem);
//    res.redirect("/");
});
app.listen(port,(req,res)=>{
    console.log(`Server Connected to ${port} successfully`);
});


