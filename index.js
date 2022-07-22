

const express = require('express');

//crear el servidor/aplicacion de express
const app = express();

//Rutas
 app.use( '/api/auth', require('./routes/auth.js') );

// app.get('/',(req,res)=>{
//     res.json({
//         ok:true,
//         msg: 'Todo salio bien',
//         uid:123
//     })
// })


app.listen(4000,()=>{
    console.log(`Servidor corriendo en puerto ${4000}`)
})

