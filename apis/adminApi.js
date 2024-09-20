const exp=require("express");
const miniexp=exp.Router();

miniexp.get("/getproduct/:id",(a,b)=>{
    b.send(`ok ${a.params.id}  exists`)
})

module.exports=miniexp;