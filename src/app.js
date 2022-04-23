const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/MongodbminiProject")
.then(()=>console.log("connection successfull...."))
.catch((err) => console.log(err));

const taskschema = new mongoose.Schema({
    Description:{
        type:String,
        required: true
    },
    Completed: Boolean
})

const tasks = new mongoose.model("Tasks",taskschema);

const createDocument = async () =>{
    try{
        const nodeJS = new tasks({
            Description:" nodeJS ",
            Completed:true
        
        })
        const html = new tasks({
            Description:" HTML ",
            Completed:true
        
        })
        
        
        const js = new tasks({
            Description:" JS ",
            Completed:true
        
        })
        const cpp = new tasks({
            Description:" C++ ",
            Completed:false
        
        })

        
        const result = await tasks.insertMany([nodeJS, html, js, cpp]);
        console.log(result);
    } catch(err){
        console.log(err);
    }
    
}
//createDocument();


const getDocument=async ()=>{
    const result=await tasks.find({Completed:false});
    console.log(result);
}

// getDocument();

const updateDocument = async (_id) =>{
    try{
        const result = await tasks.findByIdAndUpdate({_id},{
            $set : {
                Completed: true
            }
        },{
            new:true,
            useFindAndModify: false
        });
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
// updateDocument("6264258a7359c1c30d881325");

const deleteDocument = async (_id) =>{

    try{
        const result = await tasks.findByIdAndDelete( {_id} );
        console.log(result);
    }catch(err){
        console.log(err);
    }

}
deleteDocument("6264258a7359c1c30d881324");





