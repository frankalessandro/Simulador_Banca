CREATE TABLE cliente (
    ID_Cliente serial PRIMARY KEY,
    Tipo_de_Cliente varchar(30),
    Estado varchar(15)
);

CREATE TABLE producto (
    ID_Producto serial PRIMARY KEY,
    ID_Cliente int,
    Estado varchar(15),
    Tipo int,
    Asignado int
);

CREATE TABLE TipoProducto (
    ID_tipo int PRIMARY KEY,
    Descripcion varchar(30)
);

CREATE TABLE usuarios (
    ID_Usuario int PRIMARY KEY, id_usuario integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    Name_User varchar(30),
    Password varchar(30),
    Rol int,
    Estado varchar(15)
);

CREATE TABLE Rol (
    ID_Rol int PRIMARY KEY,
    Nombre varchar(20),
    Estado varchar(15)
);


CREATE TABLE FormPersonNarural (
    ID_FormPN serial PRIMARY KEY,
    ID_Cliente int NOT NULL,
    --Información Personal--
    IP_primerNombre varchar(30),
    IP_segundoNombre varchar(30),
    IP_primerApellido varchar(30),
    IP_segundoApellido varchar(30),
    IP_tipoDoc varchar(20),
    IP_documento int,
    IP_fechaExpedicion date,
    IP_lugarExpedicion varchar(30),
    IP_fechaNacimiento date,
    IP_ciudadNac varchar(30),
    IP_genero varchar(2),
    IP_estadoCivil varchar(15),
    IP_nacionalidad varchar(30),
    --Información de Contacto Personal--
    ICP_direcResidencia varchar(30),
    ICP_bloque_torre varchar(30),
    ICP_apto_casa varchar(10),
    ICP_barrio varchar(20),
    ICP_ciudad_municipio varchar(20),
    ICP_departamento varchar(20),
    ICP_pais varchar(20),
    ICP_telefono int,
    ICP_celular int,
    ICP_email varchar(50),
    --Actividad Económica--
    AE_profesion varchar(30),
    AE_ocupacion varchar(30),
    AE_detalle_act varchar(50),
    AE_cod_ciiu int,
    AE_n_empleados int,
    --Información Laboral--
    IL_Nombre_Empresa varchar(25),
    IL_Direc_empresa varchar(20),
    IL_barrio varchar(20),
    IL_Ciudad_Municipio varchar(20),
    IL_Departamento varchar(20),
    IL_Pais varchar(20),
    IL_Telefono int,
    IL_EXT int,
    IL_celular int,
    IL_Email_laboral varchar(50),
    --Detalle Información Financiera--
    DIF_Ingresos_mensuales decimal(8,2),
    DIF_Otros_ingresos decimal(8,2),
    DIF_Detalle_Otros_ingresos varchar(50),
    DIF_Total_Activos int,
    DIF_Total_Pasivos int,
    DIF_Total_egresos_mensuales decimal(8,2),
    DIF_Ventas_anuales int,
    DIF_Fec_cierre_ventas date,
    --Información Operaciónes Internacionales--
    IOIN_Moneda_extranjera varchar(2),
    IOIN_Tipos_ope varchar(20),
    IOIN_Nombre_entidad varchar(30),
    IOIN_Tipo_produc varchar(25),
    IOIN_N_produc int,
    IOIN_Monto_mensual_promedio int,
    IOIN_Moneda varchar(12),
    IOIN_Ciudad varchar(20),
    IOIN_Pais varchar(20),
    --Información Tributaria--
    IT_Declara_renta varchar(2),
    IT_Age_retenedor varchar(2),
    IT_Regimen_iva varchar(2),
    IT_Tributo_EEUU varchar(2),
    IT_id_tributo_eeuu int,
    IT_Tributo_otro_pais varchar(20),
    IT_id_otro_pais int,
    IT_Origen_Bienes varchar(20),
    IT_Pais_origen varchar(20),
    IT_Ciudad_origen varchar(20)
);

-- Insertar datos en la tabla Rol
INSERT INTO Rol (ID_Rol, Nombre, Estado) VALUES
(1, 'Director', 'Activo'),
(2, 'Asesor', 'Activo');


-- Insertar datos en la tabla usuarios
INSERT INTO usuarios (ID_Usuario, Name_User, Password, Rol, Estado) VALUES
(1, 'admin', 'clave123', 1, 'Activo'),
(2, 'asesor1', 'asesor123', 2, 'Activo');

select * from usuarios;





















