const express =require("express");
const app =express();
const PORT = 5000;


const workingHoursMiddleware = (req, res, next) => {
    const currentDay = new Date().getDay();
    const currentHour = new Date().getHours();
  
    if (currentDay >= 1 && currentDay <= 5 && currentHour >= 9 && currentHour < 17) {
      next();
    } else {
      res.send('Web application is only available during working hours (Monday to Friday, 9 to 17).');
    }
  };
  
app.use(workingHoursMiddleware);
app.use(express.static('public'));





app.use(express.static(__dirname+"/static"))
app.get("/home",(req,res)=>{
    res.sendFile(__dirname+"/static/home.html")
}
)
app.get("/contact",(req,res)=>{
    res.sendFile(__dirname+"/static/contact.html")
}
)
app.get("/style.css",(req,res)=>{
    res.sendFile(__dirname+"/static/style.css")
}
)



app.listen(PORT,console.log("listening on port:",PORT))
