
const { Router } = require('express');
const { crearUsuario, loginUsuario, revalidarToken} = require('../controllers/auth')
const router = Router();
//Crear un nuevo usuario
router.post('/new',crearUsuario)
router.post('/',loginUsuario)

router.get('/renew',revalidar)





module.exports = router;