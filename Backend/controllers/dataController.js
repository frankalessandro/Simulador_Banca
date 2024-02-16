const { Pool } = require('pg')
const { CONFIG_BD } = require('../config/db');



const pool = new Pool(CONFIG_BD);

// const LoginUser = async (req, res ) => {
//  try {
//     const {Name , Password } =req.Body;

//     const nameExistsQuery = 'SELECT * FROM usuarios WHERE Name_User =$1';
//     const nameExistsValues = [Name];
//     const nameExistsResult = await pool.query(nameExistsQuery , nameExistsValues);

//     if(nameExistsResult.rows.length === 0){
//         return res.status(400).json({message: 'El Nombre no es el correcto'});

//     }
//     const bancaPassword = nameExistsResult.rows[0].Password_user;

//     if(Password !== bancaPassword){
//         return res.status(400).json({message: 'Credenciales incorrectas'});

//     }

//     const userType = nameExistsResult.rows[0].rol;

//     const userQuery = 'SELECT * FROM usuarios WHERE Name_User =$1'
//     const userValues = [Name];
//     const userResult = await pool.query( userQuery , userValues);

//     if (userResult.rows.length === 0){
//         return res.status(400).json({ massage: 'No se encontro Informacion del Usuario'});
//     }

//     const userData = userResult.rows[0];

//     userData.rol = userType;

    
//  } catch (error) {
    
//  }

// }

// module.exports = {
//     LoginUser,
// }
