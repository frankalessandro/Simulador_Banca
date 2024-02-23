const { Pool } = require('pg')
const { CONFIG_BD } = require('../config/db');

const pool = new Pool(CONFIG_BD);

const loginUser = async (req, res) => {
  try {
    const { name, password } = req.body;

    // Verificar si el correo ya está registrado
    const nameExistsQuery = 'SELECT * FROM usuarios WHERE name_user = $1';
    const nameExistsValues = [name];
    const nameExistsResult = await pool.query(nameExistsQuery, nameExistsValues);

    if (nameExistsResult.rows.length === 0) {
      return res.status(400).json({ message: 'ese nombre no está registrado' });
    }

    // Verificar el password
    const bankPassword = nameExistsResult.rows[0].password;

    if (password !== bankPassword) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Obtener el tipo de usuario (admin o cliente)
    const userType = nameExistsResult.rows[0].rol;

    // Si las credenciales son válidas, obtener todos los datos del usuario
    const userQuery = 'SELECT * FROM usuarios WHERE name_user = $1';
    const userValues = [name];
    const userResult = await pool.query(userQuery, userValues);

    if (userResult.rows.length === 0) {
      return res.status(400).json({ message: 'No se encontró información del usuario' });
    }

    // Acceder a los datos del usuario en la respuesta
    const userData = userResult.rows[0];

    // Determinar el tipo de usuario en la respuesta
    userData.rol = userType;

    // Enviar los datos del usuario en la respuesta JSON
    res.status(200).json({ message: 'Inicio de sesión exitoso', user: userData });
  } catch (error) {
    console.error('Error al intentar iniciar sesión:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

// const LoginUser = async (req, res) => {
//     try {
//         const { name, password } = req.body; // Corrección: req.Body => req.body

//         const nameExistsQuery = 'SELECT * FROM usuarios WHERE name_User =$1';
//         console.log('hola');
//         const nameExistsValues = [name];
//         const nameExistsResult = await pool.query(nameExistsQuery, nameExistsValues);

//         if (nameExistsResult.rows.length === 0) {
//             return res.status(400).json({ message: 'El Nombre no es el correcto' });
//         }

//         const bancaPassword = nameExistsResult.rows[0].Password;

//         if (password !== bancaPassword) {
//             return res.status(400).json({ message: 'Credenciales incorrectas' });
//         }

//         const userType = nameExistsResult.rows[0].rol;

//         const userQuery = 'SELECT * FROM usuarios WHERE name_User =$1';
//         const userValues = [name];
//         const userResult = await pool.query(userQuery, userValues);

//         if (userResult.rows.length === 0) {

//             return res.status(400).json({ message: 'No se encontro Informacion del Usuario' });
//         }

//         const userData = userResult.rows[0];
//         userData.rol = userType;

//         // Devolver la información del usuario, incluyendo el tipo de usuario (rol)
//         res.status(200).json({ user: userData });

//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Error en el servidor' });
//     }
// }
const user = async (req, res) => {
  try {

    const result = await pool.query('SELECT * FROM usuarios')

    if (result.rows.length > 0) {
      return res.status(200).json({ result });
    }

  } catch (error) {
    console.error(error);
  }
}

const getcliente = async (req, res) => {
  try {

    const result = await pool.query('SELECT c.ID_Cliente, fpn.IP_primerNombre as Nombre_Cliente, tp.Descripcion as Nombre_Producto, c.estado FROM cliente c JOIN producto p ON c.producto = p.tipo JOIN TipoProducto tp ON p.Tipo = tp.ID_tipo JOIN usuarios u ON c.inf_cliente = u.ID_Usuario JOIN FormPersonNatural fpn ON u.ID_Usuario = fpn.ID_FormPN;')
    if (result.rows.length > 0) {
      return res.status(200).json({ result });
    }
  } catch (error) {
    console.error(error);
  }

}

const AddUser = async (req, res) => {
  const newuser = req.body;

  try {
    const { name, password, rol } = newuser;

    // Insertar el nuevo usuario sin proporcionar un valor para id_usuario
    const insertQuery = 'INSERT INTO usuarios (name_user, password, rol, estado) VALUES ($1, $2, $3, $4)';
    const insertValues = [name, password, rol, 'Activo'];

    const result = await pool.query(insertQuery, insertValues);

    // Obtener el id generado automáticamente
    // const generatedUserId = result.rows[0].id_usuario;

    res.status(201).json({ message: 'Registro de usuario exitoso'});
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};



module.exports = {
  loginUser,
  user,
  getcliente,
  AddUser,
}

