

const crearUsuario = (req,res)=>{
    
    return res.json({
        ok: true,
        msg: 'Crear usuario / new'
    })

}

const loginUsuario = (req,res)=>{

    return res.json({
        ok: true,
        msg: 'Login de user'
    })

}

const revalidarToken = (req,res)=>{

    return res.json({
        ok: true,
        msg: 'Renew  '
    })

}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}