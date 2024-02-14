const { Pool } = require('pg')
const { CONFIG_BD } = require('../config/db');

const pool = new Pool(CONFIG_BD);

