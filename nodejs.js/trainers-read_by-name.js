const { timeStamp } = require('console');
const mongoose = require('mongoose');
const mongo_URL ="mongodb+srv://hamshicr:varun@cluster0.eydoh.mongodb.net/";

const connectToMongo =async() =>{
    mongoose.Promise =global.Promise;
    try{
        await mongoose.connect(mongo_URL);
        console.log("connectd to database")
    }catch(error){
        console.error("Failed to connect");
        process.exit(1)
    }
}
// function connect (uri:String,options?:mongoose.ConnectOptions):promises(mangoose:Mongoose)
    const collection_name = 'Trainer';
    const collection_fields ={
        name:String,
        location: String,
        technology:String,
        phone_number: String
    };
    const collection_config ={
        timeStamp:false
    };
     const schema = mongoose.Schema(collection_fields,collection_config);
     const TrainerModel=mongoose.model(collection_name,schema);

     const readByName =async()=>{
        await connectToMongo();
        try{
            const trainer =await TrainerModel.findOne({name:'Arun'});
            console.log('Trainer by Name ',trainer);

        }catch(err){
            console.log(err);
        }finally{
            await mongoose.disconnect();
            console.log("conection mongoDB closed");
        }
     }
      readByName();