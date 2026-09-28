
const express=require('express');
const cors=require('cors');
const jwt=require('jsonwebtoken');
const rateLimit=require('express-rate-limit');
const app=express();
app.use(cors()); app.use(express.json());
app.use(rateLimit({windowMs:60000,max:20}));
const produtos=[{id:1,nome:'Notebook',preco:3500},{id:2,nome:'Headset',preco:180},{id:3,nome:'Mouse',preco:90}];
app.get('/produtos',(req,res)=>res.json(produtos));
app.post('/login',(req,res)=>res.json({token:jwt.sign({usuario:'demo'},'segredo',{expiresIn:'1h'})}));
app.post('/alerta/:id',(req,res)=>res.json({ok:true,id:req.params.id}));
app.listen(3000,()=>console.log('API em http://localhost:3000'));
