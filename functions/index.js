const functions = require("firebase-functions");
var admin = require("firebase-admin");

var serviceAccount = require("./permissions.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const express = require('express'); 
const app = express();
const cors = require('cors');
const { firestore } = require("firebase-admin");
const db = admin.firestore()

app.use(cors({origin:true}))

app.get('/', (req, res) => {
    return res.status(200).send('Hated by life itself')
})

app.post('/api/create', async (req, res) => {
    try{
        const document = db.collection('macaco').doc(req.body.id)
            document.create({
                "name": req.body.name, 
                "age": req.body.age,
                "id": req.body.id

            })
        return res.status(200).send('Macaco criado com sucesso')
    } catch(err) {
        return res.status(400).send(err)
    }
})

//Lendo um 
app.get('/api/read/:macaco_id', async (req, res)=> {
    try{
        const document = db.collection('macaco').doc(req.params.macaco_id)
            let item = await document.get()
            let result = item.data()
        return res.status(200).send(result)
    }catch(err) {
        return res.status(400).send(err)
    }
})

//Lendo todos Primeiro vem o docs não o map

app.get('/api/readall/', async (req, res) => {

    const snapshots = await firestore().collection('macaco').get()
        const response = snapshots.docs.map(doc => doc.data())
    return res.status(200).send(response)
  
})

//Update 
app.put('/api/update/:macaco_id', async (req, res) => {
        try{
            const document = db.collection('macaco').doc(req.params.macaco_id)
               await document.update({
                   name: req.body.name, 
                   age: req.body.age, 
               })
            return res.status(200).send('Documento atualizado com sucesso!')
        }catch(err){
            return res.status(400).send(err)
        }
})

//delete 

app.delete('/api/delete/:macaco_id', async (req, res)=> {
    try {
        const document = db.collection('macaco').doc(req.params.macaco_id)
            await document.delete()
        return res.status(200).send('Documento apagado com sucesso!')
    } catch(err) {
        return res.status(400).send(err)
    }
})

//Não esqueça disso ou o Firebase não vai conseguir abrir o servidor
exports.app = functions.https.onRequest(app);