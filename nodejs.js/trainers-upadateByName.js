const mongoose = require('mongoose');
const mongo_URL ="mongodb+srv://harshitha:1234@cluster0.lxeqm.mongodb.net/"

const connectToMongo =async() =>{
    mongoose.Promise =global.Promise;
    try{
        await mongoose.connect(mongo_URL);
        console.log("connectd to database")
    }catch(error){
        console.error("Failed to connect");
        process.exit()
    }
}
const collection_name = 'Trainer';
const collection_fields ={
    name:String,
    location: String,
    technology:String,
    Phone_number: String
};
const collection_config ={
    timeStamp:false
};
    const schema = mongoose.Schema(collection_fields,collection_config);
    const TrainerModel =mongoose.model(collection_name,schema);

const updateByName = async()=>{
    await connectToMongo();
     
    try{
        const trainers =await  TrainerModel.findOne({name:'Anee'});
        if(trainers){
            trainers.Phone_number='9197538161';
            const updatedTrainser =await TrainerModel.findOneAndUpdate(
                {name:'Amy'},
                {Phone_number:'9197538161'},
                {new:true},
            );
            console.log('Trainer updated by Model:',updatedTrainser);
        }
    }catch(err){
        console.log(err);
    }finally{
        await mongoose.disconnect()
        console.log('Connection to mongodb is closed')
    }

};
updateByName();