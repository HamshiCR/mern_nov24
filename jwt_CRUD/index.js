const express =require('express');
const mangoose =require('mongoose');
const cors =require('cors');
const { default: mongoose } = require('mongoose');
const bcrypt =require('bcryptjs');
const jwt=require('jsonwebtoken');

const app = express();
app.use(express.json());
app.use(cors());

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },

    password:{
        type:String,
        required:true
    }
})

const foodSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    lastEatenDate:{
        type:Date,
        required:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
    }
})

const food =mongoose.model('food',foodSchema);

const verifyToken =(req,res,next)=>{
let token =req.headers["authorization"];
token =token.replace('Bearer',"");
if(!token)
    return res.status(403).json({message:'Token not provided'});
jwt.verify(token,"your_secret_key",(err,decoded)=>{
    if(err) return res.status(401).json({message:'failed to authenticate'});
    req.user=decoded.userId;
    next();
})
}
app.post('/api/register',async(req,res)=>{
    try {
        const {username, password}=req.body;
        const hashedPassword= await bcrypt.hash(password,10);
        const user=new user({username,password:hashedPassword});
        await user.save()
        res.status(500).json({message:'user registered successfully'})
    } catch (err) {
        console.log(err);
        res.status(500).json({error:'failed to register'});
    }
})


app.post('/api/login',async(req,res)=>{
    try{
        const {username, password}=req.body;
        const user =await UserActivation.findOne({username});
        if(!user){
            return res.status(401).json({error:'invalid credentials'});
        }
        const isMatch=awaitbcrypt.compare(password,user.password);
        if(!isMatch)
            {
            return res.status(401).json({error:'Invalid credentials'});
            const token = jwt.sign({userId:user._id},'your_secret_key',{expiresIn:'1hr'});
            res.json( {token,userId:user._id})
            } }catch(err){
                    console.log(err);
                    res.status(500).json({error:"failed to register"});

            }})
//const PORT


app.post('/api/foods',verifyToken,async(req,res)=>{
    try{
        const {name,lastEatenDate}=req.body;
        const food= new food({
            name,
            lastEatenDate:new Date(lastEatenDate),
            user:req.userId
        })
        await food.save()
        res.status(201).json({message:"food added sucessfully"});
    }catch(err){
        console.log(err)
        res.status(500).json({message:"fail to add food"});
    }
})

app.get('/api/foods', verifyToken, async (req, res) => {
    try {
        const foods = await FoodModel.find({ user: req.user._id });
        res.status(200).json(foods);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to retrieve food data" });
    }
});

app.put('/api/foods/:id', verifyToken, async (req, res) => {
    try {
        const { lastEatenDate } = req.body;
        const food = await FoodModel.findOneAndUpdate(
            { _id: req.params.id, user: req.user._id },
            { lastEatenDate: new Date(lastEatenDate) },
            { new: true }
        );

        if (!food) {
            return res.status(404).json({ message: "Food item not found" });
        }

        res.status(200).json({ message: "Food updated successfully", food });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Failed to update food" });
    }
});



const PORT =process.env.PORT||3002
app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})