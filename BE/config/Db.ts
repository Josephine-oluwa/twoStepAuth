import mongoose from "mongoose"

const URL : string = "mongodb+srv://josephine:josephine@cluster0.kckuw8r.mongodb.net/db?retryWrites=true&w=majority";

const db = () =>{
    mongoose.connect(URL).then(()=>{
        console.log("server is connected"); 
    })
}

export default db