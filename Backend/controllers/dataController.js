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

const user = async (req, res) => {
  try {

    const result = await pool.query('SELECT * FROM usuarios ' )

    if (result.rows.length > 0) {
      return res.status(200).json({ result });
    }

  } catch (error) {
    console.error(error);
  }
}

const getPendiente = async (req, res) => {
  try {

    const result = await pool.query(`
    SELECT
    c.ID_Cliente,
    fpn.IP_primerNombre AS Nombre,
    fpn.IP_documento,
    c.Estado AS EstadoCliente,
    tp.Descripcion AS Producto,
    dp.N_Cuenta,
    dp.fecha
FROM
    DetalleProducto dp
    JOIN cliente c ON dp.Cliente = c.ID_Cliente
    JOIN FormPersonNatural fpn ON c.inf_cliente = fpn.ID_FormPN
    JOIN producto p ON dp.Producto = p.ID_Producto
    JOIN tipoproducto tp ON p.Tipo = tp.ID_tipo
  WHERE
   c.Estado = 'Pendiente';
    `);

    if (result.rows.length > 0) {
      return res.status(200).json({ result });
    } else {
      return res.status(404).json({ message: 'No se encontraron resultados.' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error interno del servidor.' });
  }
}
const getAutorizado = async (req, res) => {
  try {

    const result = await pool.query(`
    SELECT
    c.ID_Cliente,
    fpn.IP_primerNombre AS Nombre,
    fpn.IP_documento,
    c.Estado AS EstadoCliente,
    tp.Descripcion AS Producto,
    dp.N_Cuenta,
    dp.fecha
FROM
    DetalleProducto dp
    JOIN cliente c ON dp.Cliente = c.ID_Cliente
    JOIN FormPersonNatural fpn ON c.inf_cliente = fpn.ID_FormPN
    JOIN producto p ON dp.Producto = p.ID_Producto
    JOIN tipoproducto tp ON p.Tipo = tp.ID_tipo
WHERE
    c.Estado = 'Autorizado';
    `);

    console.log(result);

    if (result.rows.length > 0) {
      return res.status(200).json({ result });
    } else {
      return res.status(404).json({ message: 'No se encontraron resultados.' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error interno del servidor.' });
  }
}
const getDenegado = async (req, res) => {
  try {

    const result = await pool.query(`
    SELECT
    c.ID_Cliente,
    fpn.IP_primerNombre AS Nombre,
    fpn.IP_documento,
    c.Estado AS EstadoCliente,
    tp.Descripcion AS Producto,
    dp.N_Cuenta,
    dp.fecha
FROM
    DetalleProducto dp
    JOIN cliente c ON dp.Cliente = c.ID_Cliente
    JOIN FormPersonNatural fpn ON c.inf_cliente = fpn.ID_FormPN
    JOIN producto p ON dp.Producto = p.ID_Producto
    JOIN tipoproducto tp ON p.Tipo = tp.ID_tipo
    WHERE
     c.Estado = 'Denegado';
    `);

    if (result.rows.length > 0) {
      return res.status(200).json({ result });
    } else {
      return res.status(404).json({ message: 'No se encontraron resultados.' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Error interno del servidor.' });
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

 
  if(!formData.FechaCV){
    formData.FechaCV = null
  }

  const id = req.params.id;
  
  try {
    // Formulario-----------------------------------------------------------------------------------------------------------------

    // Asegúrate de que los nombres de las propiedades en formData coincidan con los nombres de las columnas en la tabla
    const { Nombre, Apellido1, Apellido2, opcines1, NDocumento, FechaE, LugarE, FechaN, CiudadN, opcines2, opcines3, Nacionalidad, DireccionR, BloqueTorre, AptoCasa, Barrio, Municipio, Departamento, Pais, Telefono, Celular, CorreoE, Profesion, opcines4, ActiEcoP, CodigoCIUU, NumeroEm, NombreEm, DireccionEm, BarrioEm, MunicipioEm, DepartamentoEm, PaisEm, TelefonoEm, Ext, CelularEm, CorreoEm, IngresosM, OIngresosM, TotalAc, Totalpa, DetalleOIM, TotalIn, VentasA, FechaCV, opcines5, opcines6, opcines7, opcines8, NumeroT, PaisT, Idtributario, FondosP, PaisFondos, CiudadFondos, opcines9, opcines10, NombreEn, opcines11, NProducto, MontoMP, Moneda, CiudadO, PaisOP } = formData;
    // Construye la consulta de inserción
    const insertQuery = `INSERT INTO FormPersonNatural (IP_primerNombre, IP_primerApellido, IP_segundoApellido, IP_tipoDoc, IP_documento, IP_fechaExpedicion, IP_lugarExpedicion, IP_fechaNacimiento, IP_ciudadNac, IP_genero, IP_estadoCivil, IP_nacionalidad, ICP_direcResidencia, ICP_bloque_torre, ICP_apto_casa, ICP_barrio, ICP_ciudad_municipio, ICP_departamento, ICP_pais, ICP_telefono, ICP_celular, ICP_email, AE_profesion, AE_ocupacion, AE_detalle_act, AE_cod_ciiu, AE_n_empleados, IL_Nombre_Empresa, IL_Direc_empresa, IL_barrio, IL_Ciudad_Municipio, IL_Departamento, IL_Pais, IL_Telefono, IL_EXT, IL_celular, IL_Email_laboral, DIF_Ingresos_mensuales, DIF_Otros_ingresos, DIF_Detalle_Otros_ingresos, DIF_Total_Activos, DIF_Total_Pasivos, DIF_Total_egresos_mensuales, DIF_Ventas_anuales, DIF_Fec_cierre_ventas, IT_Declara_renta, IT_Age_retenedor, IT_Regimen_iva, IT_Tributo_EEUU, IT_id_tributo_eeuu, IT_Tributo_otro_pais, IT_id_otro_pais, IT_Origen_Bienes, IT_Pais_origen, IT_Ciudad_origen, IOIN_Moneda_extranjera, IOIN_Tipos_ope, IOIN_Nombre_entidad, IOIN_Tipo_produc, IOIN_N_produc, IOIN_Monto_mensual_promedio, IOIN_Moneda, IOIN_Ciudad, IOIN_Pais )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37, $38, $39, $40, $41, $42, $43, $44, $45, $46, $47, $48, $49, $50, $51, $52, $53, $54, $55, $56, $57, $58, $59, $60, $61, $62, $63, $64) ;`;
    // Asegúrate de proporcionar los valores en el orden correcto
    const insertValues = [Nombre, Apellido1, Apellido2, opcines1, NDocumento, FechaE, LugarE, FechaN, CiudadN, opcines2, opcines3, Nacionalidad, DireccionR, BloqueTorre, AptoCasa, Barrio, Municipio, Departamento, Pais, Telefono, Celular, CorreoE, Profesion, opcines4, ActiEcoP, CodigoCIUU, NumeroEm, NombreEm, DireccionEm, BarrioEm, MunicipioEm, DepartamentoEm, PaisEm, TelefonoEm, Ext, CelularEm, CorreoEm, IngresosM, OIngresosM, TotalAc, Totalpa, DetalleOIM, TotalIn, VentasA, FechaCV, opcines5, opcines6, opcines7, opcines8, NumeroT, PaisT, Idtributario, FondosP, PaisFondos, CiudadFondos, opcines9, opcines10, NombreEn, opcines11, NProducto, MontoMP, Moneda, CiudadO, PaisOP];
    const resultFormPersonNatural = await pool.query(insertQuery, insertValues);
    // Segunda inserción en la tabla cliente utilizando el ID obtenido

    // Tabla cliente-------------------------------------------------------------------------------------------------------------

    const insertQueryCliente = `    
    INSERT INTO cliente (Tipo_de_Cliente, Saldo, Estado)
    VALUES ($1, $2)
    `;
    // Asegúrate de proporcionar los valores en el orden correcto
    const insertValuesCliente = ["Natural", 0,"Pendiente"];
    // Realiza la inserción en la tabla cliente
    const resultCliente = await pool.query(insertQueryCliente, insertValuesCliente);

  // Creacion usuario cliente---------------------------------------------------------------------------------------------------

    const insertQueryUsuario = `    
    INSERT INTO usuarios (name_user, password, rol, estado)
    VALUES ($1, $2, $3, $4)
    `
    let insertValuesUsuario = [NDocumento, NDocumento, 4, "Activo"]

    const resultUsuario = await pool.query(insertQueryUsuario, insertValuesUsuario);


  // Detalle---------------------------------------------------------------------------------------------------------------------

    const currentDate = new Date();
    const dia = currentDate.getDate();
    // Ten en cuenta que los meses en JavaScript son indexados desde 0 (enero es 0, febrero es 1, etc.)
    const mes = currentDate.getMonth() + 1;
    const anio = currentDate.getFullYear();
  
    const fechaFormateada = `${anio}-${mes < 10 ? '0' + mes : mes}-${dia < 10 ? '0' + dia : dia}`;

    const insertQueryDetalle= `
    INSERT INTO DetalleProducto (producto, responsable, fecha)
    VALUES ($1, $2, $3)
  `;
  const insertValuesDetalle = [1, id, fechaFormateada];
  const resultDetalle = await pool.query(insertQueryDetalle, insertValuesDetalle);

    res.status(201).json({ message: 'Datos insertados exitosamente', data: resultFormPersonNatural, resultCliente, resultUsuario ,resultDetalle });

  } catch (error) {
    console.error('Error al insertar datos:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

const Estado = async (req, res) => {
  const Id = req.params.id;
  const estado = req.body.nuevoEstado;

  try {
      // Verifica que estado esté definido antes de utilizarlo
      if (typeof estado !== 'undefined') {
          // Realiza la actualización en la base de datos utilizando el ID
          const updateQueryA = 'UPDATE cliente SET estado = $1 WHERE id_cliente = $2';
          const updateValuesA = [estado, Id];
          await pool.query(updateQueryA, updateValuesA);

          res.status(200).json({ message: 'Actualización de autorización exitosa' });
      } else {
          console.error('El valor de nuevoEstado no está definido en el cuerpo de la solicitud.');
          res.status(400).json({ message: 'Bad Request: El valor de nuevoEstado no está definido en el cuerpo de la solicitud.' });
      }
  } catch (error) {
      console.log(req.body);
      console.error('Error al actualizar la autorización:', error);
      res.status(500).json({ message: 'Error en el servidor' });
  }
};

const DelateUser = async (req , res ) => {
  try {
    const userId = req.params.userId;

    const result2 = await pool.query(`
    UPDATE DetalleProducto
    SET responsable = NULL
    WHERE responsable = ${userId}
    `) 

    // Buscar el usuario por su ID
  const result = await pool.query(
    
    `DELETE  FROM public.usuarios
    WHERE ID_Usuario = ${userId};`
  ) 

    // Enviar una respuesta de éxito
    res.status(200).json({ message: 'Usuario eliminado correctamente' });
} catch (error) {
    // Si ocurre algún error, enviar una respuesta de error con el mensaje
    console.error('Error al eliminar usuario:', error);
    res.status(500).json({ message: 'Error al eliminar usuario' });
}
}

module.exports = {
  loginUser,
  DelateUser,
  user,
  getPendiente,
  getAutorizado,
  getDenegado,
  AddUser,
  UpdateUser,
  AddFormData,
  Estado
}

