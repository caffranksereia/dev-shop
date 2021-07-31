const low = require('lowdb') //chamando o lowdb
const FileSync = require('lowdb/adapters/FileSync')// dentro do lowdb estou chamando o arquivo FilseAsync 
const express = require('express') //Estou chamando o pacote express
const app = express() //instanciando o express no app
const { v4 } = require('uuid')
const router = express.Router()
const cors = require('cors')
const adapter = new FileSync('BuyCar.json') //criando o db Todo.json 

const db = low(adapter)

const port = 3030
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

db.defaults({ BuyCar:[]}).write()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });



app.get('/BuyCarAll',(req,res) =>{
    const data = db.get('BuyCar').value()
    
    res.json(data)
   
})
app.get('/BuyCar/:id',(req,res) =>{
    
  
    const userBuyCar= db.get('BuyCar').find({id:req.params.id}).value()
    
    res.json(userBuyCar)

})
app.post('/BuyCar/post',(req,res) =>{

    const NewBuyCar = {
        id:v4(),
        Username:req.body.Username,
        name:req.body.name,
        valor:req.body.valor,
        detalhes:req.body.detalhes,
        Bio:req.body.Bio,
        localização:req.body.localização
        
        
    } 
    console.log(NewBuyCar)
    db.get('BuyCar').push(NewBuyCar).write()
    res.send("its ok")
})

app.put('/BuyCar/update/:id',(req,res) =>{
    const id = req.params.id
    const updatebody = req.body


    const produtBuy = db.get('BuyCar').find({id}).assign(updatebody).write()

   res.json(produtBuy)
})

app.delete('/BuyCar/delete/:id',(req,res) =>{
    const deleteUser = db.get('BuyCar').remove({id: req.params.id}).write()
    
    res.json(deleteUser)
    
})

app.listen(port,() =>{
    console.log(`localhost:${port}`)
})