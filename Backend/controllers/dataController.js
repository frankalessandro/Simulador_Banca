const { Pool } = require('pg')
const { CONFIG_BD } = require('../config/db');

const pool = new Pool(CONFIG_BD);



const LoginUser = async (req, res) => {
    try {
        const { name, password } = req.body; // Corrección: req.Body => req.body
        
        const nameExistsQuery = 'SELECT * FROM usuarios WHERE name_User =$1';
        console.log('hola');
        const nameExistsValues = [name];
        const nameExistsResult = await pool.query(nameExistsQuery, nameExistsValues);

        if (nameExistsResult.rows.length === 0) {
            return res.status(400).json({ message: 'El Nombre no es el correcto' });
        }

        const bancaPassword = nameExistsResult.rows[0].Password;

        if (password !== bancaPassword) {
            return res.status(400).json({ message: 'Credenciales incorrectas' });
        }

        const userType = nameExistsResult.rows[0].rol;

        const userQuery = 'SELECT * FROM usuarios WHERE name_User =$1';
        const userValues = [name];
        const userResult = await pool.query(userQuery, userValues);

        if (userResult.rows.length === 0) {

            return res.status(400).json({ message: 'No se encontro Informacion del Usuario' });
        }

        const userData = userResult.rows[0];
        userData.rol = userType;

        // Devolver la información del usuario, incluyendo el tipo de usuario (rol)
        res.status(200).json({ user: userData });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
}
const user = async (req, res)=> {
    try {

        const result = await pool.query ('SELECT * FROM usuarios')
        
        if (result.rows.length > 0) {
            return res.status(200).json({ result });
        }
        
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    LoginUser,
    user,
}

