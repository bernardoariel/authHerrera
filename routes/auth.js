const { Router } = require('express');
const { crearUsuario } = require('../controllers/auth')

const router = Router();
//Crear un nuevo usuario
router.post('/new',crearUsuario)
router.post('/',(req,res)=>{

    return res.json({
        ok: true,
        msg: 'Login de user'
    })

})

router.get('/renew',(req,res)=>{

    return res.json({
        ok: true,
        msg: 'Renew  '
    })

})


module.exports = router;