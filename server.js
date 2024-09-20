const exp=require("express");
const app=exp();

let path=require("path");

const mo=require("mongodb").MongoClient;

const dbUrl= "mongodb+srv://mydb:mydb@sruthidamera8889.bl0oe.mongodb.net/gamescollection?retryWrites=true&w=majority";

app.use(exp.static(path.join(__dirname,"dist/webapp")));

app.use(exp.json());

mo.connect(dbUrl,{useNewUrlParser: true,useUnifiedTopology: true})
.then(
    client=>{
        let dbObj=client.db("mydb")
        let gameObj=dbObj.collection("gamescollection")
        let collectionObj=dbObj.collection("mycollection")
        app.set("dbObj",dbObj)
        app.set("collectionObj",collectionObj);
        app.set("gameObj",gameObj);
        console.log("connected to my database successfully");
    }
)
.catch(
    error=>console.error("some issue with database connection",error)
)

const impfromuser=require("./apis/userApi");
const impfromadmin=require("./apis/adminApi");

app.use("/user",impfromuser);
app.use("/admin",impfromadmin);

const port=4000;
app.listen(port,console.log(`server listening on  ${port}`))