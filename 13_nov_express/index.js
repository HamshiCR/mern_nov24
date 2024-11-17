const mongoose = require('mongoose');
const express= require("express");
const cors =require('cors');
const app =express();
const port = 3000;


const FoodModel = require('C:\\learning\\mern_stack\\mern_nov24\\13_nov_express\\food.js');
// const Food=require('C:\\learning\\mern_stack\\mern_nov24\\13_nov_express\\food.js');

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://hamshicr:varun@cluster0.osbmv.mongodb.net/');

app.post('/insert',async (req,res)=>{
    const foodName= req.body.foodName;
    const days =req.body.days;
    const  food = new FoodModel({foodName:foodName,daysSinceIAte:days})
    try{
        await food.save()
       res.send('inserted data');
    }
    catch(err){
        console.log(err);

    }
})

app.put('/update',async(req,res)=>{
    const newFoodName =req.body.newFoodName;
    const id = req.body.id;
    try{
        const updateFood =await FoodModel.findById(id);
        updateFood.foodName= newFoodName;
        await updateFood.save();
        res.send('updated succesfully');
    }catch(err)
    {
        console.log(err);
    }
})

app.get('/read',async(req,res)=>{
    const result = await FoodModel.find({});
    const id = req.body.id;
    try{
        const updateFood =await FoodModel.findById(id);
        res.send(result);
    }catch(err)
    {
        console.log(err);
    }
})

app.delete('/delete/:id',async(req,res)=>{
    try{
        const id =req.params.id;
        await FoodModel.findByIdAndDelete(id);
        res.send("deleted");

    }
    catch(err){
        console.log(err);
    }
})

// app.get('/',(req,res)=>{
//     res.send('hello world');

// })

// app.post('/',(res,res)=>{
//     res.send('post request recieved');
// })

// 
app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
})
