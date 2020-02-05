//events are used to control the html browser page(js page).
const events=require("events");
const event=new events.EventEmitter;
event.on("click",()=>console.log("Hello world"));
event.emit("click");
event.on("clickadd",(a,b)=>console.log(b+a));
event.emit("clickadd",4,5);