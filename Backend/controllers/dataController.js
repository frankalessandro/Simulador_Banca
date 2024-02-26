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

    // Verificar si el usuario ya existe
    const checkUserQuery = 'SELECT COUNT(*) FROM usuarios WHERE name_user = $1';
    const checkUserValues = [name];
    const userExistsResult = await pool.query(checkUserQuery, checkUserValues);
    const userExists = userExistsResult.rows[0].count > 0;

    if (userExists) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Insertar el nuevo usuario sin proporcionar un valor para id_usuario
    const insertQuery = 'INSERT INTO usuarios (name_user, password, rol, estado) VALUES ($1, $2, $3, $4)';
    const insertValues = [name, password, rol, 'Activo'];

    const result = await pool.query(insertQuery, insertValues);

    // Obtener el id generado automáticamente
    // const generatedUserId = result.rows[0].id_usuario;

    res.status(201).json({ message: 'Registro de usuario exitoso' });
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

const UpdateUser = async (req, res) => {
  const userId = req.params.id; // Obtén el ID del usuario de los parámetros de la ruta
  const updateUser = req.body; // Obtén los nuevos datos del usuario desde el cuerpo de la solicitud

  try {
    const { name1, password1, rol1 } = updateUser;

    // Realiza la actualización en la base de datos utilizando el ID
    const updateQuery = 'UPDATE usuarios SET name_user = $1, password = $2, rol = $3 WHERE id_usuario = $4';
    const updateValues = [name1, password1, rol1, userId];

    await pool.query(updateQuery, updateValues);

    res.status(200).json({ message: 'Actualización de usuario exitosa' });
  } catch (error) {
    console.error('Error al actualizar el usuario:', error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

const AddFormData = async (req, res) => {
  const formData = req.body;

  try {
    // Asegúrate de que los nombres de las propiedades en formData coincidan con los nombres de las columnas en la tabla
    const {P_nombre, S_nombre, P_apellido, S_apellido, T_doc, N_documento, C_nacimineto, Lugar_exp, F_exp, F_nacimiento, Genero, Estado_c, Nacionalidad, Direc_residencia, Bloque_Torre, Apto_Casa, Barrio, Ciudad_Municipio, Departamento, Pais, Telefono, Celular, Correo_elec, Profesion, Ocupación, Act_Eco_principal, Codigo_CIUU, N_empleados,Nombre_empresa, Direc_empresa, Barrio_Empresa, Ciudad_Municipio_empresa, Departamento_empresa, Pais_empresa, Telefono_empresa, ext, Celular_empresa, Correo_elec_empresa, In_mensuales, Otro_in_mensual, T_activos, T_pasivos, Detalle_otro_in_mensual, T_egresos_mensuales, Ventas_anuales, F_cierre_ventas, Declara_renta, Agente_retenedor, Regimen_iva, Tributo_EEUU, N_id_tributario, tributo_otro_pais, id_tributario,Origen_bienes, Pais_origen_bienes, Ciudad_origen_bienes, R_Ope_moneda_extranjera, Ope_moneda_extranjera, Nombre_entidad, Tipo_producto, N_producto, Monto_mensual_prom, Moneda, Ciudad, Pais_op_extranjera } = formData;

    // Construye la consulta de inserción
    const insertQuery = `INSERT INTO FormPersonNatural (IP_primerNombre, IP_segundoNombre, IP_primerApellido, IP_segundoApellido, IP_tipoDoc, IP_documento, IP_fechaExpedicion, IP_lugarExpedicion, IP_fechaNacimiento, IP_ciudadNac, IP_genero, IP_estadoCivil, IP_nacionalidad, ICP_direcResidencia, ICP_bloque_torre, ICP_apto_casa, ICP_barrio, ICP_ciudad_municipio, ICP_departamento, ICP_pais, ICP_telefono, ICP_celular, ICP_email, AE_profesion, AE_ocupacion, AE_detalle_act, AE_cod_ciiu, AE_n_empleados, IL_Nombre_Empresa, IL_Direc_empresa, IL_barrio, IL_Ciudad_Municipio, IL_Departamento, IL_Pais, IL_Telefono, IL_EXT, IL_celular, IL_Email_laboral, DIF_Ingresos_mensuales, DIF_Otros_ingresos, DIF_Detalle_Otros_ingresos, DIF_Total_Activos, DIF_Total_Pasivos, DIF_Total_egresos_mensuales, DIF_Ventas_anuales, DIF_Fec_cierre_ventas, IT_Declara_renta, IT_Age_retenedor, IT_Regimen_iva, IT_Tributo_EEUU, IT_id_tributo_eeuu, IT_Tributo_otro_pais, IT_id_otro_pais, IT_Origen_Bienes, IT_Pais_origen, IT_Ciudad_origen, IOIN_Moneda_extranjera, IOIN_Tipos_ope, OIN_Nombre_entidad, IOIN_Tipo_produc, IOIN_N_produc, IOIN_Monto_mensual_promedio, IOIN_Moneda, IOIN_Ciudad, IOIN_Pais )
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41, $42, $43, $44, $45, $46, $47, $48, $49, $50, $51, $52, $53, $54, $55, $56, $57, $58, $59, $60, $61, $62, $63, $64, $65)`;

    // Asegúrate de proporcionar los valores en el orden correcto
    const insertValues = [P_nombre, S_nombre, P_apellido, S_apellido, T_doc, N_documento, C_nacimineto, Lugar_exp, F_exp, F_nacimiento, Genero, Estado_c, Nacionalidad, Direc_residencia, Bloque_Torre, Apto_Casa, Barrio, Ciudad_Municipio, Departamento, Pais, Telefono, Celular, Correo_elec, Profesion, Ocupación, Act_Eco_principal, Codigo_CIUU, N_empleados,Nombre_empresa, Direc_empresa, Barrio_Empresa, Ciudad_Municipio_empresa, Departamento_empresa, Pais_empresa, Telefono_empresa, ext, Celular_empresa, Correo_elec_empresa, In_mensuales, Otro_in_mensual, T_activos, T_pasivos, Detalle_otro_in_mensual, T_egresos_mensuales, Ventas_anuales, F_cierre_ventas, Declara_renta, Agente_retenedor, Regimen_iva, Tributo_EEUU, N_id_tributario, tributo_otro_pais, id_tributario ,Origen_bienes, Pais_origen_bienes, Ciudad_origen_bienes, R_Ope_moneda_extranjera, Ope_moneda_extranjera, Nombre_entidad, Tipo_producto, N_producto, Monto_mensual_prom, Moneda, Ciudad, Pais_op_extranjera];

    // Ejecuta la consulta de inserción
    const result = await pool.query(insertQuery, insertValues);

    res.status(201).json({ message: 'Datos insertados exitosamente', data: result.rows[0] });
  } catch (error) {
    console.error('Error al insertar datos en FormPersonNatural:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};



module.exports = {
  loginUser,
  user,
  getcliente,
  AddUser,
  UpdateUser,
}

