const { TimeStamp } = require('console');
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
        timeStamps:false
    };
     const schema = mongoose.Schema(collection_fields,collection_config);
     const TrainerModel=mongoose.model(collection_name,schema);

     

const createTrainer =async()=>{
    await connectToMongo();

    try{
        const trainerModel = new TrainerModel({
            _id: new mongoose.Types.ObjectId(),
            name: 'Arun',
            location: 'Hyderabad',
            technology: 'MERN',
            phone_number: '8197538161',
        });

        const createdDocument = await trainerModel.save();
        console.log('Trainer created successfully',createdDocument);
    }catch(err){
        console.log(err);
    }finally{
        await mongoose.disconnect();
        console.log('Connection to Mongodb is closed');
    }
}
createTrainer();