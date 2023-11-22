create table cliente (
id serial primary key,
tipocliente int(11) not null,
estado int(10) not null
)

CREATE TABLE roles (
id serial PRIMARY KEY,
rol varchar(30) NOT NULL,
estado varchar(10)NOT null
)

CREATE TABLE tipoCliente(
id serial PRIMARY KEY,
tipo varchar(30) NOT NULL,
estado varchar(10) NOT NULL
)

CREATE TABLE tipoProductos(
id serial PRIMARY KEY,
tipo varchar(30) NOT NULL,
estado varchar(10) NOT null
)

CREATE TABLE usuarios(
id serial PRIMARY KEY,
nombre varchar(120) NOT NULL,
telefono varchar(20) NOT NULL,
correo varchar(120) NOT NULL,
ficha varchar(10) NOT NULL,
rol int(11) NOT NULL,
estado varchar(30) NOT null
)

create table dataPersonalNatural(
id serial primary key ,
idcliente int(11) not null,
primerNombre varchar(30) not null,
segundoNombre varchar(30) not null,
primerApellido varchar(30) not null,
segundoApellido varchar(30) not null,
tipoDoc int(11) not null,
documento int(11) not null,
fechaExpedicion date not null,
lugarExpedicion varchar(30) not null,
fechaNacimiento date not null,
ciudadNac varchar(30) not null,
genero varchar(15) not null,
estadoCivil varchar(30)not null,
nacionalidad varchar(30)not null
)

create table dataPersonalContacNatural(
id serial primary key,
idcliente int(11) not null,
direcResidencia varchar(30)not null,
bloque_torre varchar(30) not null,
apto_casa varchar(30) not null,
barrio varchar(30) not null,
ciudad_municipio varchar(30) not null,
departamento varchar(30) not null,
pais varchar(30) not null,
telefono int(15) not null,
celular int(15) not null,
email varchar(45) not null
)

create table economicActivity(
id serial primary key,
idcliente int(11) not null,
profesion varchar(30) not null,
ocupacion varchar(30) not null,
detalle_act varchar(120) not null,
cod_ciiu int(10) not null,
n_empleados int(5)
)

create table infoLaboral(
id serial primary key,
idcliente int(11) not null,
nombre_empresa varchar(30) not null,
direc_empresa varchar(30)not null,
barrio varchar(30) not null,
ciudad_municipio varchar(30) not null,
departamento varchar(30) not null,
pais varchar(30) not null,
telefono int(15) not null,
ext int(3) not null,
celular int(15) not null,
email_laboral varchar(30) not null
)

create table infoFinanciera(
id serial primary key,
idcliente int(11) not null,
ingresos_men int(10) not null,
otros_ingresos int(10) not null,
Detalle_otros_ingresos varchar(70) not null,
total_activos int(10) not null,
total_pasivos int(10) not null,
total_egresos_me int(10) not null,
ventas_anuales int(10) not null,
fec_cierre_ventas date not null
)

CREATE TABLE infoTributaria(
id serial primary key,
idcliente int(11) not null,
declara_renta varchar(2)NOT NULL,
age_retenedor varchar(2)NOT NULL,
regimen_iva varchar(15) NOT NULL
tributo_eeuu varchar(2) NOT NULL,
id_tributo_eeuu varchar(20)NOT NULL,
tributo_otro_pais varchar(30) NOT NULL,
id_otro_pais varchar(20)NOT null
)

CREATE TABLE infoOpeInternacionales(
id serial primary key,
idcliente int(11) not null,
realiza_ope varchar(2) NOT NULL,
tipo_ope varchar(120) NOT NULL,
nombre_entidad varchar(120) NOT NULL,
tipo_produc varchar(120) NOT NULL,
n_produc int(11) NOT NULL,
monto_mensual_promedio int(11) NOT NULL,
moneda varchar(30) NOT NULL,
ciudad varchar(30) NOT NULL,
pais varchar(30) NOT null
)

CREATE TABLE declaracionBienes(
id serial primary key,
idcliente int(11) not null,
origen_bienes varchar(30) NOT NULL,
pais_origen varchar(30) NOT NULL,
ciudad_origem varchar(30) NOT nul
)























