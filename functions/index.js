const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const express = require('express');// servidor
const cors = require('cors');// permite backend declarar cabeceras adicionales, que reciben solicitudes de otros dominios
const app = express();// Automatically allow cross-origin requestsrouter.use(cors({ origin: true }));
app.use(cors ({origin: true }));

// END POINT PARA TRAER TODAS LAS CERVEZAS
app.get('/beers', async(req, res) => {
  const beers = await admin.firestore().collection('beers').get()
  const list = []
  beers.docs.forEach(doc => {
    list.push({id: doc.id, data: doc.data()})
  })
  res.send(list)
})

//END POINT PARA TRAER CERVEZAS POR EL ID
app.get('/beers/:id', async(req,res) => {
  const beer = await admin.firestore().collection('beers')
  .doc(req.params.id).get().then((doc) => {
    if(doc.exists) {
      return {
        id: doc.id, data: doc.data()
      }  
    }
    else {
      return {}
    }
  })
  res.send(beer)
})

//END POINT PARA CREAR CERVEZAS
app.post('/beers', async(req,res) => {
  const beer = await admin.firestore().collection('beers').add(req.body).then((doc) => {
    return doc.id
  })
  res.send(beer)
})

//END POINT PARA BORRAR CERVEZAS
app.delete('/beers/:id', async(req,res) => {
  const beer = await admin.firestore().collection('beers').doc(req.params.id).delete() 
  res.send(beer)
    })



exports.api = functions.https.onRequest(app)
